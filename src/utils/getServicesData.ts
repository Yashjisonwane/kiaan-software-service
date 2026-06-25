import fs from 'fs';
import path from 'path';

export interface ServiceMetadata {
  id: string;
  category: string;
  name: string;
  description: string;
  icon?: string;
}

export interface ServiceCategoryGroup {
  id: string;
  title: string;
  items: (ServiceMetadata & { href: string })[];
}

export function getServicesData(): ServiceCategoryGroup[] {
  const servicesDir = path.join(process.cwd(), 'src/app/software-services');
  
  if (!fs.existsSync(servicesDir)) {
    return [];
  }

  const entries = fs.readdirSync(servicesDir, { withFileTypes: true });
  
  const allServices: (ServiceMetadata & { href: string })[] = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const metadataPath = path.join(servicesDir, entry.name, 'metadata.json');
      if (fs.existsSync(metadataPath)) {
        try {
          const fileContents = fs.readFileSync(metadataPath, 'utf8');
          const metadata = JSON.parse(fileContents) as ServiceMetadata;
          allServices.push({
            ...metadata,
            id: entry.name, // override id just to be safe it matches folder name
            href: `/services/${entry.name}`
          });
        } catch (error) {
          console.error(`Failed to parse metadata.json for ${entry.name}`, error);
        }
      }
    }
  }

  // Group by category
  const categoriesMap = new Map<string, ServiceCategoryGroup>();

  allServices.forEach(service => {
    const categoryName = service.category || 'General';
    const categoryId = categoryName.toLowerCase().replace(/\s+/g, '-');
    
    if (!categoriesMap.has(categoryId)) {
      categoriesMap.set(categoryId, {
        id: categoryId,
        title: categoryName,
        items: []
      });
    }
    
    categoriesMap.get(categoryId)!.items.push(service);
  });

  return Array.from(categoriesMap.values());
}

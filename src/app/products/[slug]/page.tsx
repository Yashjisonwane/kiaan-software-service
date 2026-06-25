import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { SaaSProductTemplate } from '@/components/SaaSProductTemplate';
import { businessCompanyData } from '@/data/businessCompanyData';
import { accountingFinanceData } from '@/data/accountingFinanceData';
import { salesMarketingData } from '@/data/salesMarketingData';
import { customerSupportData } from '@/data/customerSupportData';
import { retailInventoryData } from '@/data/retailInventoryData';
import { healthcareClinicData } from '@/data/healthcareClinicData';
import { realEstateData } from '@/data/realEstateData';
import { logisticsFleetData } from '@/data/logisticsFleetData';
import { educationData } from '@/data/educationData';
import { constructionFieldData } from '@/data/constructionFieldData';
import { legalComplianceData } from '@/data/legalComplianceData';
import { aiAutomationData } from '@/data/aiAutomationData';

// Import service pages
import { CRMSystemPage } from '@/components/ServiceCategory/Services/CRMSystem/CRMSystemPage';
import { POSSystemPage } from '@/components/ServiceCategory/Services/POSSystem/POSSystemPage';
import { HospitalManagementSystemPage } from '@/components/ServiceCategory/Services/HospitalManagementSystem/HospitalManagementSystemPage';
import { HRMSystemPage } from '@/components/ServiceCategory/Services/HRMSystem/HRMSystemPage';
import { RestaurantManagementPage } from '@/components/ServiceCategory/Services/Others/RestaurantManagement/RestaurantManagementPage';
import { RentalManagementPage } from '@/components/ServiceCategory/Services/Others/RentalManagement/RentalManagementPage';

const allSaaSData = {
    ...businessCompanyData,
    ...accountingFinanceData,
    ...salesMarketingData,
    ...customerSupportData,
    ...retailInventoryData,
    ...healthcareClinicData,
    ...realEstateData,
    ...logisticsFleetData,
    ...educationData,
    ...constructionFieldData,
    ...legalComplianceData,
    ...aiAutomationData
};

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    
    const serviceSlugs = [
        'crm-system', 
        'pos-system', 'hospital-management-system', 'hrm-system',
        'restaurant-management', 'rental-management'
    ];
    
    if (serviceSlugs.includes(slug)) {
        return {
            title: `${slug.replace(/-/g, ' ').toUpperCase()} | Kiaan Enterprise Software`,
            description: `Interactive dashboard for ${slug.replace(/-/g, ' ')}`,
        };
    }

    const product = allSaaSData[slug];

    if (!product) {
        return {
            title: 'Product Not Found | Kiaan Enterprise',
        };
    }

    return {
        title: product.metaTitle || `${product.title} | Kiaan Enterprise Software`,
        description: product.description,
        keywords: [product.mainKeyword, ...product.keywords, 'Enterprise SaaS', 'Kiaan Technology'],
    };
}

export default async function SaaSProductPage({ params }: Props) {
    const { slug } = await params;
    
    if (slug === 'crm-system') return <CRMSystemPage />;
    if (slug === 'pos-system') return <POSSystemPage />;
    if (slug === 'hospital-management-system' || slug === 'hospital-services') return <HospitalManagementSystemPage />;
    if (slug === 'hrm-system') return <HRMSystemPage />;
    if (slug === 'restaurant-management') return <RestaurantManagementPage />;
    if (slug === 'rental-management') return <RentalManagementPage />;

    const product = allSaaSData[slug];

    if (!product) {
        notFound();
    }

    return <SaaSProductTemplate data={product} />;
}

// Pre-generate paths for these pages for better performance
export async function generateStaticParams() {
    const serviceSlugs = [
        'crm-system', 
        'pos-system', 'hospital-management-system', 'hrm-system',
        'restaurant-management', 'rental-management'
    ];
    
    const productSlugs = Object.keys(allSaaSData).map((slug) => ({
        slug: slug,
    }));
    
    const servicePaths = serviceSlugs.map((slug) => ({
        slug: slug,
    }));
    
    return [...productSlugs, ...servicePaths];
}
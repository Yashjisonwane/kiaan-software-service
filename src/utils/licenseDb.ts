import fs from 'fs';
import path from 'path';

export interface License {
  id: string;
  softwareId: string;
  fullName: string;
  email: string;
  whatsapp: string;
  type: 'demo' | 'buy';
  plan?: string;
  licenseKey: string;
  status: 'active' | 'expired' | 'suspended';
  createdAt: string;
  activatedAt?: string;
  expiryDate: string;
}

const dbPath = path.join(process.cwd(), 'src/data/licenses.json');

// Ensure database folder and file exist
function ensureDb() {
  const dir = path.dirname(dbPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify([], null, 2), 'utf8');
  }
}

export function getAllLicenses(): License[] {
  ensureDb();
  try {
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data) as License[];
  } catch (error) {
    console.error('Error reading license database:', error);
    return [];
  }
}

export function saveLicenses(licenses: License[]) {
  ensureDb();
  try {
    fs.writeFileSync(dbPath, JSON.stringify(licenses, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing to license database:', error);
  }
}

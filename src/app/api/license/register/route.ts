import { NextResponse } from 'next/server';
import { getAllLicenses, saveLicenses, License } from '../../../../utils/licenseDb';

function generateLicenseKey(type: 'demo' | 'buy'): string {
  const prefix = type === 'demo' ? 'KLS-DEMO' : 'KLS-PRO';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let block1 = '';
  let block2 = '';
  let block3 = '';
  for (let i = 0; i < 4; i++) {
    block1 += chars.charAt(Math.floor(Math.random() * chars.length));
    block2 += chars.charAt(Math.floor(Math.random() * chars.length));
    block3 += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `${prefix}-${block1}-${block2}-${block3}`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { softwareId, fullName, email, whatsapp, type, plan } = body;

    if (!softwareId || !fullName || !email || !whatsapp || !type) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const licenses = getAllLicenses();

    // Check if email already has an active demo/buy license for this software to prevent duplicate leads
    const existingLicense = licenses.find(
      (l) => l.email === email && l.softwareId === softwareId && l.type === type && l.status === 'active'
    );
    if (existingLicense) {
      return NextResponse.json({
        success: true,
        message: `An active ${type === 'demo' ? 'demo' : 'premium'} license already exists for this email address.`,
        license: existingLicense
      });
    }

    const id = Date.now().toString() + Math.random().toString(36).substr(2, 5);
    const licenseKey = generateLicenseKey(type);
    const createdAt = new Date().toISOString();
    
    // Set expiry
    const expiryDate = new Date();
    if (type === 'demo') {
      expiryDate.setDate(expiryDate.getDate() + 10); // 10 days demo
    } else {
      expiryDate.setDate(expiryDate.getDate() + 30); // 30 days (1 Month) buy now
    }

    const newLicense: License = {
      id,
      softwareId,
      fullName,
      email,
      whatsapp,
      type,
      plan: plan || (type === 'demo' ? 'Trial' : 'Pro'),
      licenseKey,
      status: 'active',
      createdAt,
      expiryDate: expiryDate.toISOString()
    };

    licenses.push(newLicense);
    saveLicenses(licenses);

    return NextResponse.json({
      success: true,
      message: `${type === 'demo' ? 'Demo' : 'Subscription'} license key generated successfully.`,
      license: newLicense
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}

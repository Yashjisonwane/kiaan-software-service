import { NextResponse } from 'next/server';
import { getAllLicenses, saveLicenses } from '../../../../utils/licenseDb';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { licenseKey, softwareId } = body;

    if (!licenseKey || !softwareId) {
      return NextResponse.json(
        { success: false, error: 'License key and software ID are required.' },
        { status: 400 }
      );
    }

    const licenses = getAllLicenses();
    const licenseIndex = licenses.findIndex(
      (l) => l.licenseKey === licenseKey && l.softwareId === softwareId
    );

    if (licenseIndex === -1) {
      return NextResponse.json(
        { valid: false, reason: 'NOT_FOUND', message: 'License key is invalid for this software.' },
        { status: 404 }
      );
    }

    const license = licenses[licenseIndex];

    // Check status
    if (license.status === 'suspended') {
      return NextResponse.json({
        valid: false,
        reason: 'SUSPENDED',
        message: 'This license has been suspended.'
      });
    }

    const now = new Date();
    const expiry = new Date(license.expiryDate);

    if (now > expiry) {
      // Update status to expired
      if (license.status !== 'expired') {
        license.status = 'expired';
        licenses[licenseIndex] = license;
        saveLicenses(licenses);
      }
      return NextResponse.json({
        valid: false,
        reason: 'EXPIRED',
        message: 'Your license has expired. Please renew your subscription to continue.',
        expiryDate: license.expiryDate
      });
    }

    // If active and first time validating, record activation timestamp
    let updated = false;
    if (!license.activatedAt) {
      license.activatedAt = now.toISOString();
      updated = true;
    }

    // Recover from expired if expiry dates were updated manually/renewed
    if (license.status === 'expired') {
      license.status = 'active';
      updated = true;
    }

    if (updated) {
      licenses[licenseIndex] = license;
      saveLicenses(licenses);
    }

    // Calculate days remaining
    const diffTime = expiry.getTime() - now.getTime();
    const daysRemaining = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

    return NextResponse.json({
      valid: true,
      licenseKey: license.licenseKey,
      type: license.type,
      plan: license.plan,
      expiryDate: license.expiryDate,
      daysRemaining,
      message: 'License key validated successfully.'
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}

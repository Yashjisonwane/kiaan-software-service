import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getAllLicenses, saveLicenses } from '../../../../utils/licenseDb';

const SESSION_TOKEN = 'kiaan_super_secure_token_2026';

// Helper to verify admin session
async function verifyAdminSession(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get('kiaan_admin_session')?.value;
  return session === SESSION_TOKEN;
}

// GET: Fetch all leads
export async function GET() {
  const isAuthorized = await verifyAdminSession();
  if (!isAuthorized) {
    return NextResponse.json(
      { success: false, error: 'Unauthorized. Please login as admin.' },
      { status: 401 }
    );
  }

  const licenses = getAllLicenses();
  
  // Sort licenses: newest first
  const sorted = [...licenses].sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return NextResponse.json({ success: true, leads: sorted });
}

// POST: Manage a lead (Toggle status, extend trial, or delete)
export async function POST(request: Request) {
  const isAuthorized = await verifyAdminSession();
  if (!isAuthorized) {
    return NextResponse.json(
      { success: false, error: 'Unauthorized. Please login as admin.' },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const { action, id } = body;

    if (!id || !action) {
      return NextResponse.json(
        { success: false, error: 'Missing required parameters (id, action)' },
        { status: 400 }
      );
    }

    const licenses = getAllLicenses();
    const index = licenses.findIndex((l) => l.id === id);

    if (index === -1) {
      return NextResponse.json(
        { success: false, error: 'Lead/License not found' },
        { status: 404 }
      );
    }

    const license = licenses[index];

    if (action === 'toggleStatus') {
      license.status = license.status === 'active' ? 'suspended' : 'active';
      licenses[index] = license;
      saveLicenses(licenses);
      return NextResponse.json({
        success: true,
        message: `License status changed to ${license.status}`,
        lead: license
      });
    }

    if (action === 'extendDemo') {
      const currentExpiry = new Date(license.expiryDate);
      const now = new Date();
      
      // If already expired, extend from today, else extend from current expiry date
      const baseDate = currentExpiry > now ? currentExpiry : now;
      baseDate.setDate(baseDate.getDate() + 10); // add 10 days
      
      license.expiryDate = baseDate.toISOString();
      license.status = 'active'; // Reactivate if it was expired
      licenses[index] = license;
      saveLicenses(licenses);

      return NextResponse.json({
        success: true,
        message: 'Demo extended by 10 days successfully.',
        lead: license
      });
    }

    if (action === 'delete') {
      const filtered = licenses.filter((l) => l.id !== id);
      saveLicenses(filtered);
      return NextResponse.json({
        success: true,
        message: 'Lead deleted successfully.'
      });
    }

    return NextResponse.json(
      { success: false, error: 'Invalid action' },
      { status: 400 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// src/app/api/software/request/route.ts
import { NextResponse } from 'next/server';

// In‑memory stores (placeholder – replace with DB later)
const trials = new Map<string, Date>();
const purchases = new Map<string, string>();

export async function POST(request: Request) {
  try {
    const { softwareId, action, plan, userInfo } = await request.json();

    if (!softwareId || !action) {
      return NextResponse.json({ success: false, message: 'softwareId and action are required' }, { status: 400 });
    }

    // Demo flow
    if (action === 'demo') {
      const expiry = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000); // 10 days
      trials.set(`${softwareId}-${Date.now()}`, expiry);
      return NextResponse.json({ success: true, expiry: expiry.toISOString() });
    }

    // Buy flow
    if (action === 'buy') {
      if (!plan) {
        return NextResponse.json({ success: false, message: 'plan is required for buy' }, { status: 400 });
      }
      purchases.set(`${softwareId}-${Date.now()}`, plan);
      // Here you would integrate payment gateway using userInfo
      return NextResponse.json({ success: true, message: 'Purchase recorded' });
    }

    return NextResponse.json({ success: false, message: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}

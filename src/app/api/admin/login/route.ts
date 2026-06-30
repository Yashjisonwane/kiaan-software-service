import { NextResponse } from 'next/server';

const ADMIN_EMAIL = 'admin@kiaantech.com';
const ADMIN_PASSWORD = 'KiaanAdmin@2026';
const SESSION_TOKEN = 'kiaan_super_secure_token_2026';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const response = NextResponse.json({
        success: true,
        message: 'Login successful'
      });

      // Set cookie to keep admin logged in
      response.cookies.set('kiaan_admin_session', SESSION_TOKEN, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 1 day
        path: '/'
      });

      return response;
    }

    return NextResponse.json(
      { success: false, error: 'Invalid email or password' },
      { status: 401 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

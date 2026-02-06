import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 }
      );
    }

    const accessToken = process.env.GUMROAD_ACCESS_TOKEN;
    const productId = process.env.GUMROAD_PRODUCT_ID;

    if (!accessToken || !productId) {
      console.error('Missing Gumroad credentials');
      return NextResponse.json(
        { success: false, message: 'Configuration error' },
        { status: 500 }
      );
    }

    // Check Gumroad sales for this email
    const response = await fetch(
      `https://api.gumroad.com/v2/sales?access_token=${accessToken}&product_id=${productId}&email=${encodeURIComponent(email)}`,
      { method: 'GET' }
    );

    const data = await response.json();

    if (data.success && data.sales && data.sales.length > 0) {
      return NextResponse.json({
        success: true,
        message: 'Purchase verified',
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'No purchase found for this email' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Verification error:', error);
    return NextResponse.json(
      { success: false, message: 'Verification failed' },
      { status: 500 }
    );
  }
}

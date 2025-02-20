import { CookieNames, getCookie } from '@/helpers/get-cookie';

import { NextResponse } from 'next/server';

export async function GET() {
  const { cookieStore } = await getCookie(CookieNames.ACCESS_TOKEN);

  cookieStore.delete({
    name: CookieNames.ACCESS_TOKEN,
    secure: true,
    path: '/',
    domain: process.env.DOMAIN,
  });

  // Redirect to the main page
  return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/`, {
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
      Pragma: 'no-cache',
      Expires: '0',
    },
  });
}

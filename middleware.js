import { NextResponse } from 'next/server';
import { envConfig } from './lib/config';
import { headers } from 'next/headers';

export async function middleware(request) {
  const ip = headers().get('x-forwarded-for');
  const url = `${envConfig.serverUrl}/api/ipconfig?ip=${ip}`;
  try {
    const ipInfo = await fetch(url);
    if (ipInfo.status === 200) {
      const ipData = await ipInfo.json();
      if (ipData?.data === 'BD') {
        const url = request.nextUrl.clone();
        url.pathname = '/blocked-page';
        return NextResponse.rewrite(url);
      }
      return NextResponse.next();
    }
  } catch (error) {
    console.log(error);
  }
}

export const config = {
  matcher: ['/'],
};

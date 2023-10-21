import { NextResponse } from 'next/server';
import { envConfig } from './lib/config';

export async function middleware(request) {
  const url = `${envConfig.serverUrl}/api/ipconfig`;
  console.log(url);
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

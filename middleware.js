import { NextResponse } from 'next/server';
import { envConfig } from './lib/config';

export async function middleware(request) {
  const url = `${envConfig.serverUrl}/api/ipconfig`;
  try {
    const ipInfo = await fetch(url);
    console.log(ipInfo);
    if (ipInfo.status === 200) {
      console.log(ipInfo);
      const ipData = await ipInfo.json();
      if (ipData?.data === 'BD') {
        console.log(ipData);
        const url = request.nextUrl.clone();
        console.log(url);
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

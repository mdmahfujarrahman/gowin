import { NextResponse } from 'next/server';
import { envConfig } from './lib/config';

export async function middleware(request) {
  const check = request.headers.get('x-forwarded-for');
  const url = envConfig.ipconfig + check + envConfig.ipkey;
  try {
    const ipInfo = await fetch(url);
    if (ipInfo.status === 200) {
      const ipData = await ipInfo.json();
      if (ipData?.country === 'Bangladesh') {
        return NextResponse.error(403);
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

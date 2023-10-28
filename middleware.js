import { NextResponse } from 'next/server';

// import { envConfig } from './lib/config';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function middleware(request) {
  console.log('come');
  return NextResponse.next();
  // const ip = request.headers.get('x-forwarded-for');
  // const url = envConfig.ipconfig + ip + envConfig.ipkey;
  // try {
  //   return NextResponse.next();
  //   // const ipInfo = await fetch(url);
  //   // if (ipInfo.status === 200) {
  //   //   const ipData = await ipInfo.json();
  //   //   // if (ipData?.country === 'Bangladesh') {
  //   //   //   const url = request.nextUrl.clone();
  //   //   //   url.pathname = '/404';
  //   //   //   return NextResponse.rewrite(url);
  //   //   // }
  //   //   return NextResponse.next();
  //   // }
  // } catch (error) {
  //   console.log(error);
  // }
}

export const config = {
  matcher: ['/'],
};

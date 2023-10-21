import { NextResponse } from 'next/server';

export async function middleware(request) {
  const url = 'https://f980-37-111-223-11.ngrok-free.app/api/ipconfig';
  try {
    const ipInfo = await fetch(url);
    if (ipInfo.status === 200) {
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

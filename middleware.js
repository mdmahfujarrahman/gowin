import { NextResponse } from 'next/server';
import withAuth from 'next-auth/middleware';

import { envConfig } from './lib/config';

const authenticatedRoutes = ['/dashboard', '/results'];

const accessCountry = ['Bangladesh', 'Malaysia', 'United Arab Emirates'];

const checkIP = async request => {
  const ip = request.headers.get('x-forwarded-for');
  const url = envConfig.ipconfig + ip + envConfig.ipkey;
  const ipInfo = await fetch(url);
  const ipData = await ipInfo.json();
  if (ipData?.country) {
    if (!accessCountry.includes(ipData?.country)) {
      return Response.redirect('/error');
    }
  }
};

export default async function middleware(request) {
  try {
    await checkIP(request);
  } catch (error) {
    return new Response('Server error', { status: 500 });
  }

  if (authenticatedRoutes.includes(request.nextUrl.pathname)) {
    return withAuth(
      function authMiddleware() {
        return NextResponse.next();
      },
      {
        callbacks: {
          authorized: ({ token }) => !!token,
        },
      },
    )(request);
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/', '/dashboard', '/results', '/profile', '/pending-user'],
};

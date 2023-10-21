import { NextResponse } from 'next/server';
import { Reader } from '@maxmind/geoip2-node';
import { headers } from 'next/headers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const GET = async (req, res) => {
  try {
    const ip = headers().get('x-forwarded-for');
    console.log(ip);
    const reader = await Reader.open('./public/GeoIP2-Country.mmdb');
    const response = reader.country(ip);
    return NextResponse.json(
      {
        data: response.country.isoCode,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: error.message,
        data: error,
      },
      {
        status: 404,
      },
    );
  }
};

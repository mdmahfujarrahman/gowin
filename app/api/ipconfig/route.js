import { NextResponse } from 'next/server';
import { Reader } from '@maxmind/geoip2-node';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const GET = async (req, res) => {
  try {
    const ip = req.headers.get('x-forwarded-for');
    const reader = await Reader.open('./public/GeoIP2-Country.mmdb');
    const response = reader.country(ip);
    console.log(response);
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
        message: 'Something Wrong',
      },
      {
        status: 404,
      },
    );
  }
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    countrymmdb: './public/GeoIP2-Country.mmdb',
  },
};

module.exports = nextConfig;

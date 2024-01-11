/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com', 'gowin.ae'],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;

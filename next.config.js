/** @type {import('next').NextConfig} */
const nextConfig = {
  middleware: [
    {
      handler: './middleware.js',
      config: {
        matcher: ['/'],
      },
    },
  ],
};

module.exports = nextConfig;

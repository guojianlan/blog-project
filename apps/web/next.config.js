/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    IMAGEDOMAIN: process.env.IMAGEDOMAIN,
    APIBASEURL: process.env.APIBASEURL,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '1337',
      },
    ],
  },
};

module.exports = nextConfig;

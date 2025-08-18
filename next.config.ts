/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'morteza-mahmoudi-dev.ilarta.ir',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'header', key: 'x-forwarded-proto', value: 'http' }],
        destination: 'https://morteza-mahmoudi-dev.ilarta.ir/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
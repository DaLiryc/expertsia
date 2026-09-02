import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'header',
            key: 'x-vercel-ip-country',
            value: '(FR|BE|CH|LU|MC|CA)',
          },
        ],
        destination: '/fr',
        permanent: true,
      },
      {
        source: '/',
        has: [
          {
            type: 'header',
            key: 'x-vercel-ip-country',
            value: '(?!FR|BE|CH|LU|MC|CA).*',
          },
        ],
        destination: '/en',
        permanent: true,
      },
      {
        source: '/book',
        has: [
          {
            type: 'header',
            key: 'x-vercel-ip-country',
            value: '(FR|BE|CH|LU|MC|CA)',
          },
        ],
        destination: '/fr/book',
        permanent: true,
      },
      {
        source: '/book',
        has: [
          {
            type: 'header',
            key: 'x-vercel-ip-country',
            value: '(?!FR|BE|CH|LU|MC|CA).*',
          },
        ],
        destination: '/en/book',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

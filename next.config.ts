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
        permanent: false,
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
        permanent: false,
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
        permanent: false,
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
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

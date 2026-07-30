import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:;" },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/extended',
        destination: '/enterprise',
        permanent: true,
      },
      {
        source: '/infrastructure',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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

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
    // Old section names → new, clearer routes (keeps inbound links and SEO).
    return [
      { source: '/pricing', destination: '/contact', permanent: false },
      { source: '/ai-agency-uttar-pradesh', destination: '/', permanent: true },
      { source: '/app', destination: 'https://ai.vaslix.com', permanent: false },
      { source: '/login', destination: 'https://ai.vaslix.com', permanent: false },
      { source: '/solutions', destination: '/ai-agents', permanent: true },
      { source: '/ecosystem', destination: '/automation', permanent: true },
      { source: '/enterprise', destination: '/software', permanent: true },
      { source: '/case-studies', destination: '/work', permanent: true },
      { source: '/resources', destination: '/insights', permanent: true },
      { source: '/extended', destination: '/software', permanent: true },
      { source: '/infrastructure', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;

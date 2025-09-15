/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Configure for Replit environment  
  experimental: {
    allowedRevalidateHeaderKeys: [],
    serverActions: {
      allowedOrigins: [
        'http://127.0.0.1:5000',
        'https://127.0.0.1:5000',
        'https://*.replit.dev',
        'https://*.replit.app',
      ],
    },
  },
  // Allow all hosts for Replit's proxy environment
  async rewrites() {
    return []
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ]
  },
}

export default nextConfig

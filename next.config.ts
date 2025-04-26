import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true,
      }
    ]
  },
  images: {
    domains: ["ui-avatars.com"]
  }
};

export default nextConfig;

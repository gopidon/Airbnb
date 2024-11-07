import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "img.clerk.com"
      },
      {
        protocol: 'https',
        hostname: "wehgnsvlflggpkfsnsyn.supabase.co"
      }
    ]
  }
};

export default nextConfig;

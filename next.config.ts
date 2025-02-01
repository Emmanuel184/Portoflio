import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    domains: ['image-hosting-personal.s3.us-east-2.amazonaws.com'],
  },
};

export default nextConfig;

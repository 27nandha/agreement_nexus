import type { NextConfig } from "next";

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Disables TypeScript checking in Vercel
  },
  eslint: {
    ignoreDuringBuilds: true, // Skips ESLint in Vercel
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // ❌ Not recommended: Disables TypeScript build errors (use only if necessary)
    // ignoreBuildErrors: true,
  },
  eslint: {
    // ❌ Not recommended: Skips ESLint during build (use only if necessary)
    // ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: true, // ✅ Enables experimental features if needed
  },
  reactStrictMode: true, // ✅ Ensures better debugging and performance
};

module.exports = nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Turbopack for builds — it doesn't generate the middleware manifest
  // correctly in Next.js 16, causing 404s on Vercel.
  // Webpack (the default before Turbopack) handles middleware/proxy correctly.
};

export default nextConfig;

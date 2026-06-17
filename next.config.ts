import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Barre subexports residuales de motion del bundle de cliente.
  experimental: { optimizePackageImports: ["motion"] },
};

export default nextConfig;

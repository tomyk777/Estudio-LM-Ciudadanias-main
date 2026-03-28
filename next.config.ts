import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  images: {
    formats: ["image/avif", "image/webp"],
  },

  /* Si necesitas permitir dominios externos para next/image en el futuro: */
  // images: {
  //   remotePatterns: [{ protocol: "https", hostname: "example.com" }],
  // },
};

export default nextConfig;

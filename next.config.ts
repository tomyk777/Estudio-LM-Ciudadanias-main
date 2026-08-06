import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-accordion",
      "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-navigation-menu",
      "@radix-ui/react-popover",
      "@radix-ui/react-tabs",
      "@radix-ui/react-toast",
      "@radix-ui/react-tooltip",
    ],
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

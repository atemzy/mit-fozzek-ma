import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api-cdn.figma.com",
      },
    ],
  },
};

export default nextConfig;

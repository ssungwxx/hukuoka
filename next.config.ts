import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/hukuoka",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

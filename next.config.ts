import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/income-conversion-calculator",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

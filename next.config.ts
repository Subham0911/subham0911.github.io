import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/subhamdutta.github.io",
  assetPrefix: "/subhamdutta.github.io",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;

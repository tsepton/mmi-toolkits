import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/mmi-toolkits',
  assetPrefix: '/mmi-toolkits/',
  images: {
    unoptimized: true
  }
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  
  basePath: '/Random-Image-Gallery', 
  assetPrefix: '/Random-Image-Gallery/',
  images: {
    unoptimized: true, // Use if you are not using the next/image optimization
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output
  output: "export",
  distDir: "out",
  /* config options here */
  // BasePath settings for my github page deployment
  basePath: "/viksitbharath",
  images: {
    domains: ["picsum.photos"],
    unoptimized: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output
  output: "export",
  /* config options here */
  // BasePath settings for my github page deployment
  basePath: "/viksitbharath",
  images: {
    domains: ["picsum.photos"],
  },
};

export default nextConfig;

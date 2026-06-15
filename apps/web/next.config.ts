import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@omni-stellar-sidewalk/shared"]
};

export default nextConfig;

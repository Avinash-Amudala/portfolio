import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This app lives in a subfolder of a larger repo that has its own lockfile.
  // Pin the workspace root to this project so Turbopack resolves it correctly.
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;

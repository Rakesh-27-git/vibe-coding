import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@prisma/client", "@e2b/code-interpreter"],
};

export default nextConfig;
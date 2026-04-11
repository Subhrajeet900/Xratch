import type { NextConfig } from "next";
import withSerwistInit from "@serwist/next";

const nextConfig: NextConfig = {
  /* config options here */
};

let configToExport = nextConfig;

if (process.env.NODE_ENV !== "development") {
  const withSerwist = withSerwistInit({
    swSrc: "src/app/sw.ts",
    swDest: "public/sw.js",
  });
  configToExport = withSerwist(nextConfig);
}

export default configToExport;

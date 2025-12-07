import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
};

const withMdx = createMDX({});

export default withMdx(nextConfig);

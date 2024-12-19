import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,  // Required for static export, as image optimization is not available
  },
  basePath: "/religion0fgod"
  

};

export default withMDX(config);

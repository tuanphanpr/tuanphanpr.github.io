/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/docs",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;

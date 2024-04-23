/** @type {import('next').NextConfig} */
const nextConfig = {
 reactStrictMode: true,
 experimental: {},
 //  swcMinify:false,
 env: {
  NEXTAUTH_SECRET: "sdcweb",
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
 },
};

export default nextConfig;

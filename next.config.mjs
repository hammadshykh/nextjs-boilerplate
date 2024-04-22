/** @type {import('next').NextConfig} */
const nextConfig = {
 reactStrictMode: true,
 experimental: {},
 //  swcMinify:false,
 env: {
  NEXTAUTH_SECRET: "codingwithbas",
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
 },
};

export default nextConfig;

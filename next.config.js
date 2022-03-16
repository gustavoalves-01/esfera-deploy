/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['esferaenergia.com.br'],
  },
};

module.exports = nextConfig;

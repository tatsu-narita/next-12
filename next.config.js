/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.microcms-assets.i0"],
  },
}

module.exports = nextConfig

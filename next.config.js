/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  future: {
    webpack5: true,
  },
  swcMinify: true,
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.weatherapi.com', 'www.weatherapi.com', 'https:/cdn.weatherapi.com'],
  }
}

module.exports = nextConfig

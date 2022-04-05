/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com','media.wired.com'],
  },
  devIndicators: {
    buildActivity: false
  }
}

module.exports = nextConfig

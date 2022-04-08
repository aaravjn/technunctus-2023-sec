/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com','media.wired.com','www.personality-insights.com'],
  },
  devIndicators: {
    buildActivity: false
  }
}

module.exports = nextConfig

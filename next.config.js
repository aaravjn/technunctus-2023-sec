/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['digitalterminal.in','images.unsplash.com','media.wired.com','www.personality-insights.com'],
  },
  devIndicators: {
    buildActivity: false
  }
}

module.exports = nextConfig

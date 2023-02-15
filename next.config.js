/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify:true,
  optimizeFonts:true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
      },
    ],
    minimumCacheTTL:1500000,
  },
}

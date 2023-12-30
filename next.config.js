/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {

  },
  async rewrites() {
    return {
      fallback: [
        { source: "/:path(.+)", destination: "/api/:path*" },
      ]
    };
  },
}

module.exports = nextConfig

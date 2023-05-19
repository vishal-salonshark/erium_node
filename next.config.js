/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true },
    env: {
        DB_URI: "mongodb+srv://eriumNode:eriumnode@cluster1.x2qamwz.mongodb.net/",
        NEXTAUTH_SECRET: "codingwithvishal",
      },
}

module.exports = nextConfig

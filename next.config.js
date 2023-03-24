/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_URI:
      "mongodb+srv://admin:admin@cluster0.qxdsd.mongodb.net/nextjs?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;

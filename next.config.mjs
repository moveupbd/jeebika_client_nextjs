/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "server.jeebika.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;

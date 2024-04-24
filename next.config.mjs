/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
  
    remotePatterns: [
      { protocol: "https", hostname: "ideogram.ai" },
      { protocol: "https", hostname: "res.cloudinary.com" },

    ],
  },
};

export default nextConfig;

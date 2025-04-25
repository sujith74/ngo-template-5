import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    
    remotePatterns: [
      {
        protocol: "https",
        hostname: "th.bing.com",
        pathname: "/th/id/**",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
        pathname: "/photos/**",
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
      {
        protocol: "https",
        hostname: "png.pngtree.com",
        pathname: "/thumb_back/fh260/back_our/**",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        pathname: "/photo/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      // Add this new pattern for Unsplash
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/photo-**", // This covers most Unsplash URLs
      }
      
    ],
    
  },
};

export default nextConfig;

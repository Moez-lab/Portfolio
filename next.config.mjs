/** @type {import('next').NextConfig} */
const nextConfig = {
  // Security & hygiene
  poweredByHeader: false,

  // Enable React Strict Mode for catching subtle bugs early
  reactStrictMode: true,

  // Compress responses with gzip
  compress: true,

  // Serve modern image formats for smaller payloads
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

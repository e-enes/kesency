const nextConfig = {
  output: "export",
  trailingSlash: true,
  distDir: "dist",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.kesency.com",
        pathname: "/images/**",
      },
    ],
  },
};

module.exports = nextConfig;

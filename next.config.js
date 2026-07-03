/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'img.icons8.com', 'icons8.com'],
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config, { isServer }) => {
    // Add support for WebAssembly modules
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
      layers: true,
    };

    // Important: return the modified config
    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
  // Enable React Developer Tools in development
  // reactDevOverlay is not a valid option in this version of Next.js
  
  // Webpack 5 is the default in current Next.js versions
};

module.exports = nextConfig;

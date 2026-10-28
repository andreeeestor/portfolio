const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,

  // Serve the metadata blocking (inside <head>) for every user agent instead of
  // streaming it inside a `<div hidden>` in <body>. That hidden div is what
  // triggers the "Hydration failed ... hidden={true}" error whenever a browser
  // extension (translator, dark mode, reader, etc.) touches it before React loads.
  htmlLimitedBots: /.*/,

  images: {
    formats: ['image/avif', 'image/webp'],
    // Cards render at most ~384px wide (768px on retina); no need for the huge defaults.
    deviceSizes: [640, 828, 1080, 1280, 1600],
    imageSizes: [96, 256, 384, 512, 768],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.segueviagem.com.br',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },

  compiler: {
    // Keep console.error for real problems, drop the rest in production.
    removeConsole: { exclude: ['error'] },
  },

  experimental: {
    // The Phosphor / framer-motion barrels are huge; import only what is used.
    optimizePackageImports: [
      '@phosphor-icons/react',
      '@phosphor-icons/react/dist/ssr',
      'framer-motion',
    ],
  },
};
 
module.exports = withNextIntl(nextConfig);

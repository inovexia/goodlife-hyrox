import BuilderDevTools from '@builder.io/dev-tools/next';

/** @type {import('next').NextConfig} */
const nextConfig = BuilderDevTools()({
  // Fully disable Turbopack usage
  experimental: {
    turbopack: false,
    experimental: { webpackBuildWorker: true },
  },

  // Turbopack config must not exist
  turbopack: undefined,
});

export default nextConfig;

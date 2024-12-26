const { setupDevPlatform } = require('@cloudflare/next-on-pages/next-dev');

const nextConfig = {};

/** @type {import('next').NextConfig} */
module.exports = async (phase, defaultConfig) => {
  // Only run setupDevPlatform in development mode
  if (process.env.NODE_ENV === 'development') {
    await setupDevPlatform();
  }

  return {
    ...nextConfig, // Spread any other configurations you have
  };
};
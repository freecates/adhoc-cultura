const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  dest: 'public',
  runtimeCaching,
  disable: process.env.NODE_ENV === 'development',
});

module.exports = withPWA({
  swcMinify: true,
});

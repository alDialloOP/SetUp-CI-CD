/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  localeDetection: false,
}

const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  ...nextConfig,
}

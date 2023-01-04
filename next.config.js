/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  i18n: { locales: ["ja"], defaultLocale: "ja" },
  future: { strictPostcssConfiguration: true },
  reactStrictMode: false,
  poweredByHeader: false,
  images: {
    domains: [],
  },
};

module.exports = nextConfig;

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  i18n: { locales: ["ja"], defaultLocale: "ja" },
  future: { strictPostcssConfiguration: true },
  pageExtensions: ["page.tsx", "page.ts"],
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: [],
  },
};

module.exports = nextConfig;

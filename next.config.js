/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  i18n: { locales: ["ja"], defaultLocale: "ja" },
  future: { strictPostcssConfiguration: true },
  pageExtensions: ["page.tsx", "page.ts"],
  reactStrictMode: false,
  poweredByHeader: false,
  images: {
    domains: ["sprofile.line-scdn.net", "vpxyovqhreblordyqpdo.supabase.co"],
  },
};

module.exports = nextConfig;

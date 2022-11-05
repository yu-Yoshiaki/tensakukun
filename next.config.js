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
    domains: [
      "sprofile.line-scdn.net",
      "vpxyovqhreblordyqpdo.supabase.co",
      "profile.line-scdn.net",
      "img.youtube.com",
    ],
  },
};

module.exports = nextConfig;

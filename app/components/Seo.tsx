import Head from "next/head";

type Props = {
  url?: string;
  type?: "article" | "blog" | "website";
  title?: string;
  description?: string;
  image?: string;
  twitterCard?: "summary" | "app" | "player" | "summary_large_image";
};

const baseData: Props = {
  url: process.env.NEXT_PUBLIC_PROJECT_URL + "/lp",
  type: "website",
  title: `${process.env.NEXT_PUBLIC_PROJECT_NAME} | LINEマーケティングツール`,
  description:
    "LINE公式アカウントをより便利にする拡張ツール。タグでお客様管理、細かなセグメント配信、分析機能でブランド力を向上。",
  image: process.env.NEXT_PUBLIC_PROJECT_URL + "/トップ画.png",
  twitterCard: "summary_large_image",
};
export const Seo = (props: Props) => {
  return (
    <Head>
      <title>
        {props.title
          ? `${props.title} | ${process.env.NEXT_PUBLIC_PROJECT_NAME}`
          : baseData.title}
      </title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <head prefix="og: https://ogp.me/ns#" />
      <meta property="og:url" content={props.url ?? baseData.url} />
      <meta property="og:type" content={props.type ?? baseData.type} />
      <meta property="og:title" content={baseData.title} />
      <meta property="og:description" content={baseData.description} />
      <meta property="og:site_name" content={baseData.title} />
      <meta property="og:image" content={props.image ?? baseData.image} />
      <meta
        name="twitter:card"
        content={props.twitterCard ?? baseData.twitterCard}
      />
      {/* <!-- Chrome / Firefox / Edge --> */}
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>💬</text></svg>"
      />
    </Head>
  );
};

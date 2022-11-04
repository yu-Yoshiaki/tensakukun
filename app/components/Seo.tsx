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
  url: "https://lplus.vercel.app/lp",
  type: "website",
  title: "Lプラス | LINEマーケティングツール",
  description:
    "LINE公式アカウントをより便利にする拡張ツール。タグでお客様管理、細かなセグメント配信、分析機能でブランド力を向上。",
  image: "/トップ画.png",
  twitterCard: "summary_large_image",
};
export const Seo = (props: Props) => {
  return (
    <Head>
      <title>{props.title + " | Lプラス" ?? baseData.title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <head prefix="og: https://ogp.me/ns#" />
      <meta property="og:url" content={props.url ?? baseData.url} />
      <meta property="og:type" content={props.type ?? baseData.type} />
      <meta property="og:title" content={props.title ?? baseData.title} />
      <meta
        property="og:description"
        content={props.description ?? baseData.description}
      />
      <meta property="og:site_name" content={props.title ?? baseData.title} />
      <meta property="og:image" content={props.image ?? baseData.image} />
      <meta
        name="twitter:card"
        content={props.twitterCard ?? baseData.twitterCard}
      />
    </Head>
  );
};

// import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { TagSection } from "./TagSection";

import { Section } from "app/lp/components/Section";
import { Header } from "./components/Header";
import { Center } from "app/lp/components/Center";

export const LpPage = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <Head>
        <title>Lプラス | LINEマーケティングをパワーアップ</title>
      </Head>
      <div className="grid-cols-[250px,auto] md:grid">
        <Header />
        <main className="h-screen overflow-y-scroll pb-20">
          <Section
            title="🧰 LINE公式アカウントをより便利にする拡張ツール"
            titleTextSize="text-5xl"
          >
            <Center>
              <p className="text-xl">
                タグ機能を使った
                <span className="font-semibold">顧客の詳細管理</span>、
                <span className="font-semibold">細かなセグメント配信</span>、
                <span className="font-semibold">分析</span>が可能。
                <br />
                細かなニーズをすくい上げ、顧客満足度をあげることが可能になります。
              </p>
            </Center>
            <Center>
              <div id="top" className="relative h-[50vh] w-full">
                <Image
                  src={"/トップ画.png"}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Center>
          </Section>
          <Section title="タグ機能で詳細な顧客管理を">
            <TagSection />
          </Section>
        </main>
      </div>
    </div>
  );
};

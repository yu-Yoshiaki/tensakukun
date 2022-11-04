// import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import YouTube from "react-youtube";

import { Section } from "app/lp/components/Section";
import { Header } from "./components/Header";
import { Center } from "app/lp/components/Center";
import { Card } from "app/lp/components/Card";
import { useState } from "react";
import { Seo } from "app/components/Seo";

const opts = {
  height: "250",
  width: "450",
  playerVars: {
    autoplay: 1,
  },
};
const opts2 = {
  height: "200",
  width: "350",
  playerVars: {
    autoplay: 1,
  },
};

export const LpPage = () => {
  const [isMeneOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMeneOpen);
  };
  return (
    <div className="bg-gray-100 text-gray-800 leading-relaxed tracking-wider">
      <Seo />
      <div className="grid-cols-[250px,auto] md:grid">
        <div>
          <div className="hidden md:block">
            <Header />
          </div>
          <div className="md:hidden flex items-center justify-end p-3">
            <button
              onClick={handleMenuOpen}
              className="p-2 text-white bg-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            {isMeneOpen && (
              <div className="fixed top-0 left-0 z-10">
                <Header />
              </div>
            )}
          </div>
        </div>
        <main className="h-screen overflow-y-scroll md:pt-20">
          <Center>
            <div id="top" className="md:w-[700px]">
              <Image
                src={"/トップ画.png"}
                alt=""
                // layout="fill"
                // objectFit="contain"
                width={1280}
                height={670}
              />
            </div>
          </Center>
          <Section
            title="🧰 LINE公式アカウントをより便利にする拡張ツール"
            titleTextSize="text-2xl md:text-5xl"
            id="top"
          >
            <Center>
              <p className="md:text-lg">
                ブランド力向上やマーケティングにおいて、顧客情報の収集はマストです。
                <br />
                Lプラスでは、お客様の行動を収集し、集めた情報に則ったマーケティングが可能。
                <br />
                結果として顧客満足度をあげ、ブランド価値を高めることに繋がります。
                <br />
                Lプラスは、そのための機能が詰まったマーケティングツールです。
              </p>
            </Center>
          </Section>
          <Section title="タグ機能で詳細な顧客管理" id="tag">
            <Center>
              <div className="md:grid grid-cols-2 gap-8">
                <p className="md:text-xl flex items-center">
                  リンククリック、リッチメニュー、メッセージ配信など。お客様のアクション毎に多彩なタグを付与できます。
                  <br />{" "}
                  付与したタグをもとに次に行うべきアクションが可視化します。
                </p>
                <div className="hidden md:block">
                  <YouTube videoId="zCoZ4VkJ-gg" opts={opts} />
                </div>
                <div className="md:hidden">
                  <YouTube videoId="zCoZ4VkJ-gg" opts={opts2} />
                </div>
              </div>
            </Center>
          </Section>
          <Section title="友だち追加経路がわかるURL機能" id="tag">
            <Center>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-1 rounded-md bg-gray-700 flex items-center justify-center">
                  <Image src={"/url.png"} alt="" width={440} height={260} />
                </div>
                <p className="md:text-xl flex items-center">
                  経路別に友だち追加URLを自由に発行できます。
                  <br />
                  どこからの経路が多いのか、高CVRはどこかなど。
                  <br />
                  さまざまな用途でご利用いただけます。
                </p>
              </div>
            </Center>
          </Section>
          <div className="bg-gray-800 text-white">
            <Section title="📈分析機能でサービス改善" id="chart">
              <Center>
                <div className="space-y-10 ">
                  <p className="md:text-xl flex items-center justify-center">
                    多様なレイアウトからお好みのを選んで分析が可能です。
                  </p>
                  <div className="grid md:grid-cols-2 gap-2 md:px-20">
                    <Image
                      src={"/pie.png"}
                      alt=""
                      width={200}
                      height={300}
                      objectFit="contain"
                    />
                    <Image
                      src={"/bar.png"}
                      alt=""
                      width={200}
                      height={300}
                      objectFit="contain"
                    />
                    <Image
                      src={"/table.png"}
                      alt=""
                      width={800}
                      height={400}
                      objectFit="contain"
                    />
                  </div>
                </div>
              </Center>
            </Section>
          </div>
          <Section title="🔧使い方" id="use">
            <div className="space-y-20">
              <Center>
                <p className="md:text-xl md:w-[700px] text-center">
                  連携も設定もカンタン。
                  <br />
                </p>
              </Center>
              <Center>
                <div className="grid md:grid-cols-[180px,50px,180px,50px,180px,50px,180px] gap-4">
                  <div className="space-y-4 flex flex-col md:items-start items-center">
                    <div className="shadow-md">
                      <Image
                        src={"/createLineAccount.png"}
                        alt=""
                        // layout="fill"
                        // objectFit="cover"
                        width={1280}
                        height={700}
                      />
                    </div>
                    <p className="font-bold text-xl">1. 立ち上げ</p>
                    <p className="text-sm">
                      LINEアカウントの作成。プランを選定。
                    </p>
                  </div>
                  <p className="flex items-center justify-center text-2xl ">
                    <span className="rotate-90 md:rotate-0">▶︎</span>
                  </p>
                  <div className="space-y-4 flex flex-col md:items-start items-center">
                    <div className="shadow-md">
                      <Image
                        src={"/connectLplus.png"}
                        alt=""
                        width={1280}
                        height={700}
                      />
                    </div>
                    <p className="font-bold text-xl">2. 連携</p>
                    <p className="text-sm">
                      LプラスにLINEアカウントを連携します。連携が確認できしだい利用可能です。
                    </p>
                  </div>
                  <p className="flex items-center justify-center text-2xl">
                    <span className="rotate-90 md:rotate-0">▶︎</span>
                  </p>
                  <div className="space-y-4 flex flex-col md:items-start items-center">
                    <div className="shadow-md">
                      <Image
                        src={"/operateAccount.png"}
                        alt=""
                        width={1280}
                        height={700}
                      />
                    </div>
                    <p className="font-bold text-xl">3. 運営</p>
                    <p className="text-sm">
                      実際にアカウントを運営し、情報や知見を収集します。
                    </p>
                  </div>
                  <p className="flex items-center justify-center text-2xl">
                    <span className="rotate-90 md:rotate-0">▶︎</span>
                  </p>
                  <div className="space-y-4 flex flex-col md:items-start items-center">
                    <div className="shadow-md">
                      <Image
                        src={"/chart.png"}
                        alt=""
                        width={1280}
                        height={700}
                      />
                    </div>
                    <p className="font-bold text-xl">4. 改善</p>
                    <p className="text-sm">
                      分析機能を利用し、サービス向上をしましょう。
                    </p>
                  </div>
                </div>
              </Center>
            </div>
          </Section>
          <Section title="💡特徴" id="feature">
            <Center>
              <div className="grid md:grid-cols-3 gap-12">
                <Card
                  img="/operate.png"
                  header="スムーズな操作"
                  body="私たちの設計思想は「シンプルに。美しく。」です。ただ情報量を減らすのではなく、次に行うべきアクションを提示することで、ノンストレスな操作を可能にします。"
                />
                <Card
                  img="/design.png"
                  header="見やすいデザイン"
                  body="一目でわかる様に派手な装飾は排除。パソコンに不慣れな方でも直感的に操作できるよう、徹底的に拘っています。"
                />
                <Card
                  img="/geek.png"
                  header="すばやい開発力"
                  body="私たちのサービスは数名のエンジニアで開発されています。すばやい意思決定のもと、高速な機能改善を実現。"
                />
              </div>
            </Center>
          </Section>{" "}
          <Section title="ご利用方法" id="how">
            <Center>
              <p className="font-bold">
                下記フォームよりご連絡ください。後日、私たちからご連絡いたします。
              </p>
            </Center>
          </Section>
          <Section title="" id="contact">
            <Center>
              <iframe
                src="https://form.run/embed/@arelease-labo-1667108571?embed=direct"
                frameBorder="0"
                width={"100%"}
                height={1000}
              ></iframe>
            </Center>
          </Section>
        </main>
      </div>
    </div>
  );
};

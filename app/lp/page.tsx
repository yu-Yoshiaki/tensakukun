// import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import YouTube from "react-youtube";

import { Section } from "app/lp/components/Section";
import { Header } from "./components/Header";
import { Center } from "app/lp/components/Center";
import { Card } from "app/lp/components/Card";
import { PieChartComponent } from "app/lp/components/PieChart";
import { BarChartComponent } from "app/lp/components/BarChart";
import { useState } from "react";

const opts = {
  height: "250",
  width: "450",
  playerVars: {
    autoplay: 1,
  },
};
const opts2 = {
  height: "250",
  width: "300",
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
      <Head>
        <title>Lプラス | LINEマーケティングをパワーアップ</title>
      </Head>
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
          >
            <Center>
              <p className="text-lg md:text-xl">
                <span className="font-semibold">顧客の詳細管理</span>、
                <span className="font-semibold">細かなセグメント配信</span>、
                <span className="font-semibold">分析</span>
                <br />
                機能で細かなニーズをすくい上げ、顧客満足度をあげることが可能になります。
              </p>
            </Center>
          </Section>
          <Section title="タグ機能で詳細な顧客管理">
            <Center>
              <div className="md:grid grid-cols-2 gap-8">
                <p className="text-xl flex items-center">
                  詳細な顧客情報を得ることでパーソナライズなサービスが可能。顧客満足度の向上を図ることができます。
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
          <div className="bg-gray-800 text-white">
            <Section title="📈分析機能でサービス改善">
              <Center>
                <div className="flex flex-col gap-10 items-center">
                  <p className="text-lg md:text-xl flex items-center">
                    多様なレイアウトからお好みのを選んで分析が可能です。
                  </p>
                  <div className="md:grid grid-cols-2 gap-10 space-y-10">
                    <div className="bg-gray-100 rounded-md flex items-center justify-center">
                      <PieChartComponent
                        data={[
                          { name: "Twitter", value: 240 },
                          { name: "FaceBook", value: 110 },
                          { name: "Instagram", value: 300 },
                          { name: "TicToc", value: 280 },
                          { name: "WEBサイト", value: 90 },
                          { name: "店舗", value: 70 },
                        ]}
                      />
                    </div>
                    <div className="bg-gray-100 rounded-md flex items-center justify-center">
                      <BarChartComponent
                        data={[
                          { name: "Twitter", men: 100, wom: 140 },
                          { name: "FaceBook", men: 70, wom: 40 },
                          { name: "Instagram", men: 100, wom: 200 },
                          { name: "TicToc", men: 130, wom: 150 },
                          { name: "WEBサイト", men: 80, wom: 10 },
                          { name: "店舗", men: 20, wom: 70 },
                        ]}
                      />
                    </div>
                  </div>
                  <table className="max-w-[700px] border-white overflow-hidden">
                    <tr className="text-center text-gray-700 h-10 border-b border-white">
                      <th className="w-[200px] bg-gray-50"></th>
                      <th className="w-[200px] bg-green-200">全体</th>
                      <th className="w-[200px] bg-blue-200">男性</th>
                      <th className="w-[200px] bg-red-200">女性</th>
                    </tr>
                    <tr className="text-gray-700 text-center h-10 whitespace-nowrap border-b border-white">
                      <th className="bg-gray-50 ">Twitter</th>
                      <td className="bg-green-200">240</td>
                      <td className="bg-blue-200">100</td>
                      <td className="bg-red-200">140</td>
                    </tr>
                    <tr className="bg-gray-50 text-center h-10 text-gray-700 whitespace-nowrap border-b border-white">
                      <th className="bg-gray-50 ">FaceBook</th>
                      <td className="bg-green-200">110</td>
                      <td className="bg-blue-200">70</td>
                      <td className="bg-red-200">40</td>
                    </tr>
                    <tr className="bg-green-200 text-gray-700 text-center h-10 whitespace-nowrap border-b border-white">
                      <th className="bg-gray-50 ">Instagram</th>
                      <td className="bg-green-200">300</td>
                      <td className="bg-blue-200">100</td>
                      <td className="bg-red-200">200</td>
                    </tr>
                    <tr className="bg-gray-50 text-center h-10 text-gray-700 whitespace-nowrap border-b border-white">
                      <th className="bg-gray-50 ">TicToc</th>
                      <td className="bg-green-200">280</td>
                      <td className="bg-blue-200">130</td>
                      <td className="bg-red-200">150</td>
                    </tr>
                    <tr className="bg-green-200 text-gray-700 text-center h-10 whitespace-nowrap border-b border-white">
                      <th className="bg-gray-50 ">WEBサイト</th>
                      <td className="bg-green-200">90</td>
                      <td className="bg-blue-200">80</td>
                      <td className="bg-red-200">10</td>
                    </tr>
                    <tr className="bg-gray-50 text-center h-10 text-gray-700 whitespace-nowrap border-b border-white">
                      <th className="bg-gray-50 ">店舗</th>
                      <td className="bg-green-200">70</td>
                      <td className="bg-blue-200">20</td>
                      <td className="bg-red-200">50</td>
                    </tr>
                  </table>
                </div>
              </Center>
            </Section>
          </div>
          <Section title="🔧使い方">
            <div className="space-y-20">
              <Center>
                <p className="text-lg md:text-xl md:w-[700px] text-center">
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
          <Section title="💡特徴">
            <Center>
              <div className="grid md:grid-cols-3 gap-12">
                <Card
                  img="/operate.png"
                  header="スムーズな操作"
                  body="Lプラスの設計思想は「シンプルに。美しく。」です。ただ情報量を減らすのではなく、次に行うべきアクションを提示することで、ノンストレスな操作を可能にします。"
                />
                <Card
                  img="/design.png"
                  header="見やすいデザイン"
                  body="一目でわかる様に派手な装飾は排除。パソコンに不慣れな方でも直感的に操作できるよう、徹底的に拘っています。"
                />
                <Card
                  img="/geek.png"
                  header="すばやい開発力"
                  body="弊社のサービスは数名のエンジニアで開発されています。すばやい意思決定のもと、高速な機能改善を実現。"
                />
              </div>
            </Center>
          </Section>
          <Section title="お問合せ">
            <Center>
              <script src="https://sdk.form.run/js/v2/embed.js"></script>
              <div
                className="formrun-embed"
                data-formrun-form="@arelease-labo-1667108571"
                data-formrun-redirect="true"
              ></div>
              <iframe
                src="https://form.run/embed/@arelease-labo-1667108571?embed=direct"
                frameBorder="0"
                width={"100%"}
                height={1000}
              ></iframe>
            </Center>
          </Section>
          <Section title="Vision">
            <Center>
              <div className="text-center">
                <p>
                  <span className="font-bold">
                    システムの力で誰もが自己実現できる手助けを。
                  </span>
                </p>
              </div>
            </Center>
          </Section>
        </main>
      </div>
    </div>
  );
};

import Image from "next/image";
import YouTube from "react-youtube";

import { Section } from "app/lp/components/Section";
import { Header } from "./components/Header";
import { Center } from "app/lp/components/Center";
import { useState } from "react";
import { Seo } from "app/components/Seo";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";

const Test = dynamic<{}>(() => import("./Test").then((module) => module.Test));

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
                {process.env.NEXT_PUBLIC_PROJECT_NAME}
                では、お客様の行動を収集し、集めた情報に則ったマーケティングが可能。
                <br />
                結果として顧客満足度をあげ、ブランド価値を高めることに繋がります。
                <br />
                {process.env.NEXT_PUBLIC_PROJECT_NAME}
                は、そのための機能が詰まったマーケティングツールです。
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
          <Test />
        </main>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      ssg: "ssg",
    },
  };
};

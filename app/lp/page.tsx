import Image from "next/image";

import { Section } from "app/lp/components/Section";
import { Header } from "./components/Header";
import { Center } from "app/lp/components/Center";
import { useState } from "react";
import { Seo } from "app/components/Seo";
import dynamic from "next/dynamic";

const TagSection = dynamic<{}>(() =>
  import("./components/TagSection").then((module) => module.TagSection)
);
const UrlSection = dynamic<{}>(() =>
  import("./components/UrlSection").then((module) => module.UrlSection)
);
const Analytics = dynamic<{}>(() =>
  import("./components/Analytics").then((module) => module.Analytics)
);
const UseSection = dynamic<{}>(() =>
  import("./components/UseSection").then((module) => module.UseSection)
);
const Test = dynamic<{}>(() =>
  import("./components/Test").then((module) => module.Test)
);
const Contact = dynamic<{}>(() =>
  import("./components/Contact").then((module) => module.Contact)
);

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
              id="menu"
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
          <TagSection />
          <UrlSection />
          <Analytics />
          <UseSection />
          <Test />
          <Contact />
        </main>
      </div>
    </div>
  );
};

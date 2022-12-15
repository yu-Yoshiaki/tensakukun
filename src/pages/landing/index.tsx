import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { Seo } from "src/components/Seo";
import { Center } from "src/pages/landing/components/Center";
import { Section } from "src/pages/landing/components/Section";

import { Header } from "./components/Header";

const TagSection = dynamic<Record<string, unknown>>(
  async () => {
    const module = await import("./components/TagSection");
    return module.TagSection;
  },
  { ssr: false }
);
const UrlSection = dynamic<Record<string, unknown>>(
  async () => {
    const module = await import("./components/UrlSection");
    return module.UrlSection;
  },
  { ssr: false }
);
const Analytics = dynamic<Record<string, unknown>>(
  async () => {
    const module = await import("./components/Analytics");
    return module.Analytics;
  },
  { ssr: false }
);
const UseSection = dynamic<Record<string, unknown>>(
  async () => {
    const module = await import("./components/UseSection");
    return module.UseSection;
  },
  { ssr: false }
);
const Test = dynamic<Record<string, unknown>>(
  async () => {
    const module = await import("./components/Test");
    return module.Test;
  },
  { ssr: false }
);
const Contact = dynamic<Record<string, unknown>>(
  async () => {
    const module = await import("./components/Contact");
    return module.Contact;
  },
  { ssr: false }
);

export const Landing = () => {
  const [isMeneOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMeneOpen);
  };
  return (
    <div className="bg-gray-100 leading-relaxed tracking-wider text-gray-800">
      <Seo />
      <div className="grid-cols-[250px,auto] md:grid">
        <div>
          <div className="hidden md:block">
            <Header />
          </div>
          <div className="flex items-center justify-end p-3 md:hidden">
            <button
              onClick={handleMenuOpen}
              className="bg-black p-2 text-white"
              id="menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
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
            <div id="top" className="w-full max-w-[700px]">
              <Image
                src={"/トップ画.png"}
                alt=""
                layout="responsive"
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

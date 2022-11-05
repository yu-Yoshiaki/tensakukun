import { Card } from "app/lp/components/Card";
import { Center } from "app/lp/components/Center";
import { Section } from "app/lp/components/Section";
import Image from "next/image";

export const Test = () => {
  return (
    <div>
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
                <p className="font-bold md:text-xl">1. 立ち上げ</p>
                <p className="text-sm">LINEアカウントの作成。プランを選定。</p>
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
                <p className="font-bold md:text-xl">2. 連携</p>
                <p className="text-sm">
                  {process.env.NEXT_PUBLIC_PROJECT_NAME}
                  にLINEアカウントを連携します。連携が確認できしだい利用可能です。
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
                <p className="font-bold md:text-xl">3. 運営</p>
                <p className="text-sm">
                  実際にアカウントを運営し、情報や知見を収集します。
                </p>
              </div>
              <p className="flex items-center justify-center text-2xl">
                <span className="rotate-90 md:rotate-0">▶︎</span>
              </p>
              <div className="space-y-4 flex flex-col md:items-start items-center">
                <div className="shadow-md">
                  <Image src={"/chart.png"} alt="" width={1280} height={700} />
                </div>
                <p className="font-bold md:text-xl">4. 改善</p>
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
    </div>
  );
};

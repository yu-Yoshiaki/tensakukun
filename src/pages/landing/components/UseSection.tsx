import Image from "next/image";
import { Center } from "src/pages/landing/components/Center";
import { Section } from "src/pages/landing/components/Section";

export const UseSection = () => {
  return (
    <Section title="🔧使い方" id="use">
      <div className="space-y-20">
        <Center>
          <p className="text-center md:w-[700px] md:text-xl">
            連携も設定もカンタン。
            <br />
          </p>
        </Center>
        <Center>
          <div className="grid gap-4 md:grid-cols-[180px,50px,180px,50px,180px,50px,180px]">
            <div className="flex flex-col items-center space-y-4 md:items-start">
              <div className="w-full shadow-md">
                <Image
                  src={"/createLineAccount.png"}
                  alt=""
                  layout="responsive"
                  width={213}
                  height={116}
                />
              </div>
              <p className="font-bold md:text-xl">1. 立ち上げ</p>
              <p className="text-sm">LINEアカウントの作成。プランを選定。</p>
            </div>
            <p className="flex items-center justify-center text-2xl ">
              <span className="rotate-90 md:rotate-0">▶︎</span>
            </p>
            <div className="flex flex-col items-center space-y-4 md:items-start">
              <div className="w-full shadow-md">
                <Image
                  src={"/connectLplus.png"}
                  alt=""
                  layout="responsive"
                  width={213}
                  height={116}
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
            <div className="flex flex-col items-center space-y-4 md:items-start">
              <div className="w-full shadow-md">
                <Image
                  src={"/operateAccount.png"}
                  alt=""
                  layout="responsive"
                  width={213}
                  height={116}
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
            <div className="flex flex-col items-center space-y-4 md:items-start">
              <div className="w-full shadow-md">
                <Image
                  src={"/chart.png"}
                  alt=""
                  layout="responsive"
                  width={213}
                  height={116}
                />
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
  );
};

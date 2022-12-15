import { Center } from "src/lp/components/Center";
import { Section } from "src/lp/components/Section";
import Image from "next/image";

export const UseSection = () => {
  return (
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
              <div className="shadow-md w-full">
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
            <div className="space-y-4 flex flex-col md:items-start items-center">
              <div className="shadow-md w-full">
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
            <div className="space-y-4 flex flex-col md:items-start items-center">
              <div className="shadow-md w-full">
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
            <div className="space-y-4 flex flex-col md:items-start items-center">
              <div className="shadow-md w-full">
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

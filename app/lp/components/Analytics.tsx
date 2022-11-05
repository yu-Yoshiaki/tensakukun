import { Center } from "app/lp/components/Center";
import { Section } from "app/lp/components/Section";
import Image from "next/image";

export const Analytics = () => {
  return (
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
  );
};

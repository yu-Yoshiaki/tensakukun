import { Center } from "app/lp/components/Center";
import { Section } from "app/lp/components/Section";
import Image from "next/image";

export const UrlSection = () => {
  return (
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
  );
};

import Image from "next/image";
import { Center } from "src/pages/landing/components/Center";
import { Section } from "src/pages/landing/components/Section";

export const UrlSection = () => {
  return (
    <Section title="友だち追加経路がわかるURL機能" id="tag">
      <Center>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex items-center justify-center rounded-md bg-gray-700 p-1">
            <Image src={"/url.png"} alt="" width={440} height={260} />
          </div>
          <p className="flex items-center md:text-xl">
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

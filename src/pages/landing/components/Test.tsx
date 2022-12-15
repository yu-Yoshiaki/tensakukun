import { Center } from "src/pages/landing/components/Center";
import { Section } from "src/pages/landing/components/Section";
import { Card } from "src/pages/landing/components/Card";

export const Test = () => {
  return (
    <div>
      <Section title="💡特徴" id="feature">
        <Center>
          <div className="grid gap-12 md:grid-cols-3">
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
      </Section>
      <Section title="ご利用方法" id="how">
        <Center>
          <p className="font-bold">
            下記フォームよりご連絡ください。後日、私たちからご連絡いたします。
          </p>
        </Center>
      </Section>
    </div>
  );
};

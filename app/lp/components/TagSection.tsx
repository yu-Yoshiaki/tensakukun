import { useWindowSize } from "app/hooks/useWindowSize";
import { Center } from "app/lp/components/Center";
import { Section } from "app/lp/components/Section";

export const TagSection = () => {
  const { windowSize, responsive } = useWindowSize();
  const size = () => {
    if (windowSize.width > responsive.md) {
      return {
        height: "250",
        width: "450",
      };
    } else {
      return {
        height: "200",
        width: "350",
      };
    }
  };

  return (
    <Section title="タグ機能で詳細な顧客管理" id="tag">
      <Center>
        <div className="md:grid grid-cols-2 gap-8">
          <p className="md:text-xl flex items-center">
            リンククリック、リッチメニュー、メッセージ配信など。お客様のアクション毎に多彩なタグを付与できます。
            <br /> 付与したタグをもとに次に行うべきアクションが可視化します。
          </p>
          <iframe
            width={size().width}
            height={size().height}
            src="https://www.youtube.com/embed/zCoZ4VkJ-gg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Center>
    </Section>
  );
};

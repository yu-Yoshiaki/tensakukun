import { useWindowSize } from "app/hooks/useWindowSize";
import { Center } from "app/lp/components/Center";
import { Section } from "app/lp/components/Section";
import YouTube from "react-youtube";

export const TagSection = () => {
  const { windowSize, responsive } = useWindowSize();
  const youtubeSize = () => {
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

  const opts = {
    ...youtubeSize(),
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Section title="タグ機能で詳細な顧客管理" id="tag">
      <Center>
        {console.log("--------", opts)}
        <div className="md:grid grid-cols-2 gap-8">
          <p className="md:text-xl flex items-center">
            リンククリック、リッチメニュー、メッセージ配信など。お客様のアクション毎に多彩なタグを付与できます。
            <br /> 付与したタグをもとに次に行うべきアクションが可視化します。
          </p>
          <YouTube videoId="zCoZ4VkJ-gg" opts={opts} />
        </div>
      </Center>
    </Section>
  );
};

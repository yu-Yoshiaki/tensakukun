import { useWindowSize } from "app/hooks/useWindowSize";
import { Center } from "app/lp/components/Center";
import { Section } from "app/lp/components/Section";
import { useState } from "react";
import Image from "next/image";

export const TagSection = () => {
  const [isMovieStart, setMovieStart] = useState(false);
  const { windowSize, responsive } = useWindowSize();
  const youtubeId = "zCoZ4VkJ-gg";
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
          {isMovieStart ? (
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              width={size().width}
              height={size().height}
            ></iframe>
          ) : (
            <div className="relative">
              <Image
                width={size().width}
                height={size().height}
                objectFit="cover"
                src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
                alt="サムネイル"
              />
              <div className="absolute flex items-center top-0 bottom-0 justify-center left-0 right-0">
                <Image
                  src={`/youtube.png`}
                  onClick={() => setMovieStart(true)}
                  alt="サムネイル"
                  width={80}
                  height={70}
                />
              </div>
            </div>
          )}
        </div>
      </Center>
    </Section>
  );
};

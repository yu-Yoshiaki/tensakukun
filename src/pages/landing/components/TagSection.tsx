import Image from "next/image";
import { useState } from "react";
import { useWindowSize } from "src/hooks/useWindowSize";
import { Center } from "src/pages/landing/components/Center";
import { Section } from "src/pages/landing/components/Section";

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
  const handleStart = () => {
    return setMovieStart(true);
  };

  return (
    <Section title="タグ機能で詳細な顧客管理" id="tag">
      <Center>
        <div className="grid-cols-2 gap-8 md:grid">
          <p className="flex items-center md:text-xl">
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
            <div className="relative bg-blue-300">
              <div className="w-full">
                <Image
                  width={size().width}
                  height={size().height}
                  layout="responsive"
                  src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
                  alt="サムネイル"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[90px] bg-white">
                  <Image
                    src={`/youtube.png`}
                    onClick={handleStart}
                    alt="サムネイル"
                    layout="responsive"
                    objectFit="cover"
                    width={8}
                    height={7}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </Center>
    </Section>
  );
};

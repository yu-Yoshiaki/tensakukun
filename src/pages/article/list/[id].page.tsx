import type { CustomNextPage } from "next";
import { BlogLayout } from "src/component";

//導入
const Introduction = () => {
  return (
    <div className={"py-10 w-full text-center bg-red-300"}>
      <div className={"text-2xl font-bold md:text-4xl"}>TITLE</div>
      <div className={""}>LeadLeadLeadLeadLeadLead</div>
    </div>
  );
};

//本文
const Body = () => {
  const paraGraph = [
    { h2: "見出し 1", body: "本文 1" },
    { h2: "見出し 2", body: "本文 2" },
    { h2: "見出し 3", body: "本文 3" },
  ];
  return (
    <div className={"bg-red-400"}>
      {paraGraph.map((p) => {
        return (
          <div key={p.h2}>
            <div className={"text-lg font-bold md:text-xl"}>{p.h2}</div>
            <div className={"h-96"}>{p.body}</div>
          </div>
        );
      })}
    </div>
  );
};
//まとめ
const Summary = () => {
  return (
    <div className={"bg-red-500"}>
      <div className={"h-96"}>
        <div>まとめ</div>
        <div>本文</div>
      </div>
    </div>
  );
};

const Article: CustomNextPage = () => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen bg-white">
      <Introduction />
      <Body />
      <Summary />
    </div>
  );
};

Article.getLayout = BlogLayout;

export default Article;

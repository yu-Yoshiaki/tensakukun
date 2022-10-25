import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// const User = [
//   {
//     name: "田中",
//     follow: "unfollow",
//     tags: [
//       { id: 1, name: "instagram" },
//       {
//         id: 2,
//         name: "東京都",
//       },
//       { id: 3, name: "20歳" },
//     ],
//   },
//   {
//     name: "佐藤",
//     follow: "unfollow",
//     tags: [
//       { id: 1, name: "instagram" },
//       {
//         id: 2,
//         name: "東京都",
//       },
//       { id: 3, name: "20歳" },
//     ],
//   },
//   {
//     name: "鈴木",
//     follow: "unfollow",
//     tags: [
//       { id: 1, name: "instagram" },
//       {
//         id: 2,
//         name: "東京都",
//       },
//       { id: 3, name: "20歳" },
//     ],
//   },
//   {
//     name: "小林",
//     follow: "unfollow",
//     tags: [
//       { id: 1, name: "instagram" },
//       {
//         id: 2,
//         name: "東京都",
//       },
//       { id: 3, name: "20歳" },
//     ],
//   },
//   {
//     name: "池田",
//     follow: "unfollow",
//     tags: [
//       { id: 1, name: "instagram" },
//       {
//         id: 2,
//         name: "東京都",
//       },
//       { id: 3, name: "20歳" },
//     ],
//   },
//   {
//     name: "太田",
//     follow: "unfollow",
//     tags: [
//       { id: 1, name: "instagram" },
//       {
//         id: 2,
//         name: "東京都",
//       },
//       { id: 3, name: "20歳" },
//     ],
//   },
//   {
//     name: "大木",
//     follow: "unfollow",
//     tags: [
//       { id: 1, name: "instagram" },
//       {
//         id: 2,
//         name: "東京都",
//       },
//       { id: 3, name: "20歳" },
//     ],
//   },
// ];
const menu = [
  {
    text: "顧客情報",
    href: "#customer",
  },
  {
    text: "流入経路",
    href: "#inflow",
  },
  {
    text: "メッセージ配信",
    href: "#message",
  },
  {
    text: "タグ管理",
    href: "#tags",
  },
  {
    text: "分析",
    href: "/",
  },
];

const Tags = () => {
  return (
    <div id="tags">
      <h2 className="flex justify-center text-2xl font-bold">タグ機能</h2>
    </div>
  );
};

const Top = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="flex justify-center text-5xl font-bold">Lプラス</h2>
      <p>
        公式LINE用マーケティングツール <br />
      </p>
      <div className="rounded-lg bg-gray-600 p-2">
        <div className="relative h-[400px] w-[800px]">
          <Image src={"/lptop.png"} alt="" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
};
const LP = () => {
  return (
    <div className="bg-gray-100 text-gray-700 ">
      <Head>
        <title>Lプラス| LINE拡張ツール</title>
      </Head>
      <div className="grid-cols-[250px,auto] md:grid">
        <header className="flex h-screen w-[250px] flex-col gap-40 border-r bg-white px-4 py-5 md:justify-between md:gap-0">
          <div className="space-y-4">
            <h1 className="text-center font-bold text-gray-700 sm:text-2xl lg:text-3xl">
              <span className="text-6xl">L</span>プラス
            </h1>
            <div className="rounded-lg bg-gray-300 p-5 text-[10px]">
              <p>
                LINE公式アカウントをより便利にする拡張ツール。
                <br />
                タグ機能を使った
                <span className="font-semibold">顧客の詳細管理</span>、
                <span className="font-semibold">細かなセグメント配信</span>、
                <span className="font-semibold">分析</span>が可能。
                <br />
                細かなニーズをすくい上げ、顧客満足度をあげることが可能になります。
              </p>
            </div>
            <ul className="space-y-2">
              {menu.map((data) => {
                return (
                  <li
                    key={data.text}
                    className="py-2 text-lg hover:bg-gray-100 hover:text-xl"
                  >
                    <Link href={data.href}>
                      <a
                        className={`flex items-center gap-3 whitespace-nowrap  font-bold text-gray-700`}
                      >
                        {data.text}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col items-start gap-2">
            <button className="font-semibold">困りごと 🤔</button>
            <button className="font-semibold">利用規約</button>

            <p className="text-xs font-semibold text-gray-500">
              Created by Lプラス
            </p>
          </div>
        </header>

        <main className="h-screen overflow-y-scroll">
          <Top />
          <Tags />
        </main>
      </div>
    </div>
  );
};

export default LP;

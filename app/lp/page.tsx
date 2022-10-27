// import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ImageFill } from "app/components";
import { Tag } from "app/tags/Tag";

const Customer = [
  {
    name: "田中",
    follow: "unfollow",
    tags: [1, 2, 3, 5],
  },
  {
    name: "佐藤",
    follow: "follow",
    tags: [4, 7, 11, 5],
  },
  {
    name: "鈴木",
    follow: "follow",
    tags: [1, 3, 8, 6],
  },
  // {
  //   name: "小林",
  //   follow: "follow",
  //   tags: [10, 9, 7],
  // },
  // {
  //   name: "池田",
  //   follow: "unfollow",
  //   tags: [3, 4, 5],
  // },
  // {
  //   name: "太田",
  //   follow: "follow",
  //   tags: [9, 8, 6],
  // },
  // {
  //   name: "大木",
  //   follow: "follow",
  //   tags: [2, 12, 13],
  // },
];
const menu = [
  {
    text: "TOP",
    href: "#top",
  },
  {
    text: "タグ機能",
    href: "#tags",
  },

  {
    text: "流入経路",
    href: "#inflow",
  },
  {
    text: "メッセージ配信",
    href: "#message",
  },
];
const Gridtable = () => {
  const [row, setRow] = useState([]);
  const [colum, setColum] = useState([]);
  const [a, setA] = useState();

  return (
    <div className={`grid grid-cols-${colum.length}`}>
      {colum &&
        colum.map((col, index) => {
          <div></div>;
        })}
    </div>
  );
};

const Tags = () => {
  // const BarChartTagsbyGender = dynamic(
  //   async () => {
  //     const module = await import("src/lp");
  //     return module.Demographic;
  //   },
  //   { ssr: false }
  // );
  const tags = [
    { id: 1, name: "instagram" },
    { id: 2, name: "東京" },
    { id: 3, name: "20代" },
    { id: 4, name: "大阪" },
    { id: 5, name: "男性" },
    { id: 6, name: "女性" },
    { id: 7, name: "30代" },
    { id: 8, name: "ニュースNo.01読者" },
    { id: 9, name: "ニュースNo.02読者" },
    { id: 10, name: "twitter" },
    { id: 11, name: "取材時QR" },
    { id: 12, name: "レジ横QR" },
    { id: 13, name: "アンケート回答済" },
  ];
  return (
    <div id="tags" className="flex flex-col gap-4 items-center">
      <h2 className="text-5xl font-bold">タグ機能</h2>
      <p>
        Lプラスでは自由にタグを発行することができます。発行したタグはさまざまな用途で活用することができます。
        <br />
        主な活用方法
        <ul className="list-decimal px-10">
          <li className="font-semibold">ユーザーに割り当てて顧客管理</li>
          <li className="font-semibold">URLに割り当てて流入経路判別</li>
          <li className="font-semibold">タグ分けしたセグメント配信</li>
          <li className="font-semibold">タグの割り当て別行動分析</li>
        </ul>
      </p>
      <div className="flex flex-wrap gap-2 pt-3 bg-white w-[500px] p-5 rounded-lg">
        {tags.map((tag) => {
          return <Tag name={tag.name} />;
        })}
      </div>
      <div className="divide-y border-y">
        {Customer.map((d) => {
          return (
            <div key={d.name} className="h-[90px] bg-white px-4">
              <div className="grid grid-cols-[auto,1fr,auto] gap-3 py-3 ">
                <div className="flex items-center justify-center">
                  <ImageFill
                    width="w-12"
                    height="h-12"
                    src={"/test.jpg"}
                    alt={""}
                    objectFit="cover"
                    className="flex items-center rounded-full"
                  />
                </div>

                <div className="flex flex-col items-start gap-3">
                  <div className="flex gap-2">
                    <p className="text-lg font-semibold">{d.name}</p>
                    <div className="flex items-center">
                      <p
                        className={`flex items-center gap-1 rounded-md px-1 font-semibold ${
                          d.follow === "follow" ? "bg-green-300" : "bg-red-300"
                        }`}
                      >
                        <span className="text-xl">
                          {d.follow === "follow" ? "😊" : "🥺"}
                        </span>
                        <span className="text-[12px] md:text-[1px]">
                          {d.follow === "follow" ? "フォロー中" : "ブロック"}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="hidden-scrollbar flex w-[400px] items-center gap-2 overflow-x-auto">
                    {d.tags.map((num, index) => {
                      const d = tags.find((e) => e.id === num);
                      return <Tag key={index} name={d?.name as string} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Top = () => {
  return (
    <div
      id="top"
      className="flex min-h-screen flex-col items-center justify-center"
    >
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
export const LpPage = () => {
  return (
    <div className="bg-gray-100 text-gray-700">
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

        <main className="h-screen overflow-y-scroll pb-20">
          <Top />
          <Tags />
          <BarChart
            className="bg-white"
            width={500}
            height={250}
            data={[
              { name: "大阪", mens: 80, wemen: 100 },
              { name: "東京", mens: 140, wemen: 200 },
              { name: "名古屋", mens: 90, wemen: 90 },
              { name: "北海道", mens: 30, wemen: 40 },
              { name: "沖縄", mens: 12, wemen: 15 },
            ]}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={"name"} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="mens" fill="#8884d8" />
            <Bar dataKey="wemen" fill="pink" />
          </BarChart>
          <div></div>
        </main>
      </div>
    </div>
  );
};

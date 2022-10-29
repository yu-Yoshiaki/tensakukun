import { ImageFill } from "app/components";
import { BarChartComponent } from "app/lp/components/BarChart";
import { PieChartComponent } from "app/lp/components/PieChart";
import { RaderChartComponent } from "app/lp/components/RaderChart";
import { AddTaglist } from "app/lp/components/AddTaglist";
import { Tag } from "app/tags/Tag";
import { useState } from "react";
import YouTube from "react-youtube";
import { TableChart } from "app/lp/components/TableChart";

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
  {
    name: "小林",
    follow: "follow",
    tags: [10, 9, 7],
  },
  {
    name: "池田",
    follow: "unfollow",
    tags: [3, 4, 5],
  },
  {
    name: "太田",
    follow: "follow",
    tags: [9, 8, 6],
  },
  {
    name: "大木",
    follow: "follow",
    tags: [2, 12, 13],
  },
];

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

export const TagSection = () => {
  const [taglist, setTaglist] = useState(tags);
  const [select, setSelect] = useState<{ id: number; name: string }[]>([]);
  const [newCustomer, setNewCustomer] = useState([
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
  ]);
  // const BarChartTagsbyGender = dynamic(
  //   async () => {
  //     const module = await import("src/lp");
  //     return module.Demographic;
  //   },
  //   { ssr: false }
  // );

  const handleSelect = (tag: { id: number; name: string }) => {
    if (select.some((t) => t.id === tag.id)) return;
    setSelect([...select, tag]);
    const filter = newCustomer.filter((c) => {
      return c.tags.some((num) => num === tag.id);
    });
    console.log(filter);

    setNewCustomer(filter);
  };

  const handleDel = (tag: { id: number; name: string }) => {
    const newSelect = select.filter((t) => t.id !== tag.id);
    if (newSelect.length === 0) {
      setNewCustomer(Customer);
    } else {
      //   setNewCustomer(filter);
    }

    setSelect(newSelect);
  };
  const opts = {
    height: "500",
    width: "800",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <p className="text-xl w-[700px]">
          Lプラスでは自由にタグを発行することができます。発行したタグはさまざまな用途で活用することができます。
          <br />
          主な活用方法
          <ul className="list-decimal p-8">
            <li className="font-semibold text-2xl">
              ユーザーに割り当てて顧客管理
            </li>
            <li className="font-semibold text-2xl">
              URLに割り当てて流入経路判別
            </li>
            <li className="font-semibold text-2xl">タグ別セグメント配信</li>
            <li className="font-semibold text-2xl">タグ別行動分析</li>
          </ul>
        </p>
      </div>
      <h3 className="text-4xl font-bold">顧客管理</h3>
      <YouTube videoId="zCoZ4VkJ-gg" opts={opts} />;
      <h3 className="text-4xl font-bold">クロス分析</h3>
      <p>
        タグ✖︎タグを表形式で確認することができます。下記は操作可能なデモになります。
      </p>
      <TableChart />
      <div className="grid grid-cols-2 gap-4 px-20">
        <div className="space-y-4">
          <h3 className="text-4xl font-bold">棒グラフ</h3>
          <BarChartComponent />
        </div>
        <div className="space-y-4">
          <h3 className="text-4xl font-bold">レーダーチャート</h3>
          <RaderChartComponent />
        </div>
      </div>
    </div>
  );
};

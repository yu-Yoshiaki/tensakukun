import { ImageFill } from "app/components";
import { BarChartComponent } from "app/lp/components/BarChart";
import { PieChartComponent } from "app/lp/components/PieChart";
import { RaderChartComponent } from "app/lp/components/RaderChart";
import { AddTaglist } from "app/lp/components/AddTaglist";
import { Tag } from "app/tags/Tag";
import { useState } from "react";
import YouTube from "react-youtube";
import { TableChart } from "app/lp/components/TableChart";
import { Center } from "app/lp/components/Center";

// const Customer = [
//   {
//     name: "田中",
//     follow: "unfollow",
//     tags: [1, 2, 3, 5],
//   },
//   {
//     name: "佐藤",
//     follow: "follow",
//     tags: [4, 7, 11, 5],
//   },
//   {
//     name: "鈴木",
//     follow: "follow",
//     tags: [1, 3, 8, 6],
//   },
//   {
//     name: "小林",
//     follow: "follow",
//     tags: [10, 9, 7],
//   },
//   {
//     name: "池田",
//     follow: "unfollow",
//     tags: [3, 4, 5],
//   },
//   {
//     name: "太田",
//     follow: "follow",
//     tags: [9, 8, 6],
//   },
//   {
//     name: "大木",
//     follow: "follow",
//     tags: [2, 12, 13],
//   },
// ];

// const tags = [
//   { id: 1, name: "instagram" },
//   { id: 2, name: "東京" },
//   { id: 3, name: "20代" },
//   { id: 4, name: "大阪" },
//   { id: 5, name: "男性" },
//   { id: 6, name: "女性" },
//   { id: 7, name: "30代" },
//   { id: 8, name: "ニュースNo.01読者" },
//   { id: 9, name: "ニュースNo.02読者" },
//   { id: 10, name: "twitter" },
//   { id: 11, name: "取材時QR" },
//   { id: 12, name: "レジ横QR" },
//   { id: 13, name: "アンケート回答済" },
// ];

export const TagSection = () => {
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
    </div>
  );
};

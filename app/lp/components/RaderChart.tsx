import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Twitter",
    A: 180,
    B: 180,
    fullMark: 1000,
  },
  {
    subject: "FaceBook",
    A: 266,
    B: 100,
    fullMark: 1000,
  },
  {
    subject: "Instagram",
    A: 186,
    B: 230,
    fullMark: 1000,
  },
  {
    subject: "TicTok",
    A: 110,
    B: 240,
    fullMark: 1000,
  },
  {
    subject: "ホームページ",
    A: 140,
    B: 150,
    fullMark: 1000,
  },
  {
    subject: "プロモーションA",
    A: 300,
    B: 70,
    fullMark: 1000,
  },
];

export const RaderChartComponent = () => {
  return (
    <ResponsiveContainer width={500} height={250} className={"bg-white"}>
      <RadarChart cx="50%" cy="50%" outerRadius="60%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar
          name="女性流入経路"
          dataKey="B"
          stroke="#8884d8"
          fill="pink"
          fillOpacity={0.7}
        />
        <Radar
          name="男性流入経路"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

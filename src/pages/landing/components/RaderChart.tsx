import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Twitter",
    a: 180,
    b: 180,
    fullMark: 1000,
  },
  {
    subject: "FaceBook",
    a: 266,
    b: 100,
    fullMark: 1000,
  },
  {
    subject: "Instagram",
    a: 186,
    b: 230,
    fullMark: 1000,
  },
  {
    subject: "TicTok",
    a: 110,
    b: 240,
    fullMark: 1000,
  },
  {
    subject: "ホームページ",
    a: 140,
    b: 150,
    fullMark: 1000,
  },
  {
    subject: "プロモーションA",
    a: 300,
    b: 70,
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
          dataKey="b"
          stroke="#8884d8"
          fill="pink"
          fillOpacity={0.7}
        />
        <Radar
          name="男性流入経路"
          dataKey="a"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

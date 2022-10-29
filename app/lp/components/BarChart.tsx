import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  BarChart,
} from "recharts";

export const BarChartComponent = () => {
  return (
    <BarChart
      className="bg-white"
      width={500}
      height={250}
      data={[
        { name: "大阪", mens: 150, wemen: 100 },
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
  );
};

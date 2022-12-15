import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const BarChartComponent = (props: {
  data: { name: string; men: number; wom: number }[];
}) => {
  return (
    <BarChart
      className="bg-gray-100"
      width={380}
      height={280}
      data={props.data}
      margin={{
        top: 20,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={"name"} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="men" stackId={"a"} fill="#8884d8" />
      <Bar dataKey="wom" stackId={"a"} fill="pink" />
    </BarChart>
  );
};

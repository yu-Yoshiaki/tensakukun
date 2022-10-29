import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  BarChart,
  ResponsiveContainer,
} from "recharts";

export const BarChartComponent = (props: {
  data: { name: string; men: number; wom: number }[];
}) => {
  return (
    <ResponsiveContainer width="90%" height="90%">
      <BarChart
        className="bg-gray-100"
        width={480}
        height={280}
        data={props.data}
        margin={{
          top: 20,
          right: 20,
          left: 20,
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
    </ResponsiveContainer>
  );
};

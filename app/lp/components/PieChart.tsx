import { PieChart, Pie, Cell, LabelList, Tooltip } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export const PieChartComponent = (props: {
  data: { name: string; value: number }[];
}) => {
  const sum = (d: { name: string; value: number }[]) => {
    let all = 0;
    d.map((d) => {
      all = all + d.value;
    });
    return all;
  };

  return (
    <PieChart width={500} height={300} className="font-bold text-red-700">
      <Pie
        data={props.data}
        dataKey="value"
        cx="50%"
        cy="50%"
        startAngle={90}
        endAngle={450}
        innerRadius={30}
        outerRadius={100}
        fill="#8884d8"
        label
        className="font-bold text-red-700"
      >
        <LabelList
          dataKey={(d: any) => `${d.name}`}
          position="inside"
          fill="black"
          className="font-bold text-black"
          angle={45}
          fontSize={12}
          fontWeight={"bold"}
          fontStyle={30}
        />
        {props.data?.map((_, index) => (
          <Cell key={index} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

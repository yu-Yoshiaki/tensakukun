import { PieChart, Pie, Cell, LabelList, Tooltip } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
// const colors2 = ["#0088FE", "pink"];

export const PieChartComponent = (props: {
  data: { name: string; value: number }[];
  // data2: { name: string; value: number }[];
}) => {
  const sum = (d: { name: string; value: number }[]) => {
    let all = 0;
    d.map((d) => {
      all = all + d.value;
    });
    return all;
  };

  return (
    <PieChart width={500} height={400} className="bg-gray-500">
      <Pie
        data={props.data}
        dataKey="value"
        cx="50%"
        cy="50%"
        startAngle={0}
        endAngle={360}
        outerRadius={180}
        fill="#8884d8"
      >
        <LabelList
          className="text-gray-400"
          dataKey={(d: any) =>
            `${d.name} : ${Math.round((d.value / sum(props.data)) * 100)}%`
          }
          position="insideLeft"
        />
        {props.data?.map((_, index) => (
          <Cell key={index} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      {/* {props.data2 && (
        <Pie
          data={props.data2}
          dataKey="value"
          cx="50%"
          cy="50%"
          startAngle={0}
          endAngle={360}
          innerRadius={120}
          outerRadius={150}
          fill="#8884d8"
        >
          <LabelList
            className="text-gray-400"
            dataKey={(d: any) =>
              `${d.name} : ${Math.round((d.value / sum(props.data2)) * 100)}%`
            }
            position="inside"
          />
          {props.data2.map((_, index) => (
            <Cell
              key={index}
              fill={colors2[index % colors2.length]}
              className="text-black"
            />
          ))}
        </Pie>
      )} */}
      <Tooltip />
    </PieChart>
  );
};

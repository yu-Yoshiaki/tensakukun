import dayjs from "dayjs";
import { Cell, LabelList, Pie, PieChart } from "recharts";

const colors = [
  {
    name: "orange",
    value: "#fb923c",
  },
  {
    name: "yellow",
    value: "#fde047",
  },
  {
    name: "lime",
    value: "#bef264",
  },
  {
    name: "eme",
    value: "#6ee7b7",
  },
  {
    name: "cyan",
    value: "#67e8f9",
  },
  {
    name: "purple",
    value: "#d8b4fe",
  },
  {
    name: "rose",
    value: "#fda4af",
  },
  {
    name: "yellow",
    value: "#fde047",
  },
  {
    name: "lime",
    value: "#bef264",
  },
  {
    name: "eme",
    value: "#6ee7b7",
  },
  {
    name: "cyan",
    value: "#67e8f9",
  },
];
export type Return = {
  available: boolean;
  genders: {
    gender: "unknown" | "male" | "female";
    percentage: number;
  }[];
  ages: {
    age:
      | "from15to19"
      | "from20to24"
      | "from25to29"
      | "from30to34"
      | "from35to39"
      | "from40to44"
      | "from45to49"
      | "from50"
      | "unknown";
    percentage: number;
  }[];
  areas: {
    area: string;
    percentage: number;
  }[];
  appTypes: {
    appType: "ios" | "android" | "others";
    percentage: 62.4;
  }[];
  subscriptionPeriods: {
    subscriptionPeriod:
      | "over365days"
      | "within365days"
      | "within180days"
      | "within90days"
      | "within30days"
      | "within7days";
    percentage: number;
  }[];
};

const testDate: Return = {
  available: true,
  genders: [
    {
      gender: "unknown",
      percentage: 17,
    },
    {
      gender: "male",
      percentage: 38,
    },
    {
      gender: "female",
      percentage: 45,
    },
  ],
  ages: [
    {
      age: "from15to19",
      percentage: 14,
    },
    {
      age: "from20to24",
      percentage: 13,
    },
    {
      age: "from25to29",
      percentage: 13,
    },
    {
      age: "from30to34",
      percentage: 12,
    },
    {
      age: "from35to39",
      percentage: 11,
    },
    {
      age: "from40to44",
      percentage: 10,
    },
    {
      age: "from45to49",
      percentage: 9,
    },
    {
      age: "from50",
      percentage: 8,
    },
    {
      age: "unknown",
      percentage: 10,
    },
  ],
  areas: [],
  appTypes: [],
  subscriptionPeriods: [],
};
// const getDemographic = async (url: string, token: string) => {
//   const { data } = await axios.post(url, {
//     token,
//   });
//   return data;
// };

export const Demographic = () => {
  const date = dayjs().subtract(3, "day").format("YYYY/MM/DD");

  //   const { data } = useSWR<Return>(
  //     [`/api/getDemographic`, props.token],
  //     getDemographic
  //   );

  //   if (!data) return <div>Loading...</div>;
  //({ age }) => age.replace("from", "").replace("to", "~")
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">
        友だちの属性別、統計情報（{date}時点）
      </h3>
      <div className="p-4 bg-yellow-50 font-semibold text-sm">
        ⚠ 統計情報を表示するには20人以上のターゲットリーチが必要です。
      </div>
      <div>
        {!testDate.available && (
          <div className="p-1 bg-white">データがありません。</div>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-5 bg-white rounded-lg">
          <h4>年齢比率</h4>
          <PieChart width={500} height={300}>
            <Pie
              data={testDate.ages}
              dataKey="percentage"
              nameKey="age"
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius={120}
              fill="#8884d8"
              startAngle={90}
              endAngle={450}
              labelLine
              legendType={"triangle"}
              label={(d: any) => {
                if (d.age === "from50") {
                  return d.age.replace("from", "") + "+";
                }
                return d.age.replace("from", "").replace("to", "~");
              }}
            >
              <LabelList
                dataKey={(d: any) => d.percentage + "%"}
                position="inside"
              />
              {testDate.ages.map((age, index) => (
                <Cell key={`cell-${index}`} fill={colors[index].value} />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="p-5 bg-white rounded-lg">
          <h4>性別</h4>
          <PieChart width={500} height={300}>
            <Pie
              data={testDate.genders}
              dataKey="percentage"
              nameKey="gender"
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius={100}
              fill="#8884d8"
              startAngle={90}
              endAngle={450}
              labelLine
              legendType={"triangle"}
              label={(d: any) => d.gender}
            >
              <LabelList
                dataKey={(d: any) => d.percentage + "%"}
                position="inside"
              />
              {testDate.ages.map((age, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={["gray", "#0ea5e9", "#ef4444"][index]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

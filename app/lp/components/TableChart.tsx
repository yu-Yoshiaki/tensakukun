import { PieChartComponent } from "app/lp/components/PieChart";
import { Tag } from "app/tags/Tag";
import { Dispatch, SetStateAction, useState } from "react";

const tags = [
  { id: 1, name: "instagram" },
  { id: 2, name: "twitter" },
  { id: 3, name: "取材時QR" },
  { id: 4, name: "レジ横QR" },
  { id: 5, name: "東京" },
  { id: 6, name: "大阪" },
  { id: 7, name: "10代" },
  { id: 8, name: "20代" },
  { id: 9, name: "30代" },
  { id: 10, name: "40代" },
  { id: 11, name: "50代以上" },
  { id: 12, name: "男性" },
  { id: 13, name: "女性" },
  { id: 14, name: "ニュースNo.01読者" },
  { id: 15, name: "ニュースNo.02読者" },
  { id: 16, name: "ニュースNo.03読者" },
  { id: 17, name: "ニュースNo.04読者" },
  { id: 18, name: "ニュースNo.05読者" },
  { id: 19, name: "ニュースNo.06読者" },
  { id: 20, name: "アンケート回答済" },
  { id: 21, name: "商品A購入者" },
  { id: 22, name: "商品B購入者" },
  { id: 23, name: "商品C購入者" },
  { id: 24, name: "商品D購入者" },
  { id: 25, name: "商品E購入者" },
  { id: 26, name: "商品F購入者" },
  { id: 27, name: "商品G購入者" },
];

const customersTags = [
  { tags: [1, 5, 7, 13, 15, 16, 21, 22, 23] },
  { tags: [1, 5, 8, 12, 15, 16, 17, 20, 23] },
  { tags: [1, 5, 8, 13, 17, 18, 19, 20, 27] },
  { tags: [1, 5, 9, 12, 16, 18, 19, 27, 26] },
  { tags: [1, 6, 10, 12, 14, 15, 19, 20, 25, 22, 23] },
  { tags: [1, 5, 8, 13, 17, 18, 19, 20, 27] },
  { tags: [1, 5, 9, 12, 16, 18, 19, 27, 26] },
  { tags: [1, 5, 9, 12, 16, 18, 19, 27, 26] },
  { tags: [1, 5, 9, 12, 16, 18, 19, 27, 26] },
  { tags: [1, 5, 9, 12, 16, 18, 19, 27, 26] },
  { tags: [1, 6, 10, 12, 14, 15, 19, 20, 25, 22, 23] },
  { tags: [1, 5, 8, 13, 17, 18, 19, 20, 27] },
  { tags: [1, 5, 9, 12, 16, 18, 19, 27, 26] },
  { tags: [1, 6, 10, 12, 14, 15, 19, 20, 25, 22, 23] },
  { tags: [1, 6, 10, 12, 14, 17] },
  { tags: [2, 5, 7, 13, 15, 16, 21, 22, 23] },
  { tags: [2, 5, 8, 12, 15, 16, 17, 20, 23] },
  { tags: [2, 5, 8, 13, 17, 18, 19, 20, 27] },
  { tags: [2, 5, 9, 12, 16, 18, 19, 27, 26] },
  { tags: [2, 6, 10, 12, 14, 15, 19, 20, 25, 22, 23] },
  { tags: [2, 6, 10, 12, 14, 17] },
  { tags: [3, 5, 7, 13, 15, 16, 21, 22, 23] },
  { tags: [3, 5, 8, 12, 15, 16, 17, 20, 23] },
  { tags: [3, 5, 8, 13, 17, 18, 19, 20, 27] },
  { tags: [3, 5, 9, 12, 16, 18, 19, 27, 26] },
  { tags: [3, 6, 10, 12, 14, 15, 19, 20, 25, 22, 23] },
  { tags: [3, 6, 10, 12, 14, 17] },
  { tags: [4, 5, 7, 13, 15, 16, 21, 22, 23] },
  { tags: [4, 5, 8, 12, 15, 16, 17, 20, 23] },
  { tags: [4, 5, 8, 13, 17, 18, 19, 20, 27] },
  { tags: [4, 5, 9, 12, 16, 18, 19, 27, 26] },
  { tags: [4, 6, 10, 12, 14, 15, 19, 20, 25, 22, 23] },
  { tags: [4, 6, 10, 12, 14, 17] },
  { tags: [4, 5, 8, 12, 15, 16, 17, 20, 23] },
  { tags: [4, 6, 10, 12, 14, 15, 19, 20, 25, 22, 23] },
  { tags: [4, 6, 10, 12, 14, 17] },
  { tags: [4, 5, 8, 12, 15, 16, 17, 20, 23] },
  { tags: [4, 6, 10, 12, 14, 15, 19, 20, 25, 22, 23] },
  { tags: [4, 6, 10, 12, 14, 17] },
  { tags: [4, 5, 8, 12, 15, 16, 17, 20, 23] },
  { tags: [4, 5, 8, 13, 17, 18, 19, 20, 27] },
  { tags: [4, 5, 9, 12, 16, 18, 19, 27, 26] },
  { tags: [4, 6, 10, 12, 14, 15, 19, 20, 25, 22, 23] },
  { tags: [4, 6, 10, 12, 14, 17] },
  { tags: [4, 6, 7, 12, 14, 17] },
];

const Add = (props: {
  tag: { id: number; name: string };
  data: {
    id: number;
    name: string;
  }[];
  set: Dispatch<
    SetStateAction<
      {
        id: number;
        name: string;
      }[]
    >
  >;
}) => {
  const [isSelect, setIsSelect] = useState(false);
  const hanelSetRow = () => {
    if (isSelect) {
      setIsSelect(false);
      props.set(props.data.filter((d) => d.id !== props.tag.id));
    } else {
      setIsSelect(true);
      props.set([...props.data, props.tag]);
    }
  };

  return (
    <button
      onClick={hanelSetRow}
      className={`${
        isSelect ? "bg-yellow-300" : "bg-blue-50"
      } rounded-xl text-sm text-center whitespace-nowrap font-semibold flex items-center py-1 px-2`}
    >
      <span className="text-xs">#</span>
      <span className="text-sm">{props.tag.name}</span>
    </button>
  );
};

export const TableChart = () => {
  const [row, setRow] = useState<{ id: number; name: string }[]>([]);
  const [column, setColumn] = useState<{ id: number; name: string }[]>([]);
  const data = row.map(({ id, name }) => {
    return {
      name,
      value: customersTags.filter((cusTag) =>
        cusTag.tags.some((num) => num === id)
      ).length,
    };
  });
  const data2: { name: string; value: number }[] = [];
  const countNumberOfCustomersTags = (searchIds: number[]) => {
    let count = 0;

    customersTags.forEach((cus) => {
      const c: string[] = [];
      searchIds.forEach((searchId) => {
        cus.tags.some((tag) => {
          if (tag === searchId) return c.push("true");
        });
      });

      if (c.length === searchIds.length) {
        count = count + 1;
      }
    });

    return count;
  };

  return (
    <div className="px-20 space-y-4">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="space-y-2">
            <div className="bg-white p-2 rounded-md flex items-center justify-center">
              行を追加する
            </div>
            <div className="bg-white p-2 rounded-md flex flex-wrap gap-2">
              {tags.map((t) => {
                return <Add set={setRow} tag={t} data={row} />;
              })}
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-white p-2 rounded-md flex items-center justify-center">
              列を追加する
            </div>
            <div className="bg-white p-2 rounded-md flex flex-wrap gap-2">
              {tags.map((t) => {
                return <Add set={setColumn} tag={t} data={column} />;
              })}
            </div>
          </div>
        </div>

        <div className="w-full overflow-x-scroll">
          <table className={`w-[${400 + column.length * 200}px]`}>
            <tr className="bg-white ">
              <th className="text-center py-[10px] w-[200px] sticky top-0 left-0 bg-white"></th>
              <th className=" text-center py-[10px] w-[200px]">全体</th>
              {column.length > 0 &&
                column.map((c, index) => {
                  if (index < 4) {
                    return (
                      <th className="whitespace-nowrap text-center py-[10px] w-[200px]">
                        {c.name}
                      </th>
                    );
                  }
                })}
            </tr>
            {row.map((row, index) => {
              return (
                <tr className={index % 2 === 0 ? "bg-[#57b3e8]" : "bg-white"}>
                  <th
                    className={`${
                      index % 2 === 0 ? "bg-[#57b3e8] text-white" : "bg-white"
                    } text-center py-[10px] w-[200px] whitespace-nowrap sticky left-0`}
                  >
                    {row.name}
                  </th>
                  <td
                    className={`${
                      index % 2 === 0 && "text-white"
                    } text-center py-[10px] w-[200px]`}
                  >
                    {
                      customersTags.filter((cusTag) =>
                        cusTag.tags.some((num) => num === row.id)
                      ).length
                    }
                  </td>
                  {column.length > 0 &&
                    column.map((col) => {
                      const value = countNumberOfCustomersTags([
                        row.id,
                        col.id,
                      ]);
                      data2.push({ name: col.name, value });
                      return (
                        <td
                          className={`${
                            index % 2 === 0 && "text-white"
                          }  text-center py-[10px] w-[200px]`}
                        >
                          {value}
                        </td>
                      );
                    })}
                </tr>
              );
            })}
          </table>
        </div>
      </div>
      <h3 className="text-4xl font-bold">円グラフ</h3>
      <PieChartComponent data={data} />
    </div>
  );
};

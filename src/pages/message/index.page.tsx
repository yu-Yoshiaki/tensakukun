import axios from "axios";
import Link from "next/link";
import { Layout } from "src/component";
import { DeleteButton } from "src/component/Button/Delete";
import { EditButton } from "src/component/Button/Edit";
import useSWR from "swr";

const testData: {
  name: string;
  status: string;
  sentAt: string;
  to: "all" | string[];
  countTo: number;
}[] = [
  {
    name: "新規メッセージ No.06",
    status: "配信済み",
    sentAt: "2022/09/28",
    to: "all",
    countTo: 10,
  },
  {
    name: "セグメントメッセージ [東京] No.03",
    status: "配信予約",
    sentAt: "2022/09/30",
    to: ["twitter", "東京"],
    countTo: 5,
  },
  {
    name: "セグメントメッセージ [東京] No.02",
    status: "配信予約",
    sentAt: "2022/09/30",
    to: ["20代"],
    countTo: 3,
  },
];

const fetcher = (url: string) => {
  return axios.get(url).then((res) => {
    return res.data;
  });
};

const Index = () => {
  const { data: numberOfSendableMessage } = useSWR<number>(
    "/api/getSendableMessage",
    fetcher
  );
  const { data: numberOfMessagesSentThisMonth } = useSWR<number>(
    "/api/getNumberOfMessagesSentThisMonth",
    fetcher
  );

  return (
    <Layout>
      <h2 className="m-8 text-2xl font-bold">メッセージ配信</h2>
      <p className="ml-8 mb-2 w-[80%]">
        友だちにテキストを配信できます。タグの絞り込みによるセグメント配信、時間予約によるステップ配信
      </p>
      <div className="flex gap-8 p-8">
        <div className="w-[700px] space-y-4 rounded-md bg-white p-8 shadow-sm">
          <div className="flex items-center justify-between">
            <Link href={"/message/create"}>
              <a className="flex w-[110px] items-center justify-center gap-2 rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-700">
                ✏<span className="whitespace-nowrap">新規作成</span>
              </a>
            </Link>
            <div className="flex gap-2">
              <p>今月のメッセージ利用数: </p>
              <p>
                {numberOfMessagesSentThisMonth} / {numberOfSendableMessage}
              </p>
            </div>
          </div>

          <div className="max-h-[500px] divide-y overflow-auto overflow-y-auto border">
            {testData.map((data) => {
              return (
                <div
                  key={data.name}
                  className="grid grid-cols-[1fr,auto,auto] items-center gap-4 whitespace-nowrap px-5 py-2 md:w-auto"
                >
                  <div>
                    <div className="flex items-center gap-2 text-lg font-bold">
                      <span className="text-4xl">✉</span> {data.name}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-xl">🎯</span>
                      {data.to === "all"
                        ? "全てのお客様"
                        : `絞り込み [${data.to.map((d) => {
                            return d;
                          })}]`}
                    </div>
                  </div>
                  <div className="text-sm">
                    配信数:{" "}
                    <span className="font-semibold">{data.countTo}</span>
                  </div>
                  <div className="space-y-2 text-right">
                    <div className="flex items-center justify-end">
                      <div className="rounded-full bg-gray-300 py-1 px-3 text-[4px] ">
                        {data.status}
                      </div>
                    </div>
                    <div className="text-xs">配信日: {data.sentAt}</div>
                    <div className="flex justify-end gap-2">
                      <EditButton />
                      <DeleteButton />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;

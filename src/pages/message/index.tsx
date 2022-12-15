import axios from "axios";
import Link from "next/link";
import { Layout } from "src/components";
import { DeleteButton } from "src/components/buttons/DeleteButton";
import { EditButton } from "src/components/buttons/EditButton";
import { Seo } from "src/components/Seo";
import useSWR from "swr";

const testData: {
  title: string;
  status: "配信待ち" | "配信済み" | "配信予約";
  sentAt: string;
  sendTo: "all" | string[];
  countTo: number;
}[] = [
  {
    title: "新規メッセージ No.06",
    status: "配信済み",
    sentAt: "2022/09/28",
    sendTo: "all",
    countTo: 10,
  },
  {
    title: "セグメントメッセージ [東京] No.03",
    status: "配信予約",
    sentAt: "2022/09/30",
    sendTo: ["twitter", "東京"],
    countTo: 5,
  },
  {
    title: "セグメントメッセージ [東京] No.02",
    status: "配信待ち",
    sentAt: "2022/09/30",
    sendTo: ["20代"],
    countTo: 3,
  },
  {
    title: "新規メッセージ No.06",
    status: "配信済み",
    sentAt: "2022/09/28",
    sendTo: "all",
    countTo: 10,
  },
  {
    title: "セグメントメッセージ [東京] No.03",
    status: "配信予約",
    sentAt: "2022/09/30",
    sendTo: ["twitter", "東京"],
    countTo: 5,
  },
  {
    title: "セグメントメッセージ [東京] No.02",
    status: "配信待ち",
    sentAt: "2022/09/30",
    sendTo: ["20代"],
    countTo: 3,
  },
  {
    title: "新規メッセージ No.06",
    status: "配信済み",
    sentAt: "2022/09/28",
    sendTo: "all",
    countTo: 10,
  },
  {
    title: "セグメントメッセージ [東京] No.03",
    status: "配信予約",
    sentAt: "2022/09/30",
    sendTo: ["twitter", "東京"],
    countTo: 5,
  },
  {
    title: "セグメントメッセージ [東京] No.02",
    status: "配信予約",
    sentAt: "2022/09/30",
    sendTo: ["20代"],
    countTo: 3,
  },
  {
    title: "新規メッセージ No.06",
    status: "配信待ち",
    sentAt: "2022/09/28",
    sendTo: "all",
    countTo: 10,
  },
];

const fetcher = async (url: string) => {
  const res = await axios.get(url);
  return res.data;
};

export const Message = () => {
  const { data: numberOfSendableMessage } = useSWR<number>(
    "/api/getSendableMessage",
    fetcher
  );
  const { data: numberOfMessagesSentThisMonth } = useSWR<number>(
    "/api/getNumberOfMessagesSentThisMonth",
    fetcher
  );

  const SendButton = () => {
    const handleClick = () => {
      return;
    };

    return (
      <button
        type="button"
        onClick={handleClick}
        className="flex items-center justify-center gap-2 rounded-md bg-green-400 px-3 py-1 text-sm font-semibold text-white hover:bg-green-300"
      >
        送信
      </button>
    );
  };

  return (
    <Layout
      header="メッセージ配信"
      description="友だちにテキストを配信できます。タグの絞り込みによるセグメント配信、時間予約によるステップ配信"
    >
      <Seo
        title="メッセージ配信"
        description="友だちにテキストを配信できます。タグの絞り込みによるセグメント配信、時間予約によるステップ配信"
      />

      <div className="flex gap-8 overflow-x-auto p-8">
        <div className="w-full space-y-4 rounded-md bg-white p-8 shadow-sm">
          <div className="flex items-center justify-between">
            <Link href={"/message/create"}>
              <a className="flex w-[110px] items-center justify-center gap-2 rounded-md bg-gray-700 px-3 py-1 text-sm font-semibold text-white hover:bg-gray-700">
                <span className="text-xl">✏</span>新規作成
              </a>
            </Link>
            <div className="flex gap-2">
              <p>今月のメッセージ利用数: </p>
              <p>
                {numberOfMessagesSentThisMonth} / {numberOfSendableMessage}
              </p>
            </div>
          </div>

          <div className="max-h-[500px] divide-y overflow-y-auto border">
            {testData.map((data) => {
              return (
                <div
                  key={data.title}
                  className="grid grid-cols-[1fr,auto,auto,auto] items-center gap-4 whitespace-nowrap px-5 py-2 md:w-auto"
                >
                  <div>
                    <div className="flex items-center gap-2 text-lg font-bold">
                      <span className="text-4xl">✉</span> {data.title}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-xl">🎯</span>
                      {data.sendTo === "all"
                        ? "全てのお客様"
                        : `絞り込み [${data.sendTo.map((d) => {
                            return d;
                          })}]`}
                    </div>
                  </div>{" "}
                  <div className="flex items-center justify-end">
                    <div
                      className={`rounded-full py-1 px-3 text-[4px] text-white ${
                        data.status === "配信済み"
                          ? "bg-blue-500"
                          : data.status === "配信待ち"
                          ? "bg-green-500"
                          : "bg-yellow-500"
                      }`}
                    >
                      {data.status}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-xs">
                      配信数:
                      <span className="text-sm font-semibold">
                        {data.countTo}
                      </span>
                    </div>
                    <div className="text-xs">
                      配信日:
                      <span className="text-sm font-semibold">
                        {data.sentAt}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2 text-right">
                    <div className="grid grid-cols-3 place-content-end justify-end gap-2">
                      {data.status === "配信待ち" ? (
                        <SendButton />
                      ) : (
                        <div></div>
                      )}
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

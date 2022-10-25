import toast from "react-hot-toast";
import { Layout } from "src/component";
import { DeleteButton, EditButton, Tag } from "src/component";
import { InflowNotData } from "src/component/InflowNotData";
import { UrlForm } from "src/component/UrlForm";
import { supabase } from "src/lib/supabase";
import type { definitions } from "src/type/supabase";
import useSWR from "swr";

import { QRCode } from "../component/QRCode";

const fetchInflows = async () => {
  const { data } = await supabase
    .from<definitions["urls"] & { urlsTags: { tags: definitions["tags"] }[] }>(
      "urls"
    )
    .select("*, urlsTags:urls_tags ( tags (*))")
    .order("id");
  return data;
};
const fetchLiffId = async () => {
  const { data } = await supabase
    .from<definitions["OwnerInfomation"]>("OwnerInfomation")
    .select("liffId")
    .single();
  return data;
};
const Copy = (props: { value: string }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(props.value);
    toast.success("コピーしました。");
  };
  return <button onClick={handleCopy}>📋 コピー</button>;
};

const Inflow = () => {
  const { data: inflows } = useSWR("inflowData", fetchInflows);
  const { data: liffId } = useSWR("liffId", fetchLiffId);
  return (
    <Layout
      header="流入経路一覧"
      description="ここではタグを付与したオリジナルURLを発行でき、URLリンクやQRコードをブログやSNSなど媒体ごとに、どこから友だち追加されたのかを特定できます。"
    >
      <div className="flex gap-8 overflow-auto p-8">
        <div className="flex flex-col justify-between space-y-2 bg-white p-8 ">
          <UrlForm />

          {inflows ? (
            <ul className="max-h-[400px] divide-y overflow-y-auto whitespace-nowrap border">
              {inflows.map(({ id, name, urlsTags, click }) => {
                return (
                  <li
                    key={id}
                    className="grid w-[660px] grid-cols-4 grid-rows-2 gap-3 p-3"
                  >
                    <div className="col-span-2 flex gap-2">
                      <h3 className="h-6 text-lg font-bold">
                        <span className="text-3xl">📎</span> {name}
                      </h3>
                      <div>
                        {urlsTags.map(({ tags }) => {
                          return <Tag key={tags.id} name={tags.name} />;
                        })}
                      </div>
                    </div>

                    <div className="col-span-2 row-start-2 flex items-center gap-2">
                      <div className="hidden-scrollbar overflow-auto border text-sm font-semibold">
                        https://liff.line.me/{liffId}/inflow/{id}
                      </div>

                      <Copy
                        value={`https://liff.line.me/${liffId}/inflow/${id}`}
                      />

                      <QRCode
                        url={`https://liff.line.me/${liffId}/inflow/${id}`}
                      />
                    </div>

                    <div className="row-span-2 flex flex-col justify-center gap-1">
                      <div className="text-xs">
                        表示回数:
                        <span className="text-sm font-semibold">{click}</span>
                      </div>
                      <div className="text-xs">
                        友達になった人数:
                        <span className="text-sm font-semibold">0</span>
                      </div>
                    </div>

                    <div className="row-span-2 flex items-center justify-end gap-2">
                      <EditButton />
                      <DeleteButton />
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <InflowNotData />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Inflow;

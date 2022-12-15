import toast from "react-hot-toast";
import { Layout } from "src/components";
import { DeleteButton, EditButton } from "src/components/buttons";
import { QRCode } from "src/components/QRCode";
import { Seo } from "src/components/Seo";
import { supabase } from "src/libs/supabase";
import { Tag } from "src/pages/tags/Tag";
import { UrlForm } from "src/pages/url/UrlForm";
import { InflowNotData } from "src/pages/url/UrlNotData";
import type { definitions } from "src/types/supabase";
import useSWR from "swr";

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
    .from<definitions["owner_infomation"]>("owner_infomation")
    .select("liffId")
    .single();
  return data;
};
const Copy = (props: { value: string }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(props.value);
    toast.success("コピーしました。");
  };
  return (
    <button
      onClick={handleCopy}
      className="rounded-md border border-sky-300 py-1 px-2 hover:bg-sky-300 hover:text-white"
    >
      📋Copy
    </button>
  );
};

export const Url = () => {
  const { data: inflows } = useSWR("inflowData", fetchInflows);
  const { data: ownerInfo } = useSWR("liffId", fetchLiffId);
  return (
    <Layout
      header="URL一覧"
      description="ここではタグを付与したオリジナルURLを発行でき、URLリンクやQRコードをブログやSNSなど媒体ごとに、どこから友だち追加されたのかを特定できます。"
    >
      <Seo
        title="URL一覧"
        description="ここではタグを付与したオリジナルURLを発行でき、URLリンクやQRコードをブログやSNSなど媒体ごとに、どこから友だち追加されたのかを特定できます。"
      />
      <div className="flex gap-8 overflow-auto p-8">
        <div className="flex w-full flex-col justify-between space-y-2 bg-white p-8">
          <UrlForm />

          {inflows ? (
            <ul className="max-h-[800px] divide-y overflow-y-auto whitespace-nowrap border">
              {inflows.map(({ id, name, urlsTags, clicks }) => {
                return (
                  <li
                    key={id}
                    className="grid w-full grid-cols-[1fr,auto,auto] grid-rows-2 gap-x-10 gap-y-2  p-3"
                  >
                    <div className="flex items-center gap-2">
                      <h3 className="flex h-6 items-center gap-1 text-lg font-bold">
                        <span className="text-2xl">📎</span> {name}
                      </h3>
                      <div className="flex gap-1">
                        {urlsTags.map(({ tags }) => {
                          return <Tag key={tags.id} name={tags.name} />;
                        })}
                      </div>
                    </div>

                    <div className="row-start-2 flex items-center gap-2">
                      <div className="hidden-scrollbar max-w-[550px] overflow-auto border text-sm font-semibold">
                        https://liff.line.me/{ownerInfo?.liffId}/{id}
                      </div>

                      <Copy
                        value={`https://liff.line.me/${ownerInfo?.liffId}/${id}`}
                      />

                      <QRCode
                        url={`https://liff.line.me/${ownerInfo?.liffId}/${id}`}
                      />
                    </div>

                    <div className="row-span-2 flex flex-col justify-center gap-1">
                      <div className="text-xs">
                        表示回数:
                        <span className="text-sm font-semibold">{clicks}</span>
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

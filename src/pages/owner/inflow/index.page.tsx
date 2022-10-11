import { Layout } from "src/component";
import { DeleteButton } from "src/component/Button/Delete";
import { EditButton } from "src/component/Button/Edit";
import { Tag } from "src/component/Tag";
import { supabase } from "src/lib/supabase";
import { CreateNewUrl } from "src/pages/owner/inflow/CreateNewUrl";
import type { definitions } from "src/type/supabase";
import useSWR from "swr";

import { QRCode } from "./QRCode";

const fetchInflows = async () => {
  const { data } = await supabase
    .from<definitions["urls"] & { urlsTags: { tags: definitions["tags"] }[] }>(
      "urls"
    )
    .select("*, urlsTags:urls_tags ( tags (*))")
    .order("id");
  return data;
};

const Inflow = () => {
  const { data: inflows } = useSWR("inflowData", fetchInflows);
  return (
    <Layout>
      <h2 className="m-8 text-2xl font-bold">流入経路一覧</h2>
      <p className="ml-8 mb-2 w-[80%]">
        ここではタグを付与したオリジナルURLを発行でき、URLリンクやQRコードをブログやSNSなど媒体ごとに、どこから友だち追加されたのかを特定できます。
      </p>
      <div className="flex gap-8 p-8">
        <div className="flex flex-col justify-between space-y-2 bg-white p-8">
          <CreateNewUrl />

          {inflows ? (
            <ul className="max-h-[400px] divide-y overflow-y-auto whitespace-nowrap border">
              {inflows.map(({ id, name, urlsTags }) => {
                return (
                  <li
                    key={id}
                    className="grid w-[580px] grid-cols-3  grid-rows-2 gap-2  p-3"
                  >
                    <div className="col-span-2 flex space-x-2">
                      <h3 className="h-6 text-lg font-bold">📎 {name}</h3>
                      <div>
                        {urlsTags.map(({ tags }) => {
                          return <Tag key={tags.id} name={tags.name} />;
                        })}
                      </div>
                    </div>

                    <div className="col-span-2 row-start-2 flex items-center gap-2">
                      <div className="overflow-auto text-xs font-semibold">
                        https://liff.line.me/1657424528-MpPk7Eoz/route/{id}
                      </div>
                      <QRCode
                        url={`https://liff.line.me/1657424528-MpPk7Eoz/route/${id}`}
                      />
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
            <div>Loading...</div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Inflow;

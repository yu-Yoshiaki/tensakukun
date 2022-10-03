import dayjs from "dayjs";
import { useState } from "react";
import { Layout } from "src/component";
import { Container } from "src/component/Container";
import { supabase } from "src/lib/supabase";
import { CreateNewTag } from "src/pages/tag/CreateNewTag";
import { definitions } from "src/type/supabase";
import useSWR from "swr";

const fetchTag = async () => {
  const { data: tags } = await supabase
    .from<
      definitions["tags"] & { customers_tags: definitions["customers_tags"][] }
    >("tags")
    .select(`*,customers_tags(*)`);
  return tags;
};

const headers = ["作成日", "タグ名", "使用数"];

const Index = () => {
  const [isOpenCreateNewTag, setIsOpenCreateNewTag] = useState(false);
  const { data: tags } = useSWR("tags", fetchTag);

  console.log("---tags: ", tags);

  const handleIsOpenCreateNewTag = () => {
    setIsOpenCreateNewTag(true);
  };
  const handleIsCloseCreateNewTag = () => {
    setIsOpenCreateNewTag(false);
  };

  return (
    <Layout>
      <Container
        title="タグ一覧"
        explanation="こちらでタグを作成、編集、閲覧が可能です。お客様情報に直接付与したり、アンケートの返答による付与、URLに組み込むことでアクションしたお客様へタグを付与できます。"
      >
        {isOpenCreateNewTag && (
          <CreateNewTag handleClose={handleIsCloseCreateNewTag} />
        )}
        <div className="space-y-2">
          <button
            onClick={handleIsOpenCreateNewTag}
            className="py-2 px-4 text-sm text-center text-white bg-blue-400 rounded-xl font-semibold"
          >
            新規作成
          </button>
          <div className="space-y-2 overflow-auto">
            <div className="w-[900px] md:w-auto flex items-center bg-green-400 text-white rounded-xl font-semibold py-2 px-5">
              {headers.map((header) => {
                return <div className="w-[140px]">{header}</div>;
              })}
            </div>
            {tags ? (
              tags.map((data) => {
                const time = dayjs(data.inserted_at).format("YYYY-MMDD");

                return (
                  <div className="w-[900px] md:w-auto flex whitespace-nowrap px-5 py-2 font-semibold border items-center rounded-xl justify-between">
                    <div className="flex">
                      <div className="w-[140px]">{time}</div>
                      <div className="w-[140px]">{data.name}</div>
                      <div className="w-[140px]">
                        {data.customers_tags.length}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 auto-cols-min">
                      <button className="py-1 px-4 text-sm text-center bg-gray-400 text-white rounded-xl w-[60px] font-semibold">
                        編集
                      </button>
                      <button className="py-1 px-4 text-sm text-center bg-red-400 text-white rounded-xl w-[60px] font-semibold">
                        削除
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Index;

import dayjs from "dayjs";
import { DeleteButton, EditButton, Layout } from "src/component";
import { useTags } from "src/hook/useTags";
import { CreateNewTagForm } from "src/pages/tag/CreateNewTagForm";

const Index = () => {
  const { tags } = useTags();
  return (
    <Layout
      header="タグ一覧"
      description="こちらでタグを作成、編集、閲覧が可能です。お客様情報に直接付与したり、アンケートの返答による付与、URLに組み込むことでアクションしたお客様へタグを付与できます。"
    >
      <div className="flex gap-8 overflow-x-auto p-8">
        <div className="flex flex-col justify-between space-y-2 bg-white p-8">
          <CreateNewTagForm />

          <div className="max-h-[400px] w-[500px] divide-y overflow-y-auto border">
            {tags ? (
              tags.map((data) => {
                const time = dayjs(data.insertedAt).format("YYYY/MM/DD");

                return (
                  <div
                    key={data.id}
                    className="flex items-center justify-between whitespace-nowrap px-5 py-2"
                  >
                    <div className="grid grid-cols-3 grid-rows-2">
                      <div className="col-span-2 w-[140px] text-[12px] md:text-[1px]">
                        作成日: {time}
                      </div>
                      <div className="col-span-2 row-start-2 flex w-[140px] items-center gap-2 text-lg font-bold">
                        <span className="text-2xl">🔖</span>
                        {data.name}
                      </div>
                      <div className="row-span-2 flex flex-col justify-center gap-1">
                        <div className="text-xs">
                          使用回数:
                          <span className="text-sm font-semibold">
                            {data.customersTags.length}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex auto-cols-min gap-2">
                      <EditButton />
                      <DeleteButton />
                    </div>
                  </div>
                );
              })
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;

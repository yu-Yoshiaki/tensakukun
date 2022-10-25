import dayjs from "dayjs";
import { DeleteButton, EditButton, Layout } from "src/component";
import { TagForm } from "src/component/TagForm";
import { TagsNotData } from "src/component/TagsNotData";
import { useTags } from "src/hook/useTags";

const Index = () => {
  const { tags } = useTags();
  return (
    <Layout
      header="タグ一覧"
      description="こちらでタグを作成、編集、閲覧が可能です。お客様情報に直接付与したり、アンケートの返答による付与、URLに組み込むことでアクションしたお客様へタグを付与できます。"
    >
      <div className="flex gap-8 overflow-x-auto p-8">
        <div className="flex flex-col justify-between space-y-2 bg-white p-8">
          <TagForm />

          <div className="max-h-[400px] divide-y overflow-y-auto border">
            {tags && tags.length > 0 ? (
              tags.map((data) => {
                const insertedAt = dayjs(data.insertedAt).format("YYYY/MM/DD");

                return (
                  <div
                    key={data.id}
                    className="grid grid-cols-[1fr,auto,auto] items-center gap-4 whitespace-nowrap px-5 py-3"
                  >
                    <div className="flex items-center gap-2 overflow-x-auto text-lg font-bold">
                      <span className="text-4xl">🔖</span>
                      <p className="w-[200px]">{data.name}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-xs">
                        配信日:
                        <span className="text-sm font-semibold">
                          {insertedAt}
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 place-content-end justify-end gap-2">
                      <EditButton />
                      <DeleteButton />
                    </div>
                  </div>
                );
              })
            ) : (
              <TagsNotData />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;

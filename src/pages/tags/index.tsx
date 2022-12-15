import dayjs from "dayjs";
import { Layout } from "src/components";
import { DeleteButton } from "src/components/buttons/DeleteButton";
import { EditButton } from "src/components/buttons/EditButton";
import { Seo } from "src/components/Seo";
import { TagForm } from "src/pages/tags/TagForm";
import { TagsNotData } from "src/pages/tags/TagsNotData";
import { useTags } from "src/pages/tags/useTags";

export const Tags = () => {
  const { tags } = useTags();
  return (
    <Layout
      header="タグ一覧"
      description="こちらでタグを作成、編集、閲覧が可能です。お客様情報に直接付与したり、アンケートの返答による付与、URLに組み込むことでアクションしたお客様へタグを付与できます。"
    >
      <Seo
        title="タグ一覧"
        description="こちらでタグを作成、編集、閲覧が可能です。お客様情報に直接付与したり、アンケートの返答による付与、URLに組み込むことでアクションしたお客様へタグを付与できます。"
      />
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
                    <div className="flex items-center overflow-x-auto font-bold">
                      #<p className="w-[200px] text-lg">{data.name}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-xs">
                        作成日:
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

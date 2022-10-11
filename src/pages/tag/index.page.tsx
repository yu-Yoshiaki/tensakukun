import dayjs from "dayjs";
import { Layout } from "src/component";
import { DeleteButton } from "src/component/Button/Delete";
import { EditButton } from "src/component/Button/Edit";
import { useTags } from "src/hook/useTags";
import { CreateNewTagForm } from "src/pages/tag/CreateNewTagForm";

const Index = () => {
  const { tags } = useTags();

  return (
    <Layout>
      <h2 className="m-8 text-2xl font-bold">タグ一覧</h2>
      <p className="ml-8 mb-2 w-[80%]">
        こちらでタグを作成、編集、閲覧が可能です。お客様情報に直接付与したり、アンケートの返答による付与、URLに組み込むことでアクションしたお客様へタグを付与できます。
      </p>
      <div className="flex gap-8 p-8">
        <div className="flex flex-col justify-between space-y-2 bg-white p-8">
          <CreateNewTagForm />

          <div className="max-h-[400px] divide-y overflow-auto border ">
            {tags ? (
              tags.map((data) => {
                const time = dayjs(data.inserted_at).format("YYYY/MM/DD");

                return (
                  <div
                    key={data.id}
                    className="flex items-center justify-between whitespace-nowrap px-5 py-2"
                  >
                    <div className="grid grid-cols-3 grid-rows-2">
                      <div className="col-span-2 w-[140px] text-[1px]">
                        作成日: {time}
                      </div>
                      <div className="col-span-2 row-start-2 w-[140px] text-lg font-bold">
                        {data.name}
                      </div>
                      <div className="row-span-2 flex w-[140px] items-center">
                        {data.customers_tags.length}
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

import type { TextMessage } from "@line/bot-sdk";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Layout } from "src/components";
import { Tag as TagComponent } from "src/pages/tags/Tag";
import { useFilteredCustomer } from "src/pages/customer/useFilteredCustomer";
import { useFilteredTags } from "src/pages/tags/useFilteredTags";
import type { Tag } from "src/types/supabaseCustom";
import { Seo } from "src/components/Seo";

export type InserData = {
  title: string;
  sendDay: "now" | "select";
  messages: TextMessage[];
  sendTo: "all" | string[];
  status: "配信待ち";
};

export const MessageCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm<InserData>({
    defaultValues: { sendDay: "now", sendTo: "all" },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "messages",
  });

  const [isOpenTagsForm, setIsOpenTagsForm] = useState(false);
  const { tags, onDeleteTags, onSelectTags, selectTags } = useFilteredTags();

  const { filteredCustomers, onFilterCustomers, count, customers, setCount } =
    useFilteredCustomer();

  const [isOpenTagsList, setIsOpenTagsList] = useState(true);

  const onSubmit = async () => {
    toast.success("Success.");
  };

  const handleIsOpenTagsForm = (e: any) => {
    if (!customers) return;
    if (e.target.value !== "all") {
      setIsOpenTagsForm(true);
    } else {
      setIsOpenTagsForm(false);
      setIsOpenTagsList(true);
      setCount(customers.length);
    }
  };

  const handleDesideTags = () => {
    setIsOpenTagsList(false);
    if (!filteredCustomers) return;
    const sendTo = filteredCustomers.map(({ lineid }) => {
      return lineid;
    });
    setValue("sendTo", sendTo);
  };

  const AppendMessageButton = () => {
    const handleClick = () => {
      append({ type: "text", text: "" });
    };
    return (
      <button
        type="button"
        onClick={handleClick}
        className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-white"
      >
        +
      </button>
    );
  };

  const RemoveMessageButton = (props: { index: number }) => {
    const handleClick = () => {
      remove(props.index);
    };
    return (
      <button
        type="button"
        onClick={handleClick}
        className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-sm font-semibold text-white"
      >
        ✖︎
      </button>
    );
  };

  const RemoveSelectedTagsButton = (props: { tag: Tag }) => {
    const handleClick = () => {
      const newTags = onDeleteTags(props.tag, true);
      if (newTags) onFilterCustomers(newTags);
    };
    return (
      <button type="button" onClick={handleClick} className="text-red-500">
        ✖︎
      </button>
    );
  };

  const AppendSelectedTagsButton = (props: { tag: Tag }) => {
    const handleClick = () => {
      onSelectTags(props.tag, true);
      onFilterCustomers([...selectTags, props.tag]);
    };
    return (
      <button type="button" onClick={handleClick}>
        <TagComponent name={props.tag.name} />
      </button>
    );
  };

  return (
    <Layout
      header="メッセージ作成"
      description="こちらでメッセージを作成します。ターゲットを絞ってセグメント配信も可能です。"
    >
      <Seo
        title="メッセージ作成"
        description="こちらでメッセージを作成します。ターゲットを絞ってセグメント配信も可能です。"
      />
      <div className="flex gap-8 p-8">
        <div className="grid min-h-[80vh] gap-y-8 bg-white xl:grid-cols-2">
          <div className="h-full space-y-4 bg-sky-300 p-5">
            <p className="bg-yellow-200 p-2">
              ⚠ プレビューは実際の画面と異なる場合があります。
            </p>

            {fields.map((field, index) => {
              return (
                <div key={field.id} className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-500">
                    a
                  </div>
                  <input
                    type="text"
                    {...register(`messages.${index}.text`)}
                    className="w-32 rounded-3xl border-none bg-green-300 p-2"
                  />
                  <div>
                    <RemoveMessageButton index={index} />
                  </div>
                </div>
              );
            })}
            <AppendMessageButton />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex-col items-center justify-between gap-4 p-8 py-4 text-sm xl:flex "
          >
            <div className="w-full space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between">
                  <label htmlFor="title">メッセージ名</label>
                  {errors.title && (
                    <div className="text-red-500">入力必須です。</div>
                  )}
                </div>
                <input
                  id="title"
                  type="text"
                  placeholder="【例】最新ニュース No.1"
                  {...register("title", { required: true })}
                  className="h-10 w-full rounded-md border-gray-300 p-2"
                />
              </div>

              <div className="grid items-center justify-between xl:grid-cols-[1fr,auto] xl:gap-4">
                <label htmlFor="sendDay">配信日</label>
                <select
                  {...register("sendDay", { required: true })}
                  className="h-10 rounded-lg border-gray-300 p-2 text-sm"
                >
                  <option value="now">すぐに配信</option>
                  <option value="select">日時を指定して配信</option>
                </select>
              </div>

              <div className="grid items-center justify-between xl:grid-cols-[1fr,auto] xl:gap-4">
                <label htmlFor="sendDay">送信先を選ぶ</label>
                <div className="flex flex-col items-end justify-center gap-2 text-right">
                  <div className="flex w-[120px] items-center justify-between">
                    <input
                      type="radio"
                      id="all"
                      name="drone"
                      value="all"
                      onChange={handleIsOpenTagsForm}
                    />
                    <label htmlFor="all">全てのお客様</label>
                  </div>

                  <div className="flex w-[120px] items-center justify-between">
                    <input
                      type="radio"
                      id="filterByTag"
                      name="drone"
                      value="filterByTag"
                      onChange={handleIsOpenTagsForm}
                    />
                    <label htmlFor="filterByTag">タグで絞り込み</label>
                  </div>

                  <div className="flex w-[120px] items-center justify-between">
                    <input
                      type="radio"
                      id="filterByName"
                      name="drone"
                      value="filterByName"
                      onChange={handleIsOpenTagsForm}
                    />
                    <label htmlFor="filterByName">名前で絞り込み</label>
                  </div>
                </div>
              </div>

              {isOpenTagsForm && (
                <div className="w-[80%] space-y-4 rounded-md border px-4 py-6">
                  <div>
                    <h4>選択中のタグ</h4>
                    <div className="flex h-11 items-center gap-2 overflow-x-auto rounded-md border p-2">
                      {selectTags.map((tag) => {
                        return (
                          <div key={tag.id} className="flex items-center">
                            <TagComponent name={tag.name} />
                            {isOpenTagsList && (
                              <RemoveSelectedTagsButton tag={tag} />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {isOpenTagsList && (
                    <div className="space-y-8">
                      <h4>タグ一覧</h4>
                      <div className="flex flex-wrap items-center gap-2 rounded-md border p-2">
                        {tags?.map((tag) => {
                          return (
                            <AppendSelectedTagsButton tag={tag} key={tag.id} />
                          );
                        })}
                      </div>
                      <button
                        type="button"
                        onClick={handleDesideTags}
                        className="mt-4 rounded-md bg-gray-700 p-2 text-center font-semibold text-white"
                      >
                        タグを決定する
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="w-full space-y-4 text-center">
              {errors.messages && (
                <div className="text-red-500">メッセージが空です。</div>
              )}
              <div className="flex w-full items-center justify-between ">
                <div>配信予定数</div>
                <div>
                  <span className="text-xl">{count}</span>人
                </div>
              </div>
              <input
                type="submit"
                value={"登録"}
                className="inline-block w-[200px] cursor-pointer rounded-md bg-gray-700 p-4 text-sm font-bold text-white hover:bg-gray-600"
              />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

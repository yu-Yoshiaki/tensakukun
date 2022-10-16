import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { CreateNewButton, DeleteButton } from "src/component/";
import { useTags } from "src/hook/useTags";
import { supabase } from "src/lib/supabase";
import type { definitions } from "src/type/supabase";

type InserData = {
  name: string;
  tags: { tagId: string }[];
};

export const CreateNewUrl = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { tags } = useTags();
  const { register, handleSubmit, reset, control } = useForm<InserData>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "tags",
  });
  const onSubmit = async (data: InserData) => {
    const { data: url, error: errorUrl } = await supabase
      .from<definitions["urls"]>("urls")
      .insert({
        name: data.name,
      })
      .single();

    if (!url || errorUrl) return toast.error("errorUrl: " + errorUrl.message);

    const urlsTagsData = data.tags.map((d) => {
      return { urlId: url.id, tagId: d.tagId };
    });
    const { data: urlsTags, error: errorUrlsTags } = await supabase
      .from<definitions["urls_tags"]>("urls_tags")
      .insert(urlsTagsData);

    if (!urlsTags || errorUrlsTags)
      return toast.error("errorUrlsTags: " + errorUrlsTags.message);

    setIsOpen(false);
    toast.success("Create Success!");
    return;
  };

  const onOpenCreateNewUrl = () => {
    setIsOpen(true);
  };
  const onCloseCreateNewUrl = () => {
    setIsOpen(false);
  };

  const AppendButton = () => {
    const handleClick = () => {
      return append({ tagId: "" });
    };
    return (
      <button
        type="button"
        onClick={handleClick}
        className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-white"
      >
        +
      </button>
    );
  };

  const RemoveButton = (props: { index: number }) => {
    const handleClick = () => {
      return remove(props.index);
    };
    return (
      <button
        type="button"
        onClick={handleClick}
        className="flex h-5 w-5 items-center justify-center text-sm"
      >
        🗑
      </button>
    );
  };

  useEffect(() => {
    reset();
  }, [isOpen, reset]);

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        {isOpen ? (
          <DeleteButton handleClick={onCloseCreateNewUrl} />
        ) : (
          <CreateNewButton handleClick={onOpenCreateNewUrl} />
        )}
      </div>

      {isOpen && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid w-[550px] grid-cols-[auto,1fr] grid-rows-2 gap-2 rounded-md border p-3"
        >
          <div className="flex items-center gap-2">
            <span className="text-3xl">📎</span>
            <label htmlFor="name" className="hidden">
              URL名
            </label>
            <input
              id="name"
              type="text"
              placeholder="URL名"
              {...register("name", { required: true })}
              className="h-8 w-[130px] border-b border-gray-200 pl-2 text-lg font-bold"
            />
          </div>
          <div className="flex items-center justify-end">
            <span className="text-lg"></span>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-md bg-green-300 px-3 py-1 text-sm font-semibold hover:bg-green-200"
            >
              <span className="text-lg">📮</span>登録
            </button>
          </div>

          <div className="col-span-2 flex h-10 items-center gap-2 overflow-x-scroll rounded-md border px-2">
            {" "}
            <span className="text-lg">🔖</span>
            {fields.map((field, index) => {
              return (
                <div key={field.id} className="flex items-center gap-2 p-1">
                  <select
                    key={field.id}
                    {...register(`tags.${index}.tagId`)}
                    placeholder="タグを選択"
                    className="whitespace-nowrap rounded-md py-1 text-center text-xs focus:border-none"
                  >
                    {tags?.map((tag) => {
                      return (
                        <option key={tag.id} value={tag.id}>
                          {tag.name}
                        </option>
                      );
                    })}
                  </select>
                  <div>
                    <RemoveButton index={index} />
                  </div>
                </div>
              );
            })}
            <AppendButton />
          </div>
        </form>
      )}
    </div>
  );
};

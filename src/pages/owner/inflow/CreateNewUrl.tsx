import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { CreateNewButton } from "src/component/Button/CreateNew";
import { DeleteButton } from "src/component/Button/Delete";
import { useTags } from "src/hook/useTags";
import { supabase } from "src/lib/supabase";
import type { definitions } from "src/type/supabase";

type InserData = {
  name: string;
  tags: { name: string }[];
};

export const CreateNewUrl = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { tags } = useTags();
  const [selectedTags] = useState<definitions["tags"][]>([]);
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

    if (!url || errorUrl) return console.log("errorUrl: " + errorUrl.message);

    const urlsTagsData: { url_id: string; tag_id: string }[] = selectedTags.map(
      (d) => {
        return { url_id: url.id, tag_id: d.id };
      }
    );
    const { data: urlsTags, error: errorUrlsTags } = await supabase
      .from<definitions["urls_tags"]>("urls_tags")
      .insert(urlsTagsData)
      .single();

    if (!urlsTags || errorUrlsTags)
      return toast.error("errorUrlsTags: " + errorUrlsTags.message);

    setIsOpen(false);
    toast.success("Create Success!");
    return;
  };

  const handleOpenCreateNewUrl = () => {
    setIsOpen(true);
  };
  const handleCloseCreateNewUrl = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    reset();
  }, [isOpen]);

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        {isOpen ? (
          <DeleteButton handleClick={handleCloseCreateNewUrl} />
        ) : (
          <CreateNewButton handleClick={handleOpenCreateNewUrl} />
        )}
      </div>

      {isOpen && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid w-[550px] grid-cols-3 gap-2 rounded-md border bg-white p-3"
        >
          <div>
            <label htmlFor="name" className="hidden h-14">
              URL名
            </label>
            <input
              id="name"
              type="text"
              placeholder="URL名"
              {...register("name", { required: true })}
              className="h-8 w-[130px] rounded-md border-gray-200 pl-2 text-lg font-bold"
            />
          </div>{" "}
          <div className="col-span-2 flex h-10 items-center gap-2 overflow-x-scroll rounded-md border px-2">
            {fields.map((field, index) => {
              return (
                <div className="flex items-center gap-2 p-1">
                  <select
                    key={field.id}
                    {...register(`tags.${index}.name`)}
                    className="whitespace-nowrap rounded-md py-1 text-center text-xs focus:border-none"
                  >
                    <option value="pr-5">--タグを選択--</option>
                    {tags?.map((tag) => {
                      return (
                        <option
                          key={tag.id}
                          value={tag.id}
                          className={`inline-block whitespace-nowrap rounded-xl bg-yellow-200 py-1 px-3 text-center text-xs`}
                        >
                          {tag.name}
                        </option>
                      );
                    })}
                  </select>
                  <div>
                    <button
                      type="button"
                      onClick={() => {
                        return remove(index);
                      }}
                      className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-sm font-semibold text-white"
                    >
                      ✖︎
                    </button>
                  </div>
                </div>
              );
            })}
            <button
              type="button"
              onClick={() => {
                return append({ name: "" });
              }}
              className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-white"
            >
              +
            </button>
          </div>
          <div className="flex items-end justify-end">
            <input
              type="submit"
              value={"登録"}
              className="w-[126px] rounded-md bg-green-400 py-1 px-4 text-center text-sm font-semibold text-white hover:cursor-pointer"
            />
          </div>
        </form>
      )}
    </div>
  );
};

import dayjs from "dayjs";
import { useRouter } from "next/router";
import { MouseEventHandler } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "src/lib/supabase";
import type { definitions } from "src/type/supabase";

export const CreateNewTag = (props: {
  handleClose?: MouseEventHandler<HTMLButtonElement>;
}) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InserData>();

  type InserData = {
    name: string;
  };
  const onSubmit = async (data: InserData) => {
    const { data: tags, error } = await supabase
      .from<definitions["tags"]>("tags")
      .upsert({ name: data.name });

    if (!tags || error) return alert(error.message);

    alert("Create Success!");
    router.reload();
    return;
  };

  return (
    <div>
      <div className="absolute top-0 bottom-0 inset-0 opacity-70 bg-gray-200 rounded-xl"></div>
      <div className="absolute top-1/4 left-1/4 px-10 py-4 rounded-xl bg-white space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">タグ作成</h2>
          <button onClick={props.handleClose} className="text-xl">
            ✖︎
          </button>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 max-w-[600px] justify-between"
        >
          <div className="flex items-center gap-4">
            <p>作成日</p>
            <p className="border-gray-300 rounded-xl">
              {dayjs().format("YYYY-MMDD")}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <label htmlFor="name">タグ名</label>
            <input
              id="name"
              type="text"
              {...register("name", { required: true })}
              className="border-gray-300 rounded-xl"
            />
          </div>
          <div>
            <input
              type="submit"
              value={"登録"}
              className="py-2 px-4 text-sm inline-block bg-sky-200 rounded-xl hover:bg-sky-500 w-[300px]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

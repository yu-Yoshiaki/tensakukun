import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { CreateNewButton } from "src/component/Button/CreateNew";
import { DeleteButton } from "src/component/Button/Delete";
import { useTags } from "src/hook/useTags";
import type { definitions } from "src/type/supabase";

export const CreateNewTagForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { upsertTags } = useTags();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<definitions["tags"]>();

  const onSubmit = async (data: definitions["tags"]) => {
    const { error } = await upsertTags(data);
    if (error) return toast.error(error.message);
    setIsOpen(false);
    toast.success("Create Success!");
    return;
  };

  useEffect(() => {
    reset();
  }, [isOpen]);

  const onOpenModal = () => {
    setIsOpen(true);
  };
  const onCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        {isOpen ? (
          <DeleteButton handleClick={onCloseModal} />
        ) : (
          <CreateNewButton handleClick={onOpenModal} />
        )}
      </div>
      {isOpen && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center justify-between whitespace-nowrap rounded-md border px-5 py-2">
            <div className="flex gap-2">
              <div className="flex items-center">
                {errors && errors.name?.message}
                <label htmlFor="name" className="hidden">
                  タグ名
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: true })}
                  capture
                  className="h-8 w-[130px] border-sky-200 pl-2 text-lg font-bold"
                />
              </div>
              <div className="w-[140px] text-xs">
                作成日: {dayjs().format("YYYY/MM/DD")}
              </div>
            </div>{" "}
            <div className="flex auto-cols-min gap-2">
              <input
                type="submit"
                value={"登録"}
                className="w-[126px] rounded-md bg-green-400 py-2 px-4 text-center text-sm font-semibold text-white hover:cursor-pointer"
              />
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

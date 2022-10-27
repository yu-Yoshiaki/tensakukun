import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { CreateNewButton } from "app/components";
import { useUserSession } from "app/auth/useUserSession";
import type { definitions } from "app/types/supabase";
import { useTags } from "app/tags/useTags";
import { DeleteButton } from "app/components/buttons/DeleteButton";

export const TagForm = () => {
  const { session } = useUserSession();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { upsertTags } = useTags();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<definitions["tags"]>();

  const onSubmit = async (data: definitions["tags"]) => {
    if (!session || !session.user) return;
    const { error } = await upsertTags({ ...data, owner: session.user.id });
    if (error) return toast.error(error.message);
    setIsOpen(false);
    toast.success("Create Success!");
    router.reload();
    return;
  };

  useEffect(() => {
    reset();
  }, [isOpen, reset]);

  const onOpenModal = () => {
    setIsOpen(true);
  };
  const onCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="max-h-[400px] space-y-2">
      <div className="flex space-x-2">
        {isOpen ? (
          <DeleteButton handleClick={onCloseModal} />
        ) : (
          <CreateNewButton handleClick={onOpenModal} />
        )}
      </div>
      {isOpen && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-[195px,auto,auto] items-center gap-4 whitespace-nowrap px-5 py-2 md:w-auto border"
        >
          <div className="flex items-center gap-1 text-lg font-bold">
            {errors && errors.name?.message}
            <label htmlFor="name" className="text-4xl">
              🔖
            </label>

            <input
              id="name"
              type="text"
              {...register("name", { required: true })}
              capture
              className="w-[150px] border-gray-300 h-8 text-lg font-bold pl-1"
            />
          </div>
          <div className="text-xs ">
            作成日:
            <span className="text-sm font-semibold">
              {dayjs().format("YYYY/MM/DD")}
            </span>
          </div>

          <input
            type="submit"
            value={"登録"}
            className="rounded-md bg-green-400 py-2 px-4 text-center text-sm font-semibold text-white hover:cursor-pointer"
          />
        </form>
      )}
    </div>
  );
};

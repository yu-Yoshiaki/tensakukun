import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { CreateNewButton } from "src/components";
import { useUserSession } from "src/auth/useUserSession";
import type { definitions } from "src/types/supabase";
import { useTags } from "src/tags/useTags";
import { Modal } from "src/components/Modal";

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
    <div className="space-y-4">
      <CreateNewButton handleClick={onOpenModal} />

      {isOpen && (
        <Modal>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-[550px] space-y-8 rounded-md border p-10 bg-white"
          >
            <div className="flex justify-between items-center">
              <div className="font-bold text-2xl">タグ作成</div>
              <button onClick={onCloseModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 hover:text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
            <div className="space-y-1">
              <label htmlFor="name" className="font-semibold text-sm">
                作成するタグの名前
              </label>
              <div className="flex items-center border p-2 rounded-md">
                <span className="text-xl font-semibold ">#</span>
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: true })}
                  className="border-none focus:ring-0 font-semibold text-md pl-1"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center gap-2 rounded-md bg-black text-white px-16 pl-20 py-2 text-lg font-semibold hover:bg-gray-700"
              >
                登録 🎉
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

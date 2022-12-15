import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { CreateNewButton } from "src/components";
import { Modal } from "src/components/Modal";
import { useUserSession } from "src/pages/auth/useUserSession";
import { useTags } from "src/pages/tags/useTags";
import type { definitions } from "src/types/supabase";

export const TagForm = () => {
  const { session } = useUserSession();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { upsertTags } = useTags();
  const {
    register,
    handleSubmit,
    // formState: { errors },
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

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="space-y-4">
      <CreateNewButton onClick={handleOpenModal} />

      {isOpen && (
        <Modal>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-[550px] space-y-8 rounded-md border bg-white p-10"
          >
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">タグ作成</div>
              <button onClick={handleCloseModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8 hover:text-gray-400"
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
              <label htmlFor="name" className="text-sm font-semibold">
                作成するタグの名前
              </label>
              <div className="flex items-center rounded-md border p-2">
                <span className="text-xl font-semibold ">#</span>
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: true })}
                  className="border-none pl-1 font-semibold focus:ring-0"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center gap-2 rounded-md bg-black px-16 py-2 pl-20 text-lg font-semibold text-white hover:bg-gray-700"
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

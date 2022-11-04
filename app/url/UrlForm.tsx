import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { CreateNewButton } from "app/components";
import { useUserSession } from "app/auth/useUserSession";
import { supabase } from "app/libs/supabase";
import type { definitions } from "app/types/supabase";
import { Modal } from "app/components/Modal";

type InserData = {
  name: string;
};

export const UrlForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { session } = useUserSession();
  const { register, handleSubmit, reset } = useForm<InserData>();
  const onSubmit = async (data: InserData) => {
    if (!session) return;
    try {
      const { error: errorUrl } = await supabase
        .from<definitions["urls"]>("urls")
        .insert({
          owner: session.user?.id,
          name: data.name,
        })
        .single();

      if (errorUrl) throw new Error(`urls error`);

      setIsOpen(false);
      toast.success("Create Success!");
    } catch (error: any) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const onOpenCreateNewUrl = () => {
    setIsOpen(true);
  };
  const onCloseCreateNewUrl = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    reset();
  }, [isOpen, reset]);

  return (
    <div className="space-y-4">
      <CreateNewButton handleClick={onOpenCreateNewUrl} />

      {isOpen && (
        <Modal>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-[550px] space-y-8 rounded-md border p-10 bg-white"
          >
            <div className="flex justify-between items-center">
              <div className="font-bold text-2xl">URL作成</div>
              <button onClick={onCloseCreateNewUrl}>
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
            <div className="space-y-1 ">
              <label htmlFor="name" className="font-semibold text-sm">
                作成するURLの名前
                <span className="font-thin">
                  （友だち追加経路として表示されます。）
                </span>
              </label>
              <div className="flex gap-2 items-center border p-2 rounded-md">
                <span className="text-xl">📎</span>
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: true })}
                  className="border-none focus:ring-0 font-semibold text-md"
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

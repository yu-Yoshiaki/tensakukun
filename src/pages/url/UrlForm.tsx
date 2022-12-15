import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { CreateNewButton } from "src/components";
import { Modal } from "src/components/Modal";
import { supabase } from "src/libs/supabase";
import { useUserSession } from "src/pages/auth/useUserSession";
import type { definitions } from "src/types/supabase";

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

  const handleOpenCreateNewUrl = () => {
    setIsOpen(true);
  };
  const handleCloseCreateNewUrl = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    reset();
  }, [isOpen, reset]);

  return (
    <div className="space-y-4">
      <CreateNewButton onClick={handleOpenCreateNewUrl} />

      {isOpen && (
        <Modal>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-[550px] space-y-8 rounded-md border bg-white p-10"
          >
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">URL作成</div>
              <button onClick={handleCloseCreateNewUrl}>
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
            <div className="space-y-1 ">
              <label htmlFor="name" className="text-sm font-semibold">
                作成するURLの名前
                <span className="font-thin">
                  （友だち追加経路として表示されます。）
                </span>
              </label>
              <div className="flex items-center gap-2 rounded-md border p-2">
                <span className="text-xl">📎</span>
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: true })}
                  className="border-none font-semibold focus:ring-0"
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

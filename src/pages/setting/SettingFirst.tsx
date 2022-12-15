import axios from "axios";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useUserSession } from "src/pages/auth/useUserSession";
import { useCallback } from "react";

type Form = {
  apiChannelId: string;
  apiChannelSecret: string;
  liffChannelId: string;
  liffChannelSecret: string;
};

export const SettingFirst = () => {
  const { session } = useUserSession();
  const { push } = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Form>({ criteriaMode: "all" });

  const onSubmit = useCallback(async (data: Form) => {
    try {
      const { data: config } = await axios.post<{
        status: "success" | string;
      }>(`/api/linesdk/${session?.user?.id}/createConfig`, data);

      toast.success(config.status);
      return push("/");
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        return console.log("axiosでエラーが発生しています。");
      }
      toast.error(error.message);
    }
  }, []);

  return (
    <div className="flex items-center justify-center bg-gray-200 h-screen">
      <div className="w-[700px] space-y-4 rounded-md bg-white py-20 px-24 h-[90vh]">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="text-2xl font-bold">
            <p>LINE Webhook APIと連携</p>
            <span className="text-green-400 text-sm">
              Line公式アカウントの「設定」→ 「Messaging API」より
            </span>
          </div>

          <label>
            <span className="flex items-center gap-1">
              Messaging API ChannelID
              <span className="text-red-500 font-semibold">
                {errors.apiChannelId ? "入力必須です。" : "※"}
              </span>
            </span>
            <input
              type="text"
              {...register("apiChannelId", { required: true })}
              className="h-10 w-full rounded-md border-gray-300 p-2"
              autoComplete="off"
            />
          </label>

          <label>
            <span className="flex items-center gap-1">
              Messaging API ChannelSecret
              <span className="text-red-500 font-semibold">
                {errors.apiChannelSecret ? "入力必須です。" : "※"}
              </span>
            </span>
            <input
              type="text"
              {...register("apiChannelSecret", { required: true })}
              className="h-10 w-full rounded-md border-gray-300 p-2"
              autoComplete="off"
            />
          </label>

          <div className="text-2xl font-bold">
            <p>LINEログインと連携</p>{" "}
            <span className="text-green-400 text-sm">
              LINEデベロッパーズコンソールの「LINEログイン」→
              「チャネル基本設定」より
            </span>
          </div>

          <label>
            <span className="flex items-center gap-1">
              LIFF チャネルID
              <span className="text-red-500 font-semibold">
                {errors.liffChannelId ? "入力必須です。" : "※"}
              </span>
            </span>
            <input
              type="text"
              {...register("liffChannelId", { required: true })}
              className="h-10 w-full rounded-md border-gray-300 p-2"
              autoComplete="off"
            />
          </label>
          <label>
            <span className="flex items-center gap-1">
              LIFF チャネルシークレット
              <span className="text-red-500 font-semibold">
                {errors.liffChannelSecret ? "入力必須です。" : "※"}
              </span>
            </span>
            <input
              type="text"
              {...register("liffChannelSecret", { required: true })}
              className="h-10 w-full rounded-md border-gray-300 p-2"
              autoComplete="off"
            />
          </label>

          <button
            type={"submit"}
            className="w-[200px] rounded-md bg-gray-800 py-4 text-center text-sm font-semibold text-white hover:bg-gray-700  md:inline-block"
          >
            登録
          </button>
        </form>
      </div>
    </div>
  );
};

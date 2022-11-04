import axios from "axios";
import { useRouter } from "next/router";
import { FieldError, useForm, UseFormRegister } from "react-hook-form";
import toast from "react-hot-toast";
import { useUserSession } from "app/auth/useUserSession";
import { supabase } from "app/libs/supabase";
import { definitions } from "app/types/supabase";

type Form = {
  apiChannelId: string;
  apiChannelSecret: string;
  liffChannelId: string;
  liffChannelSecret: string;
};
const Input = (props: {
  error: FieldError | undefined;
  id:
    | "apiChannelId"
    | "apiChannelSecret"
    | "liffChannelId"
    | "liffChannelSecret";
  text: string;
  register: UseFormRegister<Form>;
}) => {
  return (
    <div className="space-y-1">
      <div className="flex justify-between">
        <label htmlFor={props.id}>{props.text}</label>
        {props.error && <div className="text-red-500">入力必須です。</div>}
      </div>
      <input
        id={props.id}
        type="text"
        {...props.register(props.id)}
        className="h-10 w-full rounded-md border-gray-300 p-2"
        autoComplete="off"
      />
    </div>
  );
};
export const SettingFirst = () => {
  const { session } = useUserSession();
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Form>({ criteriaMode: "all" });

  const onSubmit = async (data: Form) => {
    if (!session) return;
    try {
      const { data: config } = await axios.post<{
        status: "success" | string;
      }>(`/api/linesdk/${session.user?.id}/createConfig`, data);

      if (config.status === "success") {
        await supabase
          .from<definitions["OwnerInfomation"]>("OwnerInfomation")
          .insert({ firstLogin: false });
        toast.success(config.status);
        router.push("/");
      }
    } catch (error: any) {
      toast.error(error.message);
    }

    return;
  };

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
          <Input
            error={errors.apiChannelId}
            id="apiChannelId"
            text="Messaging API ChannelID"
            register={register}
          />
          <Input
            error={errors.apiChannelSecret}
            id="apiChannelSecret"
            text="Messaging API ChannelSecret"
            register={register}
          />

          <div className="text-2xl font-bold">
            <p>LINEログインと連携</p>{" "}
            <span className="text-green-400 text-sm">
              LINEデベロッパーズコンソールの「LINEログイン」→
              「チャネル基本設定」より
            </span>
          </div>
          <Input
            error={errors.liffChannelId}
            id="liffChannelId"
            text="LIFF チャネルID"
            register={register}
          />
          <Input
            error={errors.liffChannelSecret}
            id="liffChannelSecret"
            text="LIFF チャネルシークレット"
            register={register}
          />

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

import type { Message } from "@line/bot-sdk";
import axios from "axios";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Input } from "src/component/";
import type { definitions } from "src/type/supabase";

type Props = {
  lineId: definitions["reserve"]["lineid"];
  onClose?: () => void;
};

export const Form = (props: Props) => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ criteriaMode: "all" });

  const onSubmit = async (data: any) => {
    if (data["メッセージ"] === undefined) return;
    const sendTo = props.lineId;
    const messages: Message | Message[] = [
      { type: "text", text: data["メッセージ"] },
    ];
    await axios.post("/api/sendMessage/oneToOne", { userId: sendTo, messages });
    router.reload();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-around md:justify-center md:gap-x-4"
    >
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <Input
        placeholder="メッセージを入力"
        label="メッセージ"
        register={register}
        errors={errors}
        labelLeft={false}
      />
      <button
        type="submit"
        className="text-sm font-semibold text-red-600 hover:text-blue-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
      </button>
    </form>
  );
};

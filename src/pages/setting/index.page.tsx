import axios from "axios";
import type { GetServerSideProps } from "next";
import { useEffect } from "react";
import type { FieldError, UseFormRegister } from "react-hook-form";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Layout } from "src/component";
import { lineClient } from "src/lib/lineClient";

type Props = {
  endpoint: string;
};

type Form = {
  name: string;
  lineId: string;
  addFriendsId: string;
  channelId: string;
  channelSecret: string;
  webhookUrl: string;
  liffEndPoint: string;
  liffId: string;
};

const Input = (props: {
  error: FieldError | undefined;
  id:
    | "name"
    | "lineId"
    | "addFriendsId"
    | "channelId"
    | "channelSecret"
    | "webhookUrl"
    | "liffEndPoint"
    | "liffId";
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
        {...props.register(props.id, { required: true })}
        className="h-10 w-full rounded-md border-gray-300 p-2"
      />
    </div>
  );
};

const Setting = (props: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Form>({ criteriaMode: "all" });

  const onSubmit = async (data: any) => {
    if (data["Webhook URL"] === undefined) return;
    const { data: res } = await axios.post("/api/setWebhookUrl", {
      endpoint: data["Webhook URL"],
    });
    if (res.status === "success") return toast.success("SUCCESS");
    return;
  };

  useEffect(() => {
    reset({ webhookUrl: props.endpoint });
  }, [props.endpoint, reset]);

  return (
    <Layout header="設定">
      <div className="flex gap-8 px-8 pt-8">
        <div className="w-[700px] space-y-4 rounded-md bg-white p-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Input
              error={errors.webhookUrl}
              id="webhookUrl"
              text="webhook Url"
              register={register}
            />
            <Input
              error={errors.name}
              id="name"
              text="アカウント名"
              register={register}
            />
            <Input
              error={errors.lineId}
              id="lineId"
              text="LINE ID"
              register={register}
            />
            <Input
              error={errors.addFriendsId}
              id="addFriendsId"
              text="友達追加ID"
              register={register}
            />
            <Input
              error={errors.channelId}
              id="channelId"
              text="チャンネルID"
              register={register}
            />
            <Input
              error={errors.channelSecret}
              id="channelSecret"
              text="チャンネルシークレット"
              register={register}
            />
            <Input
              error={errors.liffEndPoint}
              id="liffEndPoint"
              text="LIFF エンドポイント"
              register={register}
            />
            <Input
              error={errors.liffId}
              id="liffId"
              text="LIFF ID"
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
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { endpoint } = await lineClient.getWebhookEndpointInfo();
  return {
    props: {
      endpoint,
    },
  };
};

export default Setting;

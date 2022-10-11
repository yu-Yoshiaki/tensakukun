import axios from "axios";
import type { GetServerSideProps } from "next";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Layout } from "src/component";
import { lineClient } from "src/lib/lineClient";

type Props = {
  endpoint: string;
};

const Setting = (props: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ criteriaMode: "all" });

  const onSubmit = async (data: any) => {
    if (data["Webhook URL"] === undefined) return;
    const { data: res } = await axios.post("/api/setWebhookUrl", {
      endpoint: data["Webhook URL"],
    });
    if (res.status === "success") return toast.success("SUCCESS");
    return;
  };

  return (
    <Layout>
      <h2 className="m-8 text-2xl font-bold">設定</h2>

      <div className="flex gap-8 px-8 pt-8">
        <div className="w-[700px] space-y-4 rounded-md bg-white p-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-1">
              <div className="flex justify-between">
                <label htmlFor="Webhook URL">Webhook URL</label>
                {errors.title && (
                  <div className="text-red-500">入力必須です。</div>
                )}
              </div>
              <input
                id="Webhook URL"
                type="text"
                {...register("Webhook URL", { required: true })}
                defaultValue={props.endpoint}
                className="h-10 w-full rounded-md border-gray-300 p-2"
              />
            </div>
            <div className="space-y-1">
              <div className="flex justify-between">
                <label htmlFor="オーナー">オーナー</label>
                {errors.title && (
                  <div className="text-red-500">入力必須です。</div>
                )}
              </div>
              <input
                id="オーナー"
                type="text"
                {...register("オーナー", { required: true })}
                defaultValue={"HOTEL TOKYO"}
                className="h-10 w-full rounded-md border-gray-300 p-2"
              />
            </div>
            <div className="space-y-1">
              <div className="flex justify-between">
                <label htmlFor="住所">住所</label>
                {errors.title && (
                  <div className="text-red-500">入力必須です。</div>
                )}
              </div>
              <input
                id="住所"
                type="text"
                {...register("住所", { required: true })}
                defaultValue={"東京都江東区"}
                className="h-10 w-full rounded-md border-gray-300 p-2"
              />
            </div>

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

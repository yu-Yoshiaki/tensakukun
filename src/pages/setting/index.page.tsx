import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input, Layout } from "src/component";
import { useUserSession } from "src/hook/useUserSession";
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

  const onSubmit = async (_: any) => {
    // if (data["Webhook URL"] === undefined) return;
    // const { data: res } = await axios.post("/api/setWebhookUrl", {
    //   endpoint: data["Webhook URL"],
    // });
    // if (res.status === "success") return alert("SUCCESS");
    return;
  };

  return (
    <Layout>
      <div className="h-full min-h-[400px] w-full rounded-xl bg-white p-4 shadow-md">
        <h2 className="text-center text-xl font-bold">設定</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input
            labelLeft={true}
            placeholder=""
            label="Webhook URL"
            register={register}
            errors={errors}
            defaultValue={props.endpoint}
          />
          <Input
            labelLeft={true}
            placeholder=""
            label="オーナー"
            register={register}
            errors={errors}
            defaultValue={"HOTEL TOKYO"}
          />
          <Input
            labelLeft={true}
            placeholder=""
            label="住所"
            register={register}
            errors={errors}
            defaultValue={"東京都江東区"}
          />
          <input
            type={"submit"}
            className="rounded-xl bg-sky-200 py-3 px-8 hover:bg-sky-300"
            value={"設定"}
          />
        </form>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { endpoint } = await lineClient.getWebhookEndpointInfo();
  console.log("heello");

  return {
    props: {
      endpoint,
    },
  };
};

export default Setting;

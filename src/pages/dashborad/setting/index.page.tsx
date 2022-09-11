import type { GetServerSideProps } from "next";
import { useForm } from "react-hook-form";
import { client } from "src/lib/client";
import { Input } from "src/pages/dashborad/component/Input";
import { Layout } from "src/pages/dashborad/component/Layout";

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
  const { endpoint } = await client.getWebhookEndpointInfo();

  return {
    props: {
      endpoint,
    },
  };
};

export default Setting;

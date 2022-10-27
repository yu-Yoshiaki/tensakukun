import dynamic from "next/dynamic";
import { Layout } from "app/components";
// import { ClossAna } from "src/component/Line/ClossAna";
import { supabase } from "app/libs/supabase";
import type { definitions } from "app/types/supabase";
import useSWR, { SWRConfig } from "swr";
import { NumberOfFriends } from "./NumberOfFriends";

const Demographic = dynamic(
  async () => {
    const module = await import("./Demographic");
    return module.Demographic;
  },
  { ssr: false }
);

const getAccessToken = async () => {
  const { data } = await supabase
    .from<definitions["OwnerInfomation"]>("OwnerInfomation")
    .select("apiChannelAccessToken")
    .single();
  return data;
};
export const AnalyticsPage = () => {
  const { data } = useSWR("getToken", getAccessToken);
  return (
    <Layout header="分析">
      <SWRConfig value={{ revalidateOnMount: false, revalidateOnFocus: false }}>
        <div className="flex flex-col justify-between gap-4 px-8">
          <NumberOfFriends token={data?.apiChannelAccessToken as string} />
          <Demographic />
          {/* <ClossAna /> */}
        </div>
      </SWRConfig>
    </Layout>
  );
};

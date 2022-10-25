import type { CustomNextPage } from "next";
import dynamic from "next/dynamic";
import { Layout } from "src/component";
// import { ClossAna } from "src/component/Line/ClossAna";
import { NumberOfFriends } from "src/component/Line/NumberOfFriends";
import { Loading } from "src/component/Loading";
import { supabase } from "src/lib/supabase";
import type { definitions } from "src/type/supabase";
import useSWR, { SWRConfig } from "swr";

const Demographic = dynamic(
  async () => {
    const module = await import("src/component/Line/Demographic");
    return module.Demographic;
  },
  { ssr: false }
);

const fetcher = async () => {
  const { data } = await supabase
    .from<definitions["OwnerInfomation"]>("OwnerInfomation")
    .select("apiChannelAccessToken")
    .single();
  return data;
};
const Root: CustomNextPage = () => {
  const { data } = useSWR("getToken", fetcher);
  if (!data) return <Loading />;
  return (
    <Layout header="分析">
      <SWRConfig value={{ revalidateOnMount: false, revalidateOnFocus: false }}>
        <div className="flex flex-col justify-between gap-4 px-8">
          <NumberOfFriends token={data.apiChannelAccessToken as string} />
          <Demographic />
          {/* <ClossAna /> */}
        </div>
      </SWRConfig>
    </Layout>
  );
};

export default Root;

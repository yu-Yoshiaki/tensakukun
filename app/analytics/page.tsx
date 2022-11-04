import dynamic from "next/dynamic";
import { Layout } from "app/components";
import { SWRConfig } from "swr";
import { NumberOfFriends } from "./NumberOfFriends";
import { Seo } from "app/components/Seo";

const Demographic = dynamic(
  async () => {
    const module = await import("./Demographic");
    return module.Demographic;
  },
  { ssr: false }
);

export const AnalyticsPage = () => {
  return (
    <Layout header="分析">
      <Seo title="分析" />
      <SWRConfig value={{ revalidateOnMount: false, revalidateOnFocus: false }}>
        <div className="flex flex-col justify-between gap-4 px-8">
          <NumberOfFriends />
          <Demographic />
          {/* <ClossAna /> */}
          {/* <PieChartComponent data={chartData.data} /> */}
        </div>
      </SWRConfig>
    </Layout>
  );
};

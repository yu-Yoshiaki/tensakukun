import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Layout } from "src/components";
import { Seo } from "src/components/Seo";
import { useUserSession } from "src/pages/auth/useUserSession";
import { SWRConfig } from "swr";

import { NumberOfFriends } from "./NumberOfFriends";

const Demographic = dynamic(
  async () => {
    const module = await import("./Demographic");
    return module.Demographic;
  },
  { ssr: false }
);

export const Analytics = () => {
  const { session } = useUserSession();
  const { push } = useRouter();

  useEffect(() => {
    if (!session) {
      push("/auth");
    }
  }, [session, push]);

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

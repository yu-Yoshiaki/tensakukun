import type { GetServerSideProps } from "next";
import { PageNation } from "src/component/Pagenation";
import { supabase } from "src/lib/supabase";
import { Layout } from "src/pages/dashborad/component/Layout";
import { Reservation } from "src/pages/dashborad/component/Reservation";
import type { definitions } from "src/type/supabase";

const pageSize = 10;

const Index = (props: {
  reserve: definitions["reserve"][];
  page: number;
  totalCount: number;
}) => {
  return (
    <Layout>
      <Reservation reserve={props.reserve} />

      <PageNation
        pagenationPath="/dashborad/reservation"
        totalCount={props.totalCount}
        page={props.page}
        pageSize={pageSize}
      />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = context.query.page ? Number(context.query.page) : 1;
  const query = supabase
    .from<definitions["reserve"]>("reserve")
    .select("*", { count: "exact" });

  const startIndex = (page - 1) * pageSize;

  const { data: reserve, count } = await query
    .neq("status", "キャンセル")
    .range(startIndex, startIndex + (pageSize - 1));

  return {
    props: {
      reserve,
      page,
      totalCount: count ? count : 0,
    },
  };
};

export default Index;

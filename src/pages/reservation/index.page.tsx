import type { GetServerSideProps } from "next";
import { Layout, Pagenation, Reservation } from "src/component";
import { supabase } from "src/lib/supabase";
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

      <Pagenation
        pagenationPath="/reservation"
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
    .select("*", { count: "exact" })
    .order("reserveid");

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

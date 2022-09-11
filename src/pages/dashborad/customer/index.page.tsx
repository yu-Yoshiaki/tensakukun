import type { GetServerSideProps } from "next";
import Link from "next/link";
import { PageNation } from "src/component/Pagenation";
import { supabase } from "src/lib/supabase";
import { ImageFill } from "src/pages/dashborad/component/ImageFill";
import { Layout } from "src/pages/dashborad/component/Layout";
import type { definitions } from "src/type/supabase";

const pageSize = 10;

type Props = {
  customers: definitions["customers"][];
  page: number;
  totalCount: number;
};
const Index = (props: Props) => {
  return (
    <Layout>
      <div className="space-y-8">
        {props.customers.map((d) => {
          return (
            <div
              key={d.lineid}
              className="divide-y rounded-xl bg-white px-4 shadow-md"
            >
              <div className="grid grid-cols-[auto,1fr,auto] gap-4 py-4 ">
                {d.pictureurl ? (
                  <ImageFill
                    width="w-20"
                    height="h-20"
                    src={d.pictureurl}
                    alt={""}
                    objectFit="cover"
                    className="rounded-full"
                  />
                ) : (
                  <div className="h-20 w-20 animate-pulse rounded-full bg-gray-200"></div>
                )}

                <p className="text-lg font-semibold">{d.displayname}</p>

                <div className="flex flex-col justify-between text-xs font-semibold text-white">
                  {d.status === "follow" ? (
                    <p className="rounded-xl bg-green-600 py-1 px-2">
                      フォロー中
                    </p>
                  ) : (
                    <p className="rounded-xl bg-red-600 py-1 px-2">
                      ブロックされている
                    </p>
                  )}
                  <Link href={`/dashborad/customer/talk/${d.lineid}`}>
                    <a className="rounded-md bg-pink-400 py-1 px-2 text-center hover:translate-x-1">
                      トークへ
                    </a>
                  </Link>
                </div>
              </div>

              <div className="flex gap-2 py-4">
                {d.tag?.map((item, index) => {
                  return (
                    <p
                      key={index}
                      className="rounded-xl bg-yellow-200 py-1 px-2"
                    >
                      {item as string}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <PageNation
        pagenationPath="/dashborad/customer"
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
    .from<definitions["customers"]>("customers")
    .select("*", { count: "exact" });

  const startIndex = (page - 1) * pageSize;

  const { data: customers, count } = await query
    .neq("status", "キャンセル")
    .range(startIndex, startIndex + (pageSize - 1));

  return {
    props: {
      customers,
      page,
      totalCount: count ? count : 0,
    },
  };
};

export default Index;

import type { GetServerSideProps } from "next";
import Link from "next/link";
import { ImageFill, Layout, Pagenation } from "src/component";
import { supabase } from "src/lib/supabase";
import { SearchTag } from "./SearchTag";
import type { definitions } from "src/type/supabase";
import { Tag } from "src/pages/customer/Tag";

type Customer = definitions["customers"] & {
  customers_tags: (definitions["customers_tags"] & {
    tags: definitions["tags"];
  })[];
};
const pageSize = 10;

type Props = {
  customers: Customer[];
  page: number;
  totalCount: number;
};
const Index = (props: Props) => {
  return (
    <Layout>
      <div className="grid grid-cols-[1fr,auto] gap-6">
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-xl h-10"></div>
          {props.customers?.map(
            ({ pictureurl, displayname, customers_tags, lineid, status }) => {
              return (
                <div
                  key={lineid}
                  className="divide-y rounded-xl bg-white px-4 shadow-md"
                >
                  <div className="grid grid-cols-[auto,1fr,auto] gap-4 py-4 ">
                    {pictureurl ? (
                      <ImageFill
                        width="w-20"
                        height="h-20"
                        src={pictureurl}
                        alt={""}
                        objectFit="cover"
                        className="rounded-full"
                      />
                    ) : (
                      <div className="h-20 w-20 animate-pulse rounded-full bg-gray-200"></div>
                    )}

                    <div className="flex items-start gap-4">
                      <p className="text-lg font-semibold">{displayname}</p>
                    </div>

                    <div className="flex flex-col justify-between text-xs font-semibold text-white">
                      {status === "follow" ? (
                        <p className="rounded-xl bg-green-600 py-1 px-2">
                          フォロー中
                        </p>
                      ) : (
                        <p className="rounded-xl bg-red-600 py-1 px-2">
                          ブロックされている
                        </p>
                      )}
                      <div className="flex justify-end">
                        <Link href={`/customer/talk/${lineid}`}>
                          <a className="rounded-md bg-pink-400 py-1 px-2 text-center hover:translate-x-1">
                            トークへ
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 h-14 items-center">
                    {customers_tags?.map(({ tag_id, tags }) => {
                      return (
                        <Tag href={`/customer/${tag_id}`} text={tags.name} />
                      );
                    })}
                  </div>
                </div>
              );
            }
          )}
          <Pagenation
            pagenationPath="/customer"
            totalCount={props.totalCount}
            page={props.page}
            pageSize={pageSize}
          />
        </div>
        <SearchTag />
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = context.query.page ? Number(context.query.page) : 1;
  const customersQuery = supabase.from<Customer>("customers");

  const startIndex = (page - 1) * pageSize;

  const { data: customers, count } = await customersQuery
    .select(
      `
      lineid,
    displayname,
    pictureurl,
    status,
    customers_tags (
      tag_id,
      tags (
        name
      )
    )
    `,
      { count: "exact" }
    )
    .order("lineid")
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

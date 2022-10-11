import type { GetServerSideProps } from "next";
import Link from "next/link";
import { ImageFill, Layout, Pagenation } from "src/component";
import { Tag } from "src/component/Tag";
import { useFilteredCustomer } from "src/hook/useFilteredCustomer";
import { supabase } from "src/lib/supabase";
import { Filter } from "src/pages/customer/Filter";
import type { definitions } from "src/type/supabase";

export type Customer = definitions["customers"] & {
  customers_tags: {
    tags: definitions["tags"];
  }[];
};

type Props = {
  customers: Customer[];
  page: number;
  totalCount: number;
};

const pageSize = 10;

const Index = (props: Props) => {
  const { customers, handleFilterCustomers } = useFilteredCustomer();

  return (
    <Layout>
      <h2 className="m-8 text-2xl font-bold">LINE友達一覧</h2>
      <div className="flex gap-8 p-8">
        <div className="flex w-[600px] flex-col justify-between bg-white ">
          <div>
            <div className="p-4">
              ユーザー数{" "}
              <span className="text-lg font-semibold">{customers?.length}</span>
            </div>
            <div className="h-[400px] overflow-y-auto">
              <div className="divide-y border-y">
                {customers?.map(
                  ({
                    pictureurl,
                    displayname,
                    customersTags,
                    lineid,
                    status,
                  }) => {
                    return (
                      <div key={lineid} className=" h-[90px] bg-white px-4">
                        <div className="grid grid-cols-[auto,1fr,auto] gap-3 py-3 ">
                          <div className="flex items-center justify-center">
                            {pictureurl ? (
                              <ImageFill
                                width="w-12"
                                height="h-12"
                                src={pictureurl}
                                alt={""}
                                objectFit="cover"
                                className="flex items-center rounded-full"
                              />
                            ) : (
                              <div className="h-20 w-20 animate-pulse rounded-full bg-gray-200"></div>
                            )}
                          </div>

                          <div className="flex flex-col items-start gap-3">
                            <div className="flex gap-2">
                              <p className="font-semibold">{displayname}</p>
                              <div className="flex items-center">
                                <p
                                  className={`rounded-md py-[1px] px-2 text-[1px] font-semibold text-white 
                                 ${
                                   status === "follow"
                                     ? "bg-green-600"
                                     : "bg-red-600"
                                 }`}
                                >
                                  {status === "follow"
                                    ? "フォロー中"
                                    : "ブロックされている"}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 overflow-x-auto">
                              {customersTags?.map(({ tags }) => {
                                return <Tag key={tags.id} name={tags.name} />;
                              })}
                            </div>
                          </div>

                          <div className="flex flex-col justify-between gap-2 ">
                            <div className="flex justify-end">
                              <Link href={`/message/talk/${lineid}`}>
                                <a className="min-w-[80px] rounded-md bg-pink-400 py-1 px-2 text-center text-xs font-semibold text-white hover:bg-pink-600">
                                  トークへ
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
          <div className="p-4">
            <Pagenation
              pagenationPath="/customer"
              totalCount={props.totalCount}
              page={props.page}
              pageSize={pageSize}
            />
          </div>
        </div>
        <div className="row-start-1 md:row-start-auto">
          <Filter
            customers={props.customers}
            handleFilterCustomers={handleFilterCustomers}
          />
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = context.query.page ? Number(context.query.page) : 1;
  const customersQuery = supabase.from<Customer>("customers");
  const startIndex = (page - 1) * pageSize;

  const { data: customers, count } = await customersQuery
    .select("*, customers_tags(*, tags(*))", { count: "exact" })
    .order("lineid")
    .neq("status", "キャンセル")
    .range(startIndex, startIndex + (pageSize - 1));

  // const { data: tags } = await supabase
  //   .from<definitions["tags"]>("tags")
  //   .select("id,name");

  return {
    props: {
      // tags,
      customers,
      page,
      totalCount: count ? count : 0,
    },
  };
};

export default Index;

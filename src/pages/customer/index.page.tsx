import Link from "next/link";
import { ImageFill, Layout, Tag } from "src/component";
import { useFilteredCustomer } from "src/hook/useFilteredCustomer";
import { Filter } from "src/pages/customer/Filter";

const Index = () => {
  const { filteredCustomers, onFilterCustomers } = useFilteredCustomer();
  if (!filteredCustomers) return <div>Loading...</div>;
  return (
    <Layout header="LINE友達一覧">
      <div className="mb-8 flex justify-center md:hidden">
        <Filter handleFilterCustomers={onFilterCustomers} />
      </div>
      <div className="flex flex-col-reverse gap-8 overflow-auto p-8 md:flex-row">
        <div className="flex w-[600px] flex-col bg-white">
          <div>
            <div className="p-4">
              ユーザー数
              <span className="text-lg font-semibold">
                {filteredCustomers.length}
              </span>
            </div>
            <div className="h-[400px] overflow-auto">
              <div className="divide-y border-y">
                {filteredCustomers.map(
                  ({
                    pictureurl,
                    displayname,
                    customersTags,
                    lineid,
                    status,
                  }) => {
                    return (
                      <div key={lineid} className="h-[90px] bg-white px-4">
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
                              <p className="text-lg font-semibold">
                                {displayname}
                              </p>
                              <div className="flex items-center">
                                <p
                                  className={`flex items-center gap-1 rounded-md px-1 font-semibold ${
                                    status === "follow"
                                      ? "bg-green-300"
                                      : "bg-red-300"
                                  }`}
                                >
                                  <span className="text-xl">
                                    {status === "follow" ? "😊" : "🥺"}
                                  </span>
                                  <span className="text-[12px] md:text-[1px]">
                                    {status === "follow"
                                      ? "フォロー中"
                                      : "ブロック"}
                                  </span>
                                </p>
                              </div>
                            </div>

                            <div className="hidden-scrollbar flex w-[400px] items-center gap-2 overflow-x-auto">
                              {customersTags?.map(({ tags }) => {
                                return <Tag key={tags.id} name={tags.name} />;
                              })}
                            </div>
                          </div>

                          <div className="flex items-center justify-center">
                            <Link href={`/message/talk/${lineid}`}>
                              <a className="flex flex-col items-center text-[0] font-semibold md:text-[1px]">
                                <span className="text-3xl">💬</span>トーク
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
          {/* <div className="p-4">
            <Pagenation
              pagenationPath="/customer"
              totalCount={props.totalCount}
              page={props.page}
              pageSize={pageSize}
            />
          </div> */}
        </div>
        <div className="hidden md:block">
          <Filter handleFilterCustomers={onFilterCustomers} />
        </div>
      </div>
    </Layout>
  );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const page = context.query.page ? Number(context.query.page) : 1;
//   const customersQuery = supabase.from<Customer>("customers");
//   const startIndex = (page - 1) * pageSize;

//   const { data: customers, count } = await customersQuery
//     .select("*, customers_tags(*, tags(*))", { count: "exact" })
//     .order("lineid")
//     .neq("status", "キャンセル")
//     .range(startIndex, startIndex + (pageSize - 1));

//   // const { data: tags } = await supabase
//   //   .from<definitions["tags"]>("tags")
//   //   .select("id,name");

//   return {
//     props: {
//       // tags,
//       customers,
//       page,
//       totalCount: count ? count : 0,
//     },
//   };
// };

export default Index;

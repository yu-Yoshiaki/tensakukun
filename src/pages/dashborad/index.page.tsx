import type { GetStaticProps } from "next";
import Head from "next/head";
import { supabase } from "src/lib/supabase";
import { Reservation } from "src/pages/dashborad/Reservation";
import { Sidemenu } from "src/pages/dashborad/Sidemenu";
import type { definitions } from "src/type/supabase";

import { Header } from "./Header";

const Index = (props: { reserve: definitions["reserve"][] }) => {
  return (
    <div className="space-y-5 bg-gray-50 p-5">
      <Head>
        <title>CHU-HOTEL-ONLINE</title>
      </Head>
      <Header />
      <main className="min-h-[80vh] grid-cols-4 gap-x-4 space-y-4 lg:grid lg:space-y-0">
        <Sidemenu />
        <Reservation reserve={props.reserve} />
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data: reserve } = await supabase
    .from<definitions["reserve"]>("reserve")
    .select("*")
    .neq("status", "キャンセル");

  return {
    props: {
      reserve,
    },
    revalidate: 5,
  };
};

export default Index;

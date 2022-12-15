import { useRouter } from "next/router";
import { useEffect } from "react";
import { supabase } from "src/libs/supabase";
import { useUserSession } from "src/pages/auth/useUserSession";
import type { definitions } from "src/types/supabase";
import useSWR from "swr";

import { SettingFirst } from "./SettingFirst";
import { SettingSecond } from "./SettingSecond";

const fetcher = async () => {
  const { data } = await supabase
    .from<definitions["owner_infomation"]>("owner_infomation")
    .select("*")
    .single();
  return data;
};

export const Setting = () => {
  const { session } = useUserSession();
  const { push } = useRouter();
  const { data } = useSWR(session && "getFirstLogin", fetcher);

  useEffect(() => {
    if (!session) {
      push("/auth");
    }
    if (!data) {
      push("/setting");
    }
  }, [session, data, push]);

  return (
    <div>{data && !data.firstLogin ? <SettingSecond /> : <SettingFirst />}</div>
  );
};

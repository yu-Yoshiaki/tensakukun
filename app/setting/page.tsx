import { supabase } from "app/libs/supabase";
import { definitions } from "app/types/supabase";
import useSWR from "swr";
import { Setting } from "./Setting";
import { SettingFirst } from "./SettingFirst";

const fetcher = async () => {
  const { data } = await supabase
    .from<definitions["OwnerInfomation"]>("OwnerInfomation")
    .select("firstLogin")
    .single();
  return data;
};

export const SettingPage = () => {
  const { data } = useSWR("getFirstLogin", fetcher);
  return <div>{data && !data.firstLogin ? <Setting /> : <SettingFirst />}</div>;
};

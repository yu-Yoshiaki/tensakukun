import { supabase } from "src/lib/supabase";
import type { definitions } from "src/type/supabase";
import useSWR from "swr";

export const MessageTemplate = () => {
  const fetcher = async () => {
    const { data } = await supabase
      .from<definitions["messagetemplate"]>("messagetemplate")
      .select("id, content");
    return data;
  };

  const { data } = useSWR("messageList", fetcher);
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {data.map((d) => {
        return <div key={d.id}>{d.id}</div>;
      })}
    </div>
  );
};

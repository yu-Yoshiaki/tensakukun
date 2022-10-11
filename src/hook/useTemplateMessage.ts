import { useState } from "react";
import { supabase } from "src/lib/supabase";
import { definitions } from "src/type/supabase";
import useSWR from "swr";

export const MessageTemplate = () => {
  const [message, setMessage] = useState<string>();

  const fetcher = async () => {
    const { data } = await supabase
      .from<definitions["messagetemplate"]>("messagetemplate")
      .select("content");
    return data;
  };

  const { data } = useSWR("messageList", fetcher);
  //   if (data) {
  //     setMessage(data[0].content);
  //   }

  return { message, setMessage };
};

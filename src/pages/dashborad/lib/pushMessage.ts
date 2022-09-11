import axios from "axios";
import { supabase } from "src/lib/supabase";
import type { definitions } from "src/type/supabase";

type Props = {
  message: string;
  toUserId: string;
};

export const pushMessage = async (props: Props) => {
  const { data } = await axios.post<{ status: string }>(
    "/api/sendPushMessage",
    {
      userId: props.toUserId,
      message: props.message,
    }
  );

  if (data.status === "Success") {
    await supabase.from<definitions["pushmessages"]>("pushmessages").upsert({
      touserid: props.toUserId,
      message: props.message,
    });
  }
};

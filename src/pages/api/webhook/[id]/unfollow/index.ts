/* eslint-disable @typescript-eslint/no-explicit-any */
import { supabase } from "src/lib/supabase";
import type { definitions } from "src/type/supabase";

export const unfollowAction = async (event: any) => {
  await supabase
    .from<definitions["customers"]>("customers")
    .update({
      status: "unfollow",
    })
    .eq("lineid", event.source.userId);
};

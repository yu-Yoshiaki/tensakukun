/* eslint-disable @typescript-eslint/no-explicit-any */
import { supabase } from "app/libs/supabase";
import type { definitions } from "app/types/supabase";

export const unfollowAction = async (event: any) => {
  await supabase
    .from<definitions["customers"]>("customers")
    .update({
      status: "unfollow",
    })
    .eq("lineid", event.source.userId);
};

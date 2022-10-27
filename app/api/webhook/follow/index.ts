/* eslint-disable @typescript-eslint/no-explicit-any */
import { configClient } from "app/libs/configClient";
import { supabaseServer } from "app/libs/supabaseServer";
import type { definitions } from "app/types/supabase";

export const followAction = async (id: string, event: any) => {
  const client = await configClient(id);
  if (!client) return;
  const profile = await client.getProfile(event.source.userId);

  const { data } = await supabaseServer
    .from<definitions["customers"]>("customers")
    .upsert([
      {
        lineid: profile.userId,
        displayname: profile.displayName,
        pictureurl: profile.pictureUrl,
        status: "follow",
        owner: id,
      },
    ]);

  if (data) {
    return client.replyMessage(event.replyToken, {
      type: "text",
      text: "登録ありがとうございます。",
    });
  }
};

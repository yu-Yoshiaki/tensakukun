import type { Client, ClientConfig } from "@line/bot-sdk";
import { supabaseServer } from "./supabaseServer";
import type { definitions } from "app/types/supabase";

const line = require("@line/bot-sdk");

export const configClient = async (id: string) => {
  const { data } = await supabaseServer
    .from<definitions["OwnerInfomation"]>("OwnerInfomation")
    .select("apiChannelAccessToken, apiChannelSecret")
    .eq("id", id)
    .single();

  if (!data) return;
  const config: ClientConfig = {
    channelAccessToken: data.apiChannelAccessToken as string,
    channelSecret: data.apiChannelId as string,
  };
  const client: Client = new line.Client(config);
  return client;
};

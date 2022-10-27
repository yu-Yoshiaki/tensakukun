import { Client } from "@line/bot-sdk";

export const getLineBotInfo = async (client: Client) => {
  if (!client) return;
  const data = await client.getBotInfo();
  return data;
};

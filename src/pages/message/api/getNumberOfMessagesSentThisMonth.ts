import type { Client } from "@line/bot-sdk";

export const getNumberOfMessagesSentThisMonth = async (client: Client) => {
  const { totalUsage } = await client.getNumberOfMessagesSentThisMonth();
  return totalUsage;
};

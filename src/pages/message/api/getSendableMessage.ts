import { Client } from "@line/bot-sdk";

export const getSendableMessage = async (client: Client) => {
  const { value } = await client.getTargetLimitForAdditionalMessages();
  return value;
};

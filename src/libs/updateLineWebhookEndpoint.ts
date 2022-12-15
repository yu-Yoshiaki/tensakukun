import { Client } from "@line/bot-sdk";

export const updateLineWebhookEndpoint = async (
  client: Client,
  endpoint: string
) => {
  if (!client) return;
  await client.setWebhookEndpointUrl(endpoint);
  return "SUCCESS";
};

import { Client } from "@line/bot-sdk";

export const getLineWebhookEndpoint = async (client: Client) => {
  if (!client) return;

  const { endpoint } = await client.getWebhookEndpointInfo();
  return endpoint;
};

import { configClient } from "app/libs/configClient";
import { getLineWebhookEndpoint } from "app/libs/getLineWebhookEndpoint";
import { updateLineWebhookEndpoint } from "app/libs/updateLineWebhookEndpoint";
import type { NextApiRequest, NextApiResponse } from "next";

const getOrUpdateLineBotWebhookUrl = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { ownerId } = req.query;
  const client = await configClient(ownerId as string);
  if (!client) return;

  if (req.method === "POST") {
    const { endpoint } = req.body;
    try {
      await updateLineWebhookEndpoint(client, endpoint);
      res.status(200).json({ status: "success" });
    } catch (err: any) {
      res.status(500).json(err.message);
    }
  }
  if (req.method === "GET") {
    try {
      const endpoint = await getLineWebhookEndpoint(client);
      res.status(200).json({ endpoint });
    } catch (err: any) {
      res.status(500).json({ status: err.message });
    }
  }
};

export default getOrUpdateLineBotWebhookUrl;

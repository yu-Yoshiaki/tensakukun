import type { NextApiRequest, NextApiResponse } from "next";
import { configClient } from "src/libs/configClient";
import { getLineWebhookEndpoint } from "src/libs/getLineWebhookEndpoint";
import { updateLineWebhookEndpoint } from "src/libs/updateLineWebhookEndpoint";

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

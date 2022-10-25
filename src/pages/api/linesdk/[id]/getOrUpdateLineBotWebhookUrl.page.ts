import type { NextApiRequest, NextApiResponse } from "next";
import { configClient } from "src/pages/api/lib/configClient";

const getOrUpdateLineBotWebhookUrl = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { id } = req.query;
  const client = await configClient(id as string);
  if (req.method === "POST") {
    const { endpoint } = req.body;
    try {
      if (!client) return;
      await client.setWebhookEndpointUrl(endpoint);
      res.status(200).json({ status: "success" });
    } catch (err: any) {
      res.status(500).json(err.message);
    }
  }
  if (req.method === "GET") {
    try {
      if (!client) return;
      const { endpoint } = await client.getWebhookEndpointInfo();
      res.status(200).json({ endpoint });
    } catch (err: any) {
      res.status(500).json({ status: err.message });
    }
  }
};

export default getOrUpdateLineBotWebhookUrl;

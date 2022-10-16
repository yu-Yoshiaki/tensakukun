import type { NextApiRequest, NextApiResponse } from "next";
import { lineClient } from "src/lib/lineClient";

const getWebhookUrl = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const { endpoint } = await lineClient.getWebhookEndpointInfo();
      res.status(200).json({ endpoint });
    } catch (err: any) {
      res.status(500).json({ status: err.message });
    }
  }
};

export default getWebhookUrl;

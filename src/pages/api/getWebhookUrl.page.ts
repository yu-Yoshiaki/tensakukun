import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "src/lib/client";

const getWebhookUrl = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const { endpoint } = await client.getWebhookEndpointInfo();
      res.status(200).json({ endpoint });
    } catch (err: any) {
      res.status(500).json({ status: err.message });
    }
  }
};

export default getWebhookUrl;

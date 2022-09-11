import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "src/lib/client";

const getWebhookUrl = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { endpoint } = req.body;
    try {
      await client.setWebhookEndpointUrl(endpoint);
      res.status(200).json({ status: "success" });
    } catch (err: any) {
      res.status(500).json(err.message);
    }
  }
};

export default getWebhookUrl;

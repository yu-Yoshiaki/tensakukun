import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "src/lib/client";

const sendPushMessage = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId, message } = req.body;
  if (req.method === "POST") {
    try {
      await client.pushMessage(userId, {
        type: "text",
        text: message,
      });

      res.status(200).json({ status: "Success" });
    } catch (err: any) {
      res.status(500).json({ status: err.message });
    }
  }
};

export default sendPushMessage;

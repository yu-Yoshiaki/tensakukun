import type { Message } from "@line/bot-sdk";
import { configClient } from "src/libs/configClient";
import type { NextApiRequest, NextApiResponse } from "next";

type Body = { messages: Message[] };

const toAll = async (req: NextApiRequest, res: NextApiResponse) => {
  const { messages }: Body = req.body;
  if (req.method === "POST") {
    const { ownerId } = req.query;

    try {
      const client = await configClient(ownerId as string);
      if (!client) return;
      await client.broadcast(messages);
      res
        .status(200)
        .json({ status: "SUCCESS", message: "メッセージを送信しました。" });
    } catch (err: any) {
      res.status(500).json({ status: "ERROR", message: err.message });
    }
  }
};

export default toAll;

import type { Message } from "@line/bot-sdk";
import type { NextApiRequest, NextApiResponse } from "next";
import { lineClient } from "src/lib/lineClient";

type Body = { messages: Message[] };

const toAll = async (req: NextApiRequest, res: NextApiResponse) => {
  const { messages }: Body = req.body;
  if (req.method === "POST") {
    try {
      await lineClient.broadcast(messages);
      res
        .status(200)
        .json({ status: "SUCCESS", message: "メッセージを送信しました。" });
    } catch (err: any) {
      res.status(500).json({ status: "ERROR", message: err.message });
    }
  }
};

export default toAll;
import type { Message } from "@line/bot-sdk";
import type { NextApiRequest, NextApiResponse } from "next";
import { lineClient } from "src/lib/lineClient";

type Body = { userId: string; messages: Message[] };

const oneToOne = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId, messages }: Body = req.body;
  if (req.method === "POST") {
    try {
      await lineClient.pushMessage(userId, messages);
      res
        .status(200)
        .json({ status: "SUCCESS", message: "メッセージを送信しました。" });
    } catch (err: any) {
      res.status(500).json({ status: "ERROR", message: err.message });
    }
  }
};

export default oneToOne;

import type { Message } from "@line/bot-sdk";
import type { NextApiRequest, NextApiResponse } from "next";
import { lineClient } from "src/lib/lineClient";

type Body = { users: string[]; messages: Message[] };

const toSelect = async (req: NextApiRequest, res: NextApiResponse) => {
  const { users, messages }: Body = req.body;
  if (req.method === "POST") {
    try {
      await lineClient.multicast(users, messages);
      res.status(200).json({ status: true, message: "success" });
    } catch (err: any) {
      res.status(500).json({ status: false, message: err.message });
    }
  }
};

export default toSelect;

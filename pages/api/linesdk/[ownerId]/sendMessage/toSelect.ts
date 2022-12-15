import type { Message } from "@line/bot-sdk";
import type { NextApiRequest, NextApiResponse } from "next";
import { configClient } from "src/libs/configClient";

type Body = { users: string[]; messages: Message[] };

const toSelect = async (req: NextApiRequest, res: NextApiResponse) => {
  const { users, messages }: Body = req.body;
  if (req.method === "POST") {
    const { ownerId } = req.query;

    try {
      const client = await configClient(ownerId as string);
      if (!client) return;
      await client.multicast(users, messages);
      res.status(200).json({ status: true, message: "success" });
    } catch (err: any) {
      res.status(500).json({ status: false, message: err.message });
    }
  }
};

export default toSelect;

import type { RichMenu } from "@line/bot-sdk";
import type { NextApiRequest, NextApiResponse } from "next";
import { lineClient } from "src/lib/lineClient";

type Body = { richMenu: RichMenu };

const create = async (req: NextApiRequest, res: NextApiResponse) => {
  const { richMenu }: Body = req.body;
  if (req.method === "POST") {
    try {
      const menuId = await lineClient.createRichMenu(richMenu);
      res.status(200).json(menuId);
    } catch (err: any) {
      res.status(500).json(err.message);
    }
  }
};

export default create;

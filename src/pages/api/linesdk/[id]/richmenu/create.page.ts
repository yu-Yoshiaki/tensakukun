import type { RichMenu } from "@line/bot-sdk";
import type { NextApiRequest, NextApiResponse } from "next";
import { configClient } from "src/pages/api/lib/configClient";

type Body = { richMenu: RichMenu };

const create = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { richMenu }: Body = req.body;
    const { id } = req.query;
    const client = await configClient(id as string);
    if (!client) return;
    try {
      const menuId = await client.createRichMenu(richMenu);
      res.status(200).json(menuId);
    } catch (err: any) {
      res.status(500).json(err.message);
    }
  }
};

export default create;
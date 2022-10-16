import type { NextApiRequest, NextApiResponse } from "next";
import { lineClient } from "src/lib/lineClient";

type Body = { richMenuId: string };

const Delete = async (req: NextApiRequest, res: NextApiResponse) => {
  const { richMenuId }: Body = req.body;
  if (req.method === "POST") {
    try {
      const menuId = await lineClient.deleteRichMenu(richMenuId);
      res.status(200).json(menuId);
    } catch (err: any) {
      res.status(500).json(err.message);
    }
  }
};

export default Delete;

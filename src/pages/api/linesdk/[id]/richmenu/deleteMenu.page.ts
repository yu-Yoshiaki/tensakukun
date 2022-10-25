import type { NextApiRequest, NextApiResponse } from "next";
import { configClient } from "src/pages/api/lib/configClient";

type Body = { richMenuId: string };

const Delete = async (req: NextApiRequest, res: NextApiResponse) => {
  const { richMenuId }: Body = req.body;
  if (req.method === "POST") {
    const { id } = req.query;
    const client = await configClient(id as string);
    if (!client) return;
    try {
      const menuId = await client.deleteRichMenu(richMenuId);
      res.status(200).json(menuId);
    } catch (err: any) {
      res.status(500).json(err.message);
    }
  }
};

export default Delete;

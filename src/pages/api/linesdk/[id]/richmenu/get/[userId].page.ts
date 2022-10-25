import type { NextApiRequest, NextApiResponse } from "next";
import { configClient } from "src/pages/api/lib/configClient";

const idOfUser = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { id, userId } = req.query;
    const client = await configClient(id as string);
    if (!client) return;
    try {
      const menuId = await client.getRichMenuIdOfUser(userId as string);
      res.status(200).json(menuId);
    } catch (err: any) {
      res.status(500).json("リンクされているリッチメニューがありません。");
    }
  }
};

export default idOfUser;

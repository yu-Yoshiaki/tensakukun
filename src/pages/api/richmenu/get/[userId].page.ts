import type { NextApiRequest, NextApiResponse } from "next";
import { lineClient } from "src/lib/lineClient";

const idOfUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId } = req.query;
  if (req.method === "GET") {
    try {
      const menuId = await lineClient.getRichMenuIdOfUser(userId as string);
      res.status(200).json(menuId);
    } catch (err: any) {
      res.status(500).json("リンクされているリッチメニューがありません。");
    }
  }
};

export default idOfUser;

import type { NextApiRequest, NextApiResponse } from "next";
import { lineClient } from "src/lib/lineClient";

const list = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const menu = await lineClient.getRichMenuList();
      res.status(200).json(menu);
    } catch (err: any) {
      res.status(500).json(err.message);
    }
  }
};

export default list;

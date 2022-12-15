import { configClient } from "src/libs/configClient";
import type { NextApiRequest, NextApiResponse } from "next";

const list = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { ownerId } = req.query;
    const client = await configClient(ownerId as string);
    if (!client) return;
    try {
      const menu = await client.getRichMenuList();
      res.status(200).json(menu);
    } catch (err: any) {
      res.status(500).json(err.message);
    }
  }
};

export default list;

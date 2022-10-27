import { configClient } from "app/libs/configClient";
import type { NextApiRequest, NextApiResponse } from "next";

const list = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { id } = req.query;
    const client = await configClient(id as string);
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

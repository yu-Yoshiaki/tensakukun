import { configClient } from "app/libs/configClient";
import type { NextApiRequest, NextApiResponse } from "next";

const linkToUser = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { id } = req.query;
    const client = await configClient(id as string);
    if (!client) return;
    try {
      await client.deleteDefaultRichMenu();
      res.status(200).json("SUCCESS");
    } catch (err: any) {
      res.status(500).json(err.message);
    }
  }
};

export default linkToUser;

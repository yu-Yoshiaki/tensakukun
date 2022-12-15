import type { NextApiRequest, NextApiResponse } from "next";
import { configClient } from "src/libs/configClient";

const linkToUser = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { ownerId } = req.query;
    const client = await configClient(ownerId as string);
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

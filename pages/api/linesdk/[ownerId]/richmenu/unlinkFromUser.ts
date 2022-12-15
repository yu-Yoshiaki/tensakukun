import type { NextApiRequest, NextApiResponse } from "next";
import { configClient } from "src/libs/configClient";

type Body = { userId: string; menuId: string };

const unlinkFromUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId }: Body = req.body;
  if (req.method === "POST") {
    const { ownerId } = req.query;
    const client = await configClient(ownerId as string);
    if (!client) return;
    try {
      await client.unlinkRichMenuFromUser(userId);

      res.status(200).json("SUCCESS");
    } catch (err: any) {
      res.status(500).json(err.message);
    }
  }
};

export default unlinkFromUser;

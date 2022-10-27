import { configClient } from "app/libs/configClient";
import type { NextApiRequest, NextApiResponse } from "next";

type Body = { userId: string; menuId: string };

const unlinkFromUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId }: Body = req.body;
  if (req.method === "POST") {
    const { id } = req.query;
    const client = await configClient(id as string);
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

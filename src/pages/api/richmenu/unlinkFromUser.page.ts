import type { NextApiRequest, NextApiResponse } from "next";
import { lineClient } from "src/lib/lineClient";

type Body = { userId: string; menuId: string };

const unlinkFromUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId }: Body = req.body;
  if (req.method === "POST") {
    try {
      await lineClient.unlinkRichMenuFromUser(userId);

      res.status(200).json("SUCCESS");
    } catch (err: any) {
      res.status(500).json(err.message);
    }
  }
};

export default unlinkFromUser;

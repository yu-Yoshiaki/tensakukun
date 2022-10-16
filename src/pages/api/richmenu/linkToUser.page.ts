import type { NextApiRequest, NextApiResponse } from "next";
import { lineClient } from "src/lib/lineClient";

type Body = { userId: string; menuId: string };

const linkToUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId, menuId }: Body = req.body;
  if (req.method === "POST") {
    try {
      await lineClient.linkRichMenuToUser(userId, menuId);

      res.status(200).json("SUCCESS");
    } catch (err: any) {
      res
        .status(500)
        .json("リッチメニューに画像が付与されていないか、IDが存在しません。");
    }
  }
};

export default linkToUser;

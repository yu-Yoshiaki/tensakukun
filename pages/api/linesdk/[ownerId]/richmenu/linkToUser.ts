import { configClient } from "src/libs/configClient";
import type { NextApiRequest, NextApiResponse } from "next";

type Body = { userId: string; menuId: string };

const linkToUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId, menuId }: Body = req.body;
  if (req.method === "POST") {
    const { ownerId } = req.query;
    const client = await configClient(ownerId as string);
    if (!client) return;
    try {
      await client.linkRichMenuToUser(userId, menuId);

      res.status(200).json("SUCCESS");
    } catch (err: any) {
      res
        .status(500)
        .json("リッチメニューに画像が付与されていないか、IDが存在しません。");
    }
  }
};

export default linkToUser;

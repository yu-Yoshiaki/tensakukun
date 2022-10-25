import type { NextApiRequest, NextApiResponse } from "next";
import { configClient } from "src/pages/api/lib/configClient";

type Body = { userId: string; menuId: string };

const linkToUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId, menuId }: Body = req.body;
  if (req.method === "POST") {
    const { id } = req.query;
    const client = await configClient(id as string);
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

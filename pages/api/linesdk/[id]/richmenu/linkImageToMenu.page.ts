import { configClient } from "app/libs/configClient";
import fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";

type Body = { menuId: string; image: any };

const linkToUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { menuId, image }: Body = req.body;
  if (req.method === "POST") {
    const { id } = req.query;
    const client = await configClient(id as string);
    if (!client) return;
    try {
      await client.setRichMenuImage(menuId, fs.createReadStream(image));

      res.status(200).json("SUCCESS");
    } catch (err: any) {
      res.status(500).json(err.message);
    }
  }
};

export default linkToUser;

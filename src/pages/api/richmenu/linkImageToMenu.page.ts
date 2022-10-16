import fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import { lineClient } from "src/lib/lineClient";

type Body = { menuId: string; image: any };

const linkToUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { menuId, image }: Body = req.body;
  if (req.method === "POST") {
    try {
      await lineClient.setRichMenuImage(menuId, fs.createReadStream(image));

      res.status(200).json("SUCCESS");
    } catch (err: any) {
      res.status(500).json(err.message);
    }
  }
};

export default linkToUser;

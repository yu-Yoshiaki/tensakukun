import type { NextApiRequest, NextApiResponse } from "next";
import { lineClient } from "src/lib/lineClient";

const linkToUser = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      await lineClient.deleteDefaultRichMenu();
      res.status(200).json("SUCCESS");
    } catch (err: any) {
      res.status(500).json(err.message);
    }
  }
};

export default linkToUser;

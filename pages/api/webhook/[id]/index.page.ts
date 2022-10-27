import { BotPage } from "app/api/webhook/page";
import type { NextApiRequest, NextApiResponse } from "next";

const index = async (req: NextApiRequest, res: NextApiResponse) => {
  await BotPage(req, res);
};

export default index;

import type { NextApiRequest, NextApiResponse } from "next";
import { lineClient } from "src/lib/lineClient";

const getNumberOfMessagesSentThisMonth = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "GET") {
    try {
      const { totalUsage } =
        await lineClient.getNumberOfMessagesSentThisMonth();

      res.status(200).json(totalUsage);
    } catch (err: any) {
      res.status(500).json(err.message);
    }
  }
};

export default getNumberOfMessagesSentThisMonth;

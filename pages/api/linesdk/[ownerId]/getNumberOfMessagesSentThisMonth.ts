import type { NextApiRequest, NextApiResponse } from "next";
import { configClient } from "src/libs/configClient";
import { getNumberOfMessagesSentThisMonth } from "src/pages/message/api/getNumberOfMessagesSentThisMonth";

const getnumberOfMessagesSentThisMonth = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "GET") {
    const { ownerId } = req.query;
    const client = await configClient(ownerId as string);
    try {
      if (client) {
        const data = await getNumberOfMessagesSentThisMonth(client);
        res.status(200).json(data);
      }
    } catch (err: any) {
      res.status(500).json(err.message);
    }
  }
};

export default getnumberOfMessagesSentThisMonth;

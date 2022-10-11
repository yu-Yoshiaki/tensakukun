import type { NextApiRequest, NextApiResponse } from "next";
import { lineClient } from "src/lib/lineClient";

const getSendableMessage = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "GET") {
    try {
      const { value } = await lineClient.getTargetLimitForAdditionalMessages();

      res.status(200).json(value);
    } catch (err: any) {
      res.status(500).json(err.message);
    }
  }
};

export default getSendableMessage;

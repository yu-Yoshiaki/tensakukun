import { configClient } from "app/libs/configClient";
import { getSendableMessage } from "app/message/api/getSendableMessage";
import type { NextApiRequest, NextApiResponse } from "next";

const getsendablemessage = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "GET") {
    const { ownerId } = req.query;
    const client = await configClient(ownerId as string);
    if (!client) return;
    try {
      const value = await getSendableMessage(client);
      if (value) res.status(200).json(value);
    } catch (err: any) {
      res.status(500).json(err.message);
    }
  }
};

export default getsendablemessage;

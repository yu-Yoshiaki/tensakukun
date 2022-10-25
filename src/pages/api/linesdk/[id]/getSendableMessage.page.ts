import type { NextApiRequest, NextApiResponse } from "next";
import { configClient } from "src/pages/api/lib/configClient";

const getSendableMessage = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "GET") {
    const { id } = req.query;
    try {
      const client = await configClient(id as string);
      if (!client) return;
      const { value } = await client.getTargetLimitForAdditionalMessages();

      res.status(200).json(value);
    } catch (err: any) {
      res.status(500).json(err.message);
    }
  }
};

export default getSendableMessage;

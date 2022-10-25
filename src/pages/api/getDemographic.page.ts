import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const getDemographic = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { token } = req.body;
    try {
      const { data } = await axios.get(
        `https://api.line.me/v2/bot/insight/demographic`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      res.status(200).json(data);
    } catch (err: any) {
      res.status(err.status).json(err.message);
    }
  }
};

export default getDemographic;

import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "src/lib/supabase";
import type { definitions } from "src/type/supabase";

const GetCustomerInfo = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const { data } = await supabase
        .from<definitions["customers"]>("customers")
        .select("*");

      if (!data) {
        return res.status(200).json("no Data.");
      }

      res.status(200).json(data);
    } catch (err: any) {
      res.status(500).json(err.message);
    }
  }
};

export default GetCustomerInfo;

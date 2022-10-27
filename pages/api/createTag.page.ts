import { supabaseServer } from "app/libs/supabaseServer";
import type { definitions } from "app/types/supabase";
import type { NextApiRequest, NextApiResponse } from "next";

/*
　Supabase RLSの制限を回避する時に使用する。（流入経路URLのクリック数更新など）
*/
const createTag = async (req: NextApiRequest, res: NextApiResponse) => {
  const tagsData = req.body;

  if (req.method === "POST") {
    try {
      const { data } = await supabaseServer
        .from<definitions["tags"]>("tags")
        .upsert(tagsData);

      res.status(200).json(data);
    } catch (err: any) {
      res.status(500).json(err.message);
    }
  }
};

export default createTag;

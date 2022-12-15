import { getFriends } from "src/libs/getFriends";
import { supabaseServer } from "src/libs/supabaseServer";
import type { definitions } from "src/types/supabase";
import type { NextApiRequest, NextApiResponse } from "next";

const GetFriends = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { ownerId } = req.query;
    try {
      const { data } = await supabaseServer
        .from<definitions["owner_infomation"]>("owner_infomation")
        .select("apiChannelAccessToken")
        .eq("id", ownerId as string)
        .single();

      const friends = await getFriends(data?.apiChannelAccessToken as string);
      res.status(200).json(friends);
    } catch (err: any) {
      res.status(500).json(err.message);
    }
  } else {
    res.status(200).json("GET以外のリクエストメソッドに対応していません。");
  }
};

export default GetFriends;

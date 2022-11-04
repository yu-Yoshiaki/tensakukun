import { countupClicks } from "app/libs/countupClicks";
import { getUrlsTags } from "app/libs/getUrlsTags";
import { getUserProfileByAccessToken } from "app/libs/getUserProfileByAccessToken";
import { supabaseServer } from "app/libs/supabaseServer";
import { verifyAccessToken } from "app/libs/verifyAccessToken";
import type { definitions } from "app/types/supabase";
import type { NextApiRequest, NextApiResponse } from "next";
/* 
 ① URLのクリック数を +1
 ② 顧客情報をLINEから取得（アクセストークン使用）
 ③ 新規ユーザーか確認し、新規なら流入経路タグ
 */

// ① URLのクリック数を +1
const countupUrlClicks = async (urlId: string) => {
  const { url, error } = await getUrlsTags(urlId);
  if (error) throw new Error(error.message);
  const { error: countupError } = await countupClicks(urlId);
  if (countupError) throw new Error(countupError.message);
  return url;
};

// ② 顧客情報をLINEから取得（アクセストークン使用）
const getProfileByToken = async (token: string) => {
  const { expiresIn } = await verifyAccessToken(token);
  //チャネルIDとアクセストークンの有効期限を確認
  if (expiresIn < 1) {
    throw new Error("トークンが正しくありません。");
  }
  const profile = await getUserProfileByAccessToken(token);
  return profile;
};

// ③ 新規ユーザーか確認し、新規なら流入経路タグ
const attendInflow = async (
  urls: definitions["urls"] & {
    tags: { tagId: definitions["urls_tags"]["tagId"] }[];
  },
  profile: {
    userId: string;
    displayName: string;
    pictureUrl: string;
  }
) => {
  // ③新規ユーザーの確認
  const { data: customer } = await supabaseServer
    .from<definitions["customers"]>("customers")
    .select("*")
    .eq("lineid", profile.userId)
    .single();

  // ④新規ユーザー作成
  if (!customer && urls) {
    const { data: customer } = await supabaseServer
      .from<definitions["customers"]>("customers")
      .insert({
        lineid: profile.userId,
        owner: urls.owner,
        displayname: profile.displayName,
        pictureurl: profile.pictureUrl,
        status: "unfollow",
        inflow: urls.tags[0].tagId,
      })
      .single();

    await supabaseServer
      .from<definitions["urls_cutomers"]>("urls_customers")
      .insert({
        urlId: urls.id,
        customerId: customer?.lineid,
        owner: urls.owner,
        clicks: 1,
      });

    //⑤流入経路タグ付与
    if (customer) {
      const insert = urls.tags.map(({ tagId }) => {
        return { customerId: customer.lineid, tagId };
      });
      await supabaseServer
        .from<definitions["customers_tags"]>("customers_tags")
        .insert(insert);
    }
  }
};

const attendInflowToUser = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "POST") {
    const { urlId, token } = req.body;
    try {
      const urls = await countupUrlClicks(urlId);
      const profile = await getProfileByToken(token);
      if (urls && profile) {
        await attendInflow(urls, profile);
        const { data } = await supabaseServer
          .from<definitions["OwnerInfomation"]>("OwnerInfomation")
          .select("basicId")
          .eq("id", urls.owner)
          .single();
        res.status(200).json({ status: "SUCCESS", data: data?.basicId });
      }
    } catch (err: any) {
      res.status(500).json({ status: "ERROR", data: err.message });
    }
  }
};

export default attendInflowToUser;

import axios from "axios";
import dayjs from "dayjs";
import type { NextApiRequest, NextApiResponse } from "next";
import { supabaseServer } from "src/pages/api/lib/supabase";
import type { definitions } from "src/type/supabase";
/* 
 ① URLのクリック数を +1
 ② 顧客情報をLINEから取得（アクセストークン使用）
 ③ 新規ユーザーか確認し、新規なら流入経路タグ
 */
const urlsQuery = supabaseServer.from<
  definitions["urls"] & {
    urlsTags: { tagId: definitions["urls_tags"]["tagId"] }[];
  }
>("urls");

// ① URLのクリック数を +1
const countupUrlClicks = async (id: string) => {
  const { data: urls, error } = await urlsQuery
    .select("*, urlsTags:urls_tags(tagId)")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  if (urls) {
    const { error: error2 } = await urlsQuery.update({
      id,
      click: (urls.click as number) + 1,
      updatedAt: dayjs().format("YYYY/MM/DD"),
    });

    if (error2) throw new Error(error2.message);
    return urls;
  }
};

// ② 顧客情報をLINEから取得（アクセストークン使用）
const getProfileByToken = async (token: string) => {
  //アクセストークンの有効性を検証
  /*eslint-disable*/
  const { data } = await axios.get<{
    client_id: string;
    expires_in: number;
  }>(`https://api.line.me/oauth2/v2.1/verify?access_token=${token}`);
  /*eslint-enable*/
  //チャネルIDとアクセストークンの有効期限を確認
  if (data.client_id !== "1657424528" || data.expires_in < 1) {
    throw new Error("トークンが正しくありません。");
  }
  //ユーザー情報取得
  const { data: profile } = await axios.get<{
    userId: string;
    displayName: string;
    pictureUrl: string;
  }>("https://api.line.me/v2/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return profile;
};
// ③ 新規ユーザーか確認し、新規なら流入経路タグ
const attendInflow = async (
  urls: definitions["urls"] & {
    urlsTags: { tagId: definitions["urls_tags"]["tagId"] }[];
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
    const { data } = await supabaseServer
      .from<definitions["customers"]>("customers")
      .insert({
        lineid: profile.userId,
        owner: urls.owner,
        displayname: profile.displayName,
        pictureurl: profile.pictureUrl,
        status: "unfollow",
      })
      .single();

    //⑤流入経路タグ付与
    if (data) {
      const insert = urls.urlsTags.map(({ tagId }) => {
        return { customerId: data.lineid, tagId };
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
    const { id, token } = req.body;
    try {
      const urls = await countupUrlClicks(id);
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

import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

/* eslint-disable */
type CheckTokenReturn = {
  client_id: string;
  expires_in: number;
};
/* eslint-enable */

type GetProfileReturn = {
  userId: string;
  displayName: string;
  pictureUrl: string;
};

const clientId = "1657424528";
const getProfileEndpoint = "https://api.line.me/v2/profile";
const checkTokenEndpoint =
  "https://api.line.me/oauth2/v2.1/verify?access_token=";

const getUserProfileByAccessToken = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "GET") {
    const { token } = req.query;
    try {
      //アクセストークンの有効性を検証
      const { data } = await axios.get<CheckTokenReturn>(
        checkTokenEndpoint + token
      );

      //チャネルIDとアクセストークンの有効期限を確認
      if (data.client_id === clientId && data.expires_in > 0) {
        //ユーザー情報取得
        const { data } = await axios.get<GetProfileReturn>(getProfileEndpoint, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (data) return res.status(200).json(data);
      }
    } catch (err: any) {
      res.status(500).json(err.message);
    }
  }
};

export default getUserProfileByAccessToken;

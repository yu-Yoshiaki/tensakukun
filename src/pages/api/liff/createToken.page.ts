import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const qs = require("qs");

const createToken = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { apiChannelId, apiChannelSecret } = req.body;

    const endpoint = "https://api.line.me/oauth2/v2.1/token";
    /* eslint-disable */
    const encodedBody = qs.stringify({
      grant_type: "authorization_code",
      code: "",
      redirect_uri: "",
      client_id: apiChannelId,
      client_secret: apiChannelSecret,
    });

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    type AxiosReturn = {
      access_token: string;
      expires_in: number;
      id_token: string;
      refresh_token: string;
      scope: string;
      token_type: string;
    };
    /* eslint-enable */
    try {
      await axios.post<AxiosReturn>(endpoint, encodedBody, config);
    } catch (err: any) {
      res.status(500).json({ status: err.message });
    }
  }
};

export default createToken;

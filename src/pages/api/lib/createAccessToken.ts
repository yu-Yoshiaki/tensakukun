import axios from "axios";

const qs = require("qs");

/* Webhook APiとLINEログイン、どちらのトークンでも作成可能 */

type AxiosReturn = {
  //eslint-disable-next-line
  access_token: string;
};

export const createAccessToken = async (
  apiChannelId: string,
  apiChannelSecret: string
) => {
  /*eslint-disable*/
  const encodedBody = qs.stringify({
    grant_type: "client_credentials",
    client_id: apiChannelId,
    client_secret: apiChannelSecret,
  });
  /*eslint-enable*/

  const { data } = await axios.post<AxiosReturn>(
    "https://api.line.me/v2/oauth/accessToken",
    encodedBody,
    {
      headers: {
        //eslint-disable-next-line
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  return data.access_token;
};

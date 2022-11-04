import axios from "axios";

/*eslint-disable*/
type Response = {
  client_id: string;
  expires_in: number;
};
/*eslint-enable*/

export const verifyAccessToken = async (token: string) => {
  const { data } = await axios.get<Response>(
    `https://api.line.me/oauth2/v2.1/verify?access_token=${token}`
  );

  return { clientId: data.client_id, expiresIn: data.expires_in };
};

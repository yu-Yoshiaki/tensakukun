import axios from "axios";
import dayjs from "dayjs";

/*eslint-disable*/
type Response = {
  status: "ready";
  followers: number;
  targetedReaches: number;
  blocks: number;
};
/*eslint-enable*/

export const getFriends = async (token: string) => {
  const { data } = await axios.get<Response>(
    `https://api.line.me/v2/bot/insight/followers?date=${dayjs().format(
      "YYYYMMDD"
    )}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};

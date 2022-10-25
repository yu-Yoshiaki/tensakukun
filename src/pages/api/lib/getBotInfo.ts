import axios from "axios";

type AxiosReturn = {
  basicId: string;
  displayName: string;
  pictureUrl: string;
};

export const getBotInfo = async (accessToken: string) => {
  const { data } = await axios.get<AxiosReturn>(
    "https://api.line.me/v2/bot/info",
    {
      headers: {
        //eslint-disable-next-line
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return data;
};

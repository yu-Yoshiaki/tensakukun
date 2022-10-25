import axios from "axios";

type AxiosReturn = {
  message?: string;
};

export const setWebhookUrl = async (id: string, accessToken: string) => {
  const { data } = await axios.put<AxiosReturn>(
    "https://api.line.me/v2/bot/channel/webhook/endpoint",
    {
      endpoint: `https://lplus.vercel.app/api/webhook/${id}`,
    },
    {
      headers: {
        //eslint-disable-next-line
        Authorization: `Bearer ${accessToken}`,
        //eslint-disable-next-line
        "Content-Type": "application/json",
      },
    }
  );
  return data;
};

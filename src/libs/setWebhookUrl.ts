import axios from "axios";

export const setWebhookUrl = async (id: string, accessToken: string) => {
  try {
    const { data } = await axios.put<{}>(
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
  } catch (error) {
    let message = "webhook URL設置中に、何かしらのエラーが発生しました。";
    throw new Error(message);
  }
};

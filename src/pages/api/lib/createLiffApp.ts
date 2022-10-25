import axios from "axios";

type AxiosReturn = {
  liffId: string;
};

export type LiffAppData = {
  view: {
    type: "full" | "tall" | "compact";
    url: string;
  };
  description: string;
  features?: {
    ble: boolean;
    qrCode: boolean;
  };
  permanentLinkPattern: "concat";
  scope: ["profile", "chat_message.write"];
  botPrompt: "none";
};

export const createLiffApp = async (
  accessToken: string,
  appData: LiffAppData
) => {
  const { data } = await axios.post<AxiosReturn>(
    "https://api.line.me/liff/v1/apps",
    appData,
    {
      headers: {
        //eslint-disable-next-line
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return data.liffId;
};

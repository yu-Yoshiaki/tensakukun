import axios from "axios";

type CreateLiffAppReturn = {
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
  try {
    const { data } = await axios.post<CreateLiffAppReturn>(
      "https://api.line.me/liff/v1/apps",
      appData,
      {
        headers: {
          //eslint-disable-next-line
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return data;
  } catch (error) {
    let message = "何かしらのエラーが発生しました。";
    if (axios.isAxiosError(error) && error.response?.status === 400) {
      message =
        "リクエストに無効な値が含まれているか、もしくは、チャネルに追加できるLIFFアプリ数の上限に達しています。";
    }
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      message = "認証に失敗しました。";
    }
    throw new Error(message);
  }
};

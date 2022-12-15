import axios from "axios";

export type LiffAppData = {
  view: {
    url: string;
  };
};

export const updateLiffApp = async (
  liffId: string,
  accessToken: string,
  appData: LiffAppData
) => {
  try {
    await axios.put(`https://api.line.me/liff/v1/apps/${liffId}`, appData, {
      headers: {
        //eslint-disable-next-line
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (error) {
    let message = "何かしらのエラーが発生しました。";
    if (axios.isAxiosError(error) && error.response?.status === 400) {
      message = "リクエストに無効な値が含まれています。";
    }
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      message = "認証に失敗しました。";
    }
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      message =
        "指定したLIFFアプリは存在しません。もしくは、指定したLIFFアプリは別のチャネルに追加されています。";
    }
    throw new Error(message);
  }
};

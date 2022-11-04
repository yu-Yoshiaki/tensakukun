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
  await axios.put(`https://api.line.me/liff/v1/apps/${liffId}`, appData, {
    headers: {
      //eslint-disable-next-line
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

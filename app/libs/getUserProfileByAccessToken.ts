import axios from "axios";

type Response = {
  userId: string;
  displayName: string;
  pictureUrl: string;
};

export const getUserProfileByAccessToken = async (token: string) => {
  const { data } = await axios.get<Response>("https://api.line.me/v2/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

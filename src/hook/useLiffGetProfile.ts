import { Liff } from "@line/liff/dist/lib";
import useSWR from "swr";

type Profile = {
  userId: string;
  displayName: string;
  pictureUrl?: string;
  statusMessage?: string;
};

export const useLiffGetProfile = (liff: Liff | undefined) => {
  const fetchLineProfile = async () => {
    if (!liff) return;
    const profile = await liff.getProfile();
    return profile;
  };
  const { data: profile } = useSWR("liff/p", fetchLineProfile);
  console.log("----------", profile);

  return { profile };
};

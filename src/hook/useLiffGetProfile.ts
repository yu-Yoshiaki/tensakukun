import { Liff } from "@line/liff/dist/lib";
import { useState, useEffect } from "react";

export const useLiffGetProfile = (props: { liff: Liff }) => {
  const [lineid, setLineid] = useState<string>();

  const fetchLineProfile = async () => {
    if (!props.liff) return;
    const profile = await props.liff.getProfile();
    setLineid(profile.userId);
  };

  useEffect(() => {
    fetchLineProfile();
  }, []);

  return { lineid };
};

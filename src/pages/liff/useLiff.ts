import type { Liff } from "@line/liff/dist/lib";
import liff from "@line/liff/dist/lib";
import { useState } from "react";
import toast from "react-hot-toast";

// フロントでのみ使用可能。
// useEffectや、dynamic importのssr回避

export const useLiff = (liffId: string) => {
  const [liffClient, setLiffClient] = useState<Liff | null>();

  liff
    .init({ liffId: liffId as string })
    .then(() => {
      // LIFFブラウザからのアクセスの場合、liff.init()　→ 自動でログイン
      // LIFFブラウザ以外のアクセスの場合、liff.init() → 明示的にログイン
      if (!liff.isLoggedIn()) {
        liff.login();
      }
      setLiffClient(liff);
    })
    .catch((err: any) => {
      toast.error(`エラー: ${err.message}`);
    });

  return { liffClient };
};

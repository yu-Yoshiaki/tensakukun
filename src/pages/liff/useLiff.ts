import liff, { Liff } from "@line/liff/dist/lib";
import { useState } from "react";

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
      console.log(`エラー: ${err.message}`);
    });

  return { liffClient };
};

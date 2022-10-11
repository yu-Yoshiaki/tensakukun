import { Liff } from "@line/liff";
import { useEffect, useState } from "react";

export const useLiff = () => {
  const [liff, setLiff] = useState<Liff>();

  // @line/liffは、中で"window"を使用している。なので、動的インポートが必須。
  useEffect(() => {
    import("@line/liff").then((liff: any) => {
      liff
        .init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID as string })
        .then(() => {
          // LIFFブラウザからのアクセスの場合、liff.init()　→ 自動でログイン
          // LIFFブラウザ以外のアクセスの場合、liff.init() → 明示的にログイン
          if (!liff.isLoggedIn()) {
            liff.login();
          }
          setLiff(liff);
        })
        .catch((err: any) => {
          alert(`エラー: ${err.message}`);
        });
    });
  }, []);

  return { liff };
};

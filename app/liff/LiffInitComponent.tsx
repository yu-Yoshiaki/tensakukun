import { useRouter } from "next/router";
import liff, { Liff } from "@line/liff";
import { ReactNode } from "react";
import useSWR from "swr";

/* ダイナミックインポートして使う */

export const LiffInitComponent = (props: { children: ReactNode }) => {
  const router = useRouter();
  const { liffId } = router.query;
  const { mutate } = useSWR<Liff | null>("liff", null, {
    fallbackData: null,
  });

  liff
    .init({ liffId: liffId as string })
    .then(() => {
      // LIFFブラウザからのアクセスの場合、liff.init()　→ 自動でログイン
      // LIFFブラウザ以外のアクセスの場合、liff.init() → 明示的にログイン
      if (!liff.isLoggedIn()) {
        liff.login();
      }
      mutate(liff);
    })
    .catch((err: any) => {
      console.log(`エラー: ${err.message}`);
    });

  return <div>{props.children}</div>;
};

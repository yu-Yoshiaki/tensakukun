import axios from "axios";
import { useCallback, useEffect } from "react";
import { Loading } from "app/components/layouts/Loading";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Liff } from "@line/liff/dist/lib";
import dynamic from "next/dynamic";

const LiffInitComponent = dynamic(
  () =>
    import("../LiffInitComponent").then((module) => module.LiffInitComponent),
  { ssr: false }
);

/* 
「友達追加」する際、ここを経由させる。
経由時に、クリック数の更新とユーザーIDの取得を行う。

todo: {
  1. urlが持つクリック数と、タグリストを取得
  2. ユーザープロフィールを取得(LIFF)
  3. urlが持つクリック数をカウントアップ
  4. urlが持つタグリストを、ユーザーに割り当てる
}
*/

export const InflowRoutePage = () => {
  const router = useRouter();
  const { urlId } = router.query;
  const { data: liff } = useSWR<Liff | null>("liff", null, {
    fallbackData: null,
  });
  const createUserInfomation = useCallback(async () => {
    if (!urlId || !liff) return;
    const token = liff.getAccessToken();
    if (token) {
      // const { data } = await axios.post<{ status: string; data: string }>(
      //   `/api/attendInflowToUser`,
      //   {
      //     urlId,
      //     token,
      //   }
      // );
      // if (data) {
      //   window.location.href = `https://line.me/R/ti/p/${data.data}`;
      // }
    }
  }, [liff, urlId]);

  useEffect(() => {
    createUserInfomation();
  }, [liff, createUserInfomation]);

  return (
    <LiffInitComponent>
      <div className="flex h-screen items-center justify-center bg-gray-200">
        <Loading />
      </div>
    </LiffInitComponent>
  );
};

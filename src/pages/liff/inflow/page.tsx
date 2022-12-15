import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { Loading } from "src/components/layouts/Loading";
import { useLiff } from "src/pages/liff/useLiff";

/* 
「友達追加」する際、ここを経由させる。
経由時に、クリック数の更新とユーザーIDの取得を行う。
※ dynamic import などでクライアントのみで使用可能
*/

export const InflowRoutePage = () => {
  const router = useRouter();
  const { urlId, liffId } = router.query;
  const { liffClient } = useLiff(liffId as string);
  const createUserInfomation = useCallback(async () => {
    if (!urlId || !liffClient) return;
    const token = liffClient.getAccessToken();
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
  }, [liffClient, urlId]);

  useEffect(() => {
    createUserInfomation();
  }, [liffClient, createUserInfomation]);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-200">
      <Loading />
    </div>
  );
};

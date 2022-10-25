import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { Loading } from "src/component/Loading";
import { useLiff } from "src/hook/useLiff";

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

const RouteParam = () => {
  const router = useRouter();
  const { param } = router.query; //urlId
  const { liff } = useLiff();

  const createUserInfomation = useCallback(async () => {
    if (!param || !liff) return;
    const token = liff?.getAccessToken();
    if (token) {
      const { data } = await axios.post<{ status: string; data: string }>(
        `/api/attendInflowToUser`,
        {
          id: param,
          token,
        }
      );

      if (data) {
        window.location.href = `https://line.me/R/ti/p/${data.data}`;
      }
    }
  }, [liff, param]);

  useEffect(() => {
    createUserInfomation();
  }, [liff, createUserInfomation]);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-200">
      <Loading />
    </div>
  );
};

export default RouteParam;

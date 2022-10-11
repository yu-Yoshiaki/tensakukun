import { useRouter } from "next/router";
import { supabase } from "src/lib/supabase";
import type { definitions } from "src/type/supabase";
import useSWR from "swr";

/* 
「友達追加」する際、ここを経由させる。
経由時に、クリック数の更新とユーザーIDの取得を行う。

フロー: 現在のクリック数を取得 → カウントアップ → クリック数を更新
*/

const supabaseQuery = supabase.from<definitions["urls"]>("urls");

const updateClicks = async (id: string, currentClicks: number) => {
  const newClicks = currentClicks + 1;
  await supabaseQuery.update({
    id,
    click: newClicks,
  });
};

const fetchClicks = async (id: string) => {
  const { data } = await supabaseQuery.select("click").eq("id", id);
  return data;
};

const RouteParam = () => {
  const router = useRouter();
  const { param } = router.query;
  const { data: url } = useSWR(param, fetchClicks);

  (async () => {
    if (!url) return;
    await updateClicks(param as string, url[0].click as number);
    window.location.href = "https://line.me/R/ti/p/@316fxwdd";
  })();

  return <div>画面遷移中......</div>;
};

export default RouteParam;

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLiff } from "src/hook/useLiff";
import { supabase } from "src/lib/supabase";
import type { definitions } from "src/type/supabase";

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

type Profile = {
  userId: string;
  displayName: string;
  pictureUrl?: string;
  statusMessage?: string;
};

const urlsQuery = supabase.from<
  definitions["urls"] & { urlsTags: { tags: definitions["tags"] }[] }
>("urls");

const fetchUrls = async (urlId: string) => {
  const { data: urls, error: ErrorOfFetchUrlsError } = await urlsQuery
    .select("*, urlsTags:urls_tags(tags(*))")
    .eq("id", urlId);

  return { urls, ErrorOfFetchUrlsError };
};

const updateClicks = async (urlId: string, currentClicks: number) => {
  const newClicks = currentClicks + 1;
  const { error: ErrorOfUpdateClicksError } = await urlsQuery.update({
    id: urlId,
    click: newClicks,
  });
  return { ErrorOfUpdateClicksError };
};

const linkTagsToCustomer = async (
  upsertData: {
    customerId: string;
    tagId: string;
  }[]
) => {
  const { error: ErrorOfLinkTagsToCustomer } = await supabase
    .from<definitions["customers_tags"]>("customers_tags")
    .upsert(upsertData);

  return { ErrorOfLinkTagsToCustomer };
};

const RouteParam = () => {
  const router = useRouter();
  const { param } = router.query; // urlId
  const { liff } = useLiff();
  const [profile, setProfile] = useState<Profile>();

  useEffect(() => {
    if (!liff) return;
    const fetchProfile = async () => {
      const d = await liff?.getProfile();
      setProfile(d);
    };
    fetchProfile();
  }, [liff]);

  const func = async () => {
    if (!param) return;

    const { urls, ErrorOfFetchUrlsError } = await fetchUrls(param as string);
    if (ErrorOfFetchUrlsError)
      return toast.error(
        `ErrorOfFetchUrlsError: ${ErrorOfFetchUrlsError.message}`
      );
    if (!urls || urls.length === 0)
      return toast.error("データが存在しません。");

    const { ErrorOfUpdateClicksError } = await updateClicks(
      param as string,
      urls[0].click as number
    );
    if (ErrorOfUpdateClicksError)
      return toast.error(
        `ErrorOfUpdateClicksError: ${ErrorOfUpdateClicksError.message}`
      );

    if (!profile) return;

    const upsertData = urls[0].urlsTags.map(({ tags }) => {
      return {
        customerId: profile.userId,
        tagId: tags.id,
      };
    });

    const { ErrorOfLinkTagsToCustomer } = await linkTagsToCustomer(upsertData);
    if (ErrorOfLinkTagsToCustomer)
      return toast.error(
        `ErrorOfLinkTagsToCustomer: ${ErrorOfLinkTagsToCustomer.message}`
      );

    toast.success("SUCCESS");

    window.location.href = "https://line.me/R/ti/p/@316fxwdd";
    // window.location.href = "http://localhost:8000";
  };

  func();

  return <div>画面遷移します......</div>;
};

export default RouteParam;

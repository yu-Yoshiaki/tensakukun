import Image from "next/image";
import toast from "react-hot-toast";
import { Layout } from "src/components";
import { Seo } from "src/components/Seo";
import { supabase } from "src/libs/supabase";
import type { definitions } from "src/types/supabase";
import useSWR from "swr";

const supabaseQuery =
  supabase.from<definitions["owner_infomation"]>("owner_infomation");

const fetchInfo = async () => {
  const { data } = await supabaseQuery
    .select(
      "name,apiChannelId,apiChannelSecret,webhookUrl,basicId,pictureUrl,liffId"
    )
    .single();
  return data;
};

export const SettingSecond = () => {
  const { data: ownerInfo } = useSWR("OwnerInfomation", fetchInfo);

  const handleAlert = () => {
    toast.success("コピーしました。");
  };

  return (
    <Layout header="設定">
      <Seo title="設定" />
      <div className="flex py-8 pl-8">
        <div className="flex w-[700px] flex-col divide-y rounded-md bg-white p-4">
          <div className="relative mb-6 h-24 w-24">
            {ownerInfo?.pictureUrl ? (
              <Image
                src={ownerInfo.pictureUrl}
                alt={""}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>
            )}
          </div>
          <div className="flex items-center gap-4 whitespace-nowrap py-6">
            <p>{"チャネル名"}</p>
            <p className="rounded-md border-gray-300 font-semibold">
              {ownerInfo?.name}
            </p>
          </div>
          <div className="flex items-center gap-4 whitespace-nowrap py-6">
            <p>{"ボットのベーシックID"}</p>
            <p className="rounded-md border-gray-300 p-2 font-semibold">
              {ownerInfo?.basicId}
            </p>
          </div>
          <div className="flex items-center gap-4 whitespace-nowrap py-6">
            <p>{"Webhook URL"}</p>
            <p className="overflow-x-auto rounded-md border-gray-300 p-2 font-semibold">
              {ownerInfo?.webhookUrl}
            </p>
          </div>
          <div className="flex items-center gap-4 whitespace-nowrap py-6">
            <p>{"友達追加URL"}</p>
            <p className="rounded-md border-gray-300 p-2 font-semibold">
              https://line.me/R/ti/p/{ownerInfo?.basicId}
            </p>
            <button onClick={handleAlert}>📑</button>
          </div>
          <div className="flex items-center gap-4 whitespace-nowrap py-6">
            <p>{"apiChannelId"}</p>
            <p className="rounded-md border-gray-300 p-2 font-semibold">
              {ownerInfo?.apiChannelId}
            </p>
          </div>

          <div className="flex items-center gap-4 whitespace-nowrap py-6">
            <p>{"apiChannelSecret"}</p>
            <p className="rounded-md border-gray-300 p-2 font-semibold">
              {ownerInfo?.apiChannelSecret}
            </p>
          </div>
          <div className="flex items-center gap-4 whitespace-nowrap py-6">
            <p>{"LIFF ID"}</p>
            <p className="rounded-md border-gray-300 p-2 font-semibold">
              {ownerInfo?.liffId}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

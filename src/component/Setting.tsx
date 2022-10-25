import toast from "react-hot-toast";
import { Layout } from "src/component";
import { supabase } from "src/lib/supabase";
import { definitions } from "src/type/supabase";
import useSWR from "swr";
import Image from "next/image";

const supabaseQuery =
  supabase.from<definitions["OwnerInfomation"]>("OwnerInfomation");

const fetchInfo = async () => {
  const { data } = await supabaseQuery
    .select(
      "name,apiChannelId,apiChannelSecret,webhookUrl,basicId,pictureUrl,liffId"
    )
    .single();
  return data;
};

export const Setting = () => {
  const { data: ownerInfo } = useSWR("OwnerInfomation", fetchInfo);
  return (
    <Layout header="設定">
      <div className="flex pl-8 py-8">
        <div className="w-[700px] flex flex-col divide-y rounded-md bg-white p-4">
          <div className="relative w-24 h-24 mb-6">
            {ownerInfo?.pictureUrl ? (
              <Image
                src={ownerInfo.pictureUrl}
                alt={""}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
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
          <div className="flex gap-4 whitespace-nowrap items-center py-6">
            <p>{"チャネル名"}</p>
            <p className="rounded-md font-semibold border-gray-300">
              {ownerInfo?.name}
            </p>
          </div>
          <div className="flex gap-4 whitespace-nowrap items-center py-6">
            <p>{"ボットのベーシックID"}</p>
            <p className="rounded-md font-semibold border-gray-300 p-2">
              {ownerInfo?.basicId}
            </p>
          </div>
          <div className="flex gap-4 whitespace-nowrap items-center py-6">
            <p>{"Webhook URL"}</p>
            <p className="rounded-md font-semibold border-gray-300 p-2 overflow-x-auto">
              {ownerInfo?.webhookUrl}
            </p>
          </div>
          <div className="flex gap-4 whitespace-nowrap items-center py-6">
            <p>{"友達追加URL"}</p>
            <p className="rounded-md font-semibold border-gray-300 p-2">
              https://line.me/R/ti/p/{ownerInfo?.basicId}
            </p>
            <button
              onClick={() => {
                toast.success("コピーしました。");
              }}
            >
              📑
            </button>
          </div>
          <div className="flex gap-4 whitespace-nowrap items-center py-6">
            <p>{"apiChannelId"}</p>
            <p className="rounded-md font-semibold border-gray-300 p-2">
              {ownerInfo?.apiChannelId}
            </p>
          </div>

          <div className="flex gap-4 whitespace-nowrap items-center py-6">
            <p>{"apiChannelSecret"}</p>
            <p className="rounded-md font-semibold border-gray-300 p-2">
              {ownerInfo?.apiChannelSecret}
            </p>
          </div>
          <div className="flex gap-4 whitespace-nowrap items-center py-6">
            <p>{"LIFF ID"}</p>
            <p className="rounded-md font-semibold border-gray-300 p-2">
              {ownerInfo?.liffId}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

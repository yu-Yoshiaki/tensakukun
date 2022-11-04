import useSWRImmutable from "swr/immutable";
import axios from "axios";
import { useUserSession } from "app/auth/useUserSession";

const fetcher = async (url: string) => {
  const { data } = await axios.get(url);
  return data;
};

export const NumberOfFriends = () => {
  const { session } = useUserSession();
  const { data } = useSWRImmutable(
    `/api/linesdk/${session?.user?.id}/getFriends`,
    fetcher
  );

  if (!data)
    return (
      <div className="flex gap-8 xl:flex-nowrap flex-wrap">
        <div className="w-[200px] h-[100px] animate-pulse bg-gray-600 rounded-lg "></div>
        <div className="w-[200px] h-[100px] animate-pulse bg-gray-600 rounded-lg "></div>
        <div className="w-[200px] h-[100px] animate-pulse bg-gray-600 rounded-lg "></div>
        <div className="w-[200px] h-[100px] animate-pulse bg-gray-600 rounded-lg "></div>
      </div>
    );

  return (
    <div className="flex gap-8">
      <div className="px-10 py-5 bg-white rounded-lg text-right ">
        <p className="text-4xl font-semibold">{data.followers}</p>
        <p className="text-lg text-gray-500">友達追加された回数</p>
      </div>
      <div className="px-10 py-5 bg-white rounded-lg text-right ">
        <p className="text-4xl font-semibold ">{data.blocks}</p>
        <p className="text-lg text-gray-500">ブロックされた回数</p>
      </div>
    </div>
  );
};

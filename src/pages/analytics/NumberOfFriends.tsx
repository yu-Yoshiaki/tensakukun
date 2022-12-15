import axios from "axios";
import { useUserSession } from "src/pages/auth/useUserSession";
import useSWRImmutable from "swr/immutable";

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
      <div className="flex flex-wrap gap-8 xl:flex-nowrap">
        <div className="h-[100px] w-[200px] animate-pulse rounded-lg bg-gray-600 "></div>
        <div className="h-[100px] w-[200px] animate-pulse rounded-lg bg-gray-600 "></div>
        <div className="h-[100px] w-[200px] animate-pulse rounded-lg bg-gray-600 "></div>
        <div className="h-[100px] w-[200px] animate-pulse rounded-lg bg-gray-600 "></div>
      </div>
    );

  return (
    <div className="flex gap-8">
      <div className="rounded-lg bg-white px-10 py-5 text-right ">
        <p className="text-4xl font-semibold">{data.followers}</p>
        <p className="text-lg text-gray-500">友達追加された回数</p>
      </div>
      <div className="rounded-lg bg-white px-10 py-5 text-right ">
        <p className="text-4xl font-semibold ">{data.blocks}</p>
        <p className="text-lg text-gray-500">ブロックされた回数</p>
      </div>
    </div>
  );
};

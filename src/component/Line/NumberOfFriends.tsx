import axios from "axios";
import dayjs from "dayjs";
import { Loading } from "src/component/Loading";
import { getBotInfo } from "src/pages/api/lib/getBotInfo";
import useSWR from "swr";

const getFriends = async (url: string, date: string, token: string) => {
  const { data } = await axios.post(url, {
    date,
    token,
  });
  return data;
};
const testDate = {
  followers: 120,
  blocks: 23,
};

export const NumberOfFriends = (props: { token: string }) => {
  const date = dayjs().format("YYYYMMDD");

  //   const { data } = useSWR<{
  //     status: "ready" | "unready" | "out_of_service";
  //     followers: number;
  //     targetedReaches?: number;
  //     blocks?: number;
  //   }>([`/api/getNumberOfFriends`, date, props.token], getFriends);

  //   if (!data) return <div>Loading...</div>;

  return (
    <div className="flex gap-8">
      <div className="px-10 py-5 bg-white rounded-lg text-right ">
        <p className="text-4xl font-semibold">{testDate.followers}</p>
        <p className="text-lg text-gray-500">友達追加された回数</p>
      </div>
      <div className="px-10 py-5 bg-white rounded-lg text-right ">
        <p className="text-4xl font-semibold ">{testDate.blocks}</p>
        <p className="text-lg text-gray-500">ブロックされた回数</p>
      </div>
    </div>
  );
};

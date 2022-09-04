import dayjs from "dayjs";
import { SendMessageButton } from "src/pages/dashborad/PushMessaegeForm";
import type { definitions } from "src/type/supabase";

export const Reservation = (props: { reserve: definitions["reserve"][] }) => {
  return (
    <div className="col-span-3 space-y-4 whitespace-nowrap text-gray-800">
      {props.reserve.length !== 0 &&
        props.reserve.map((data) => {
          const date = dayjs(data.date);
          return (
            <div
              className="relative flex h-[140px] items-end rounded-xl bg-sky-200 shadow-md"
              key={data.reserveid}
            >
              <div className="h-[80%] w-full rounded-b-xl bg-white py-3 px-4">
                <div className="flex items-center gap-2">
                  <p className="w-20 text-sm text-gray-600">予約番号</p>
                  <p className="overflow-x-auto pr-2 text-lg font-semibold">
                    {data.reserveid}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="w-16 text-sm text-gray-600">予約日</p>
                  <p className="text-lg">{date.format("M月D日")}</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <p className="w-16 text-sm text-gray-600">予約人数</p>
                    <p className="text-lg">{data.member} 名</p>
                  </div>
                  <SendMessageButton lineId={data.lineid} />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

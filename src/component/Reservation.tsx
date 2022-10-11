import dayjs from "dayjs";
import Link from "next/link";
import type { definitions } from "src/type/supabase";

/**
 * @package
 */

export const Reservation = (props: { reserve: definitions["reserve"][] }) => {
  return (
    <div className="space-y-4 whitespace-nowrap text-gray-800">
      {props.reserve.length !== 0 ? (
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

                  <Link href={`/customer/talk/${data.lineid}`}>
                    <a>
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
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>予約データがありません。</div>
      )}
    </div>
  );
};

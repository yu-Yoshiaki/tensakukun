import dayjs from "dayjs";
import { PushMessageForm } from "src/pages/dashborad/PushMessaegeForm";
import type { definitions } from "src/type/supabase";

export const Reservation = (props: { reserve: definitions["reserve"][] }) => {
  return (
    <div className="col-span-3 py-5 px-3 w-full bg-white rounded-xl">
      <table className="table-auto ">
        <thead>
          <tr className="border-b">
            <th className="py-2 px-4 border-r">予約番号</th>
            <th className="py-2 px-4 border-r">予約日</th>
            <th className="py-2 px-4">人数</th>
            <th className="py-2 px-4 text-blue-600">メッセージ</th>
          </tr>
        </thead>
        <tbody>
          {props.reserve.length !== 0 &&
            props.reserve.map((data) => {
              const date = dayjs(data.date);
              return (
                <tr className="text-center border-b" key={data.reserveid}>
                  <td className="py-2 px-4 border-r">{data.reserveid}</td>
                  <td className="py-2 px-4 border-r">
                    {date.format("M月D日")}
                  </td>
                  <td className="py-2 px-4">{data.member} 名</td>
                  <td>
                    <PushMessageForm userId={data.lineid} />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

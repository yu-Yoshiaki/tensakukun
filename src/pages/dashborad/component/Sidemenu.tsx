import Link from "next/link";

const menu = [
  {
    text: "顧客情報",
    href: "/dashborad/customer",
    bgColor: "bg-green-200",
    active: true,
  },
  {
    text: "予約情報",
    href: "/dashborad/reservation",
    bgColor: "bg-red-200",
    active: true,
  },
  { text: "分析", href: "/", bgColor: "bg-sky-200", active: false },
  { text: "登録情報", href: "/", bgColor: "bg-green-200", active: false },
  {
    text: "設定",
    href: "/dashborad/setting",
    bgColor: "bg-cyan-200",
    active: true,
  },
];

export const Sidemenu = () => {
  return (
    <ul className="flex gap-x-4 overflow-x-auto rounded-xl bg-white p-2 shadow-md md:block md:space-y-2">
      {menu.map((data) => {
        return (
          <li key={data.text}>
            {data.active ? (
              <Link href={data.href}>
                <a
                  className={`block whitespace-nowrap rounded-xl py-3 px-4 text-sm ${data.bgColor} hover:translate-x-1`}
                >
                  {data.text}
                </a>
              </Link>
            ) : (
              <div className="flex justify-between space-x-4 whitespace-nowrap rounded-xl bg-gray-200 py-3 px-4 text-sm md:space-x-0">
                <p>{data.text}</p>
                <p className="text-red-400">予定</p>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

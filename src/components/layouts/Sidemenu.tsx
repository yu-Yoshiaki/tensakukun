import Link from "next/link";

const menu = [
  {
    text: "顧客情報",
    href: "/customer",
    color: "green-200",
    active: true,
    icon: "📄",
  },
  // {
  //   text: "予約情報",
  //   href: "/reservation",
  //   color: "bg-red-200",
  //   active: true,
  // },
  // { text: "分析", href: "/", color: "bg-sky-200", active: false },
  // { text: "登録情報", href: "/", color: "bg-green-200", active: false },
  {
    text: "URL",
    href: "/url",
    color: "yellow-200",
    active: true,
    icon: "🚪",
  },
  {
    text: "メッセージ配信",
    href: "/message",
    color: "lime-200",
    active: true,
    icon: "💬",
  },
  {
    text: "タグ管理",
    href: "/tags",
    color: "pink-200",
    active: true,
    icon: "🔖",
  },
  {
    text: "分析",
    href: "/",
    color: "pink-200",
    active: true,
    icon: "📊",
  },
  {
    text: "設定",
    href: "/setting",
    color: "cyan-200",
    active: true,
    icon: "🔧",
  },
];

/**
 * @package
 */

export const Sidemenu = () => {
  return (
    <ul className="space-y-2">
      {menu.map((data) => {
        return (
          <li
            key={data.text}
            className="py-2 text-lg hover:bg-gray-100 hover:text-xl"
          >
            <Link href={data.href}>
              <a
                className={`flex items-center gap-3 whitespace-nowrap  font-bold text-gray-700`}
              >
                <span className="text-xl text-sky-300">{data.icon}</span>{" "}
                {data.text}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

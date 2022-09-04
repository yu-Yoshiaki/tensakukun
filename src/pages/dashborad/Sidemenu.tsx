const menu = [
  { text: "予約情報", href: "/", bgColor: "bg-red-200" },
  { text: "分析", href: "/", bgColor: "bg-blue-200" },
  { text: "登録情報", href: "/", bgColor: "bg-green-200" },
  { text: "LINEメッセージ", href: "/", bgColor: "bg-yellow-200" },
];

export const Sidemenu = () => {
  return (
    <ul className="flex gap-x-4 overflow-x-auto rounded-xl bg-white p-2 lg:block lg:space-y-2">
      {menu.map((data) => {
        return (
          <li
            key={data.text}
            className={`rounded-xl py-3 px-4 text-sm ${data.bgColor}`}
          >
            <p className="whitespace-nowrap">{data.text}</p>
          </li>
        );
      })}
    </ul>
  );
};

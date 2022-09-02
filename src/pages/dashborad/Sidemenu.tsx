const menu = [
  { text: "予約情報", href: "/" },
  { text: "分析", href: "/" },
  { text: "登録情報", href: "/" },
  { text: "LINEメッセージ", href: "/" },
];

export const Sidemenu = () => {
  return (
    <ul className="p-2 bg-white rounded-xl">
      {menu.map((data) => {
        return <li key={data.text}>{data.text}</li>;
      })}
    </ul>
  );
};

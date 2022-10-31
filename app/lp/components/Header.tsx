import Link from "next/link";

const menu = [
  {
    text: "TOP",
    href: "#top",
  },
  {
    text: "タグ機能",
    href: "#tags",
  },

  {
    text: "流入経路",
    href: "#inflow",
  },
  {
    text: "メッセージ配信",
    href: "#message",
  },
];
export const Header = () => {
  return (
    <header className="flex h-screen w-[250px] flex-col gap-40 border-r bg-white px-4 py-5 md:justify-between md:gap-0">
      <div className="space-y-4">
        <h1 className="text-center font-bold text-gray-700 sm:text-2xl lg:text-3xl">
          <span className="text-6xl">L</span>プラス
        </h1>

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
                    {data.text}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <script src="https://sdk.form.run/js/v2/embed.js"></script>
      <div
        className="formrun-embed"
        data-formrun-form="@arelease-labo-1667108571"
        data-formrun-redirect="true"
      ></div>

      <div className="flex flex-col items-start gap-2">
        <button className="font-semibold">困りごと 🤔</button>
        <button className="font-semibold">利用規約</button>

        <p className="text-xs font-semibold text-gray-500">
          Created by Lプラス
        </p>
      </div>
    </header>
  );
};

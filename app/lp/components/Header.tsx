import Link from "next/link";

const menu = [
  {
    text: "TOP",
    href: "/lp#top",
  },
  {
    text: "タグ機能",
    href: "/lp#tag",
  },
  {
    text: "分析機能",
    href: "/lp#chart",
  },
  {
    text: "使い方",
    href: "/lp#use",
  },
  {
    text: "特徴",
    href: "/lp#feature",
  },
  {
    text: "ご利用方法",
    href: "/lp#how",
  },
  {
    text: "お問合せ",
    href: "/lp#contact",
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
      <div className="flex flex-col items-start gap-2">
        <button className="font-semibold">困りごと 🤔</button>
        <Link href={"/policy?inflow=lp"}>
          <a className="font-semibold">利用規約</a>
        </Link>

        <p className="text-xs font-semibold text-gray-500">
          Created by {process.env.NEXT_PUBLIC_PROJECT_NAME}
        </p>
      </div>
    </header>
  );
};

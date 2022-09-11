/* eslint-disable no-console */
import type { CustomNextPage } from "next";
import Link from "next/link";

const menu = [
  { title: "SIGNUP", path: "/signup" },
  { title: "Dashborad", path: "/dashborad/setting" },
];
const Root: CustomNextPage = () => {
  return (
    <ul className="flex h-screen w-full items-center justify-around">
      {menu.map(({ title, path }) => {
        return (
          <li key={title}>
            <Link href={path}>
              <a className="bg-red-50 p-4">{title}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Root;

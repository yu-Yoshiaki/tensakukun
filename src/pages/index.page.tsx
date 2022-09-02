/* eslint-disable no-console */
import type { CustomNextPage } from "next";
import Link from "next/link";

const menu = [{ title: "SIGNUP", path: "/signup" }];
const Root: CustomNextPage = () => {
  return (
    <ul className="flex justify-around items-center w-full h-screen">
      {menu.map(({ title, path }) => {
        return (
          <li key={title}>
            <Link href={path}>
              <a className="p-4 bg-red-50">{title}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Root;

import { Switch } from "@headlessui/react";
import { HomeIcon } from "@heroicons/react/outline";
import type { VFC } from "react";
import { useState } from "react";
import { NavLink } from "src/component/Button";

const items = [
  { href: "/", label: "", icon: <HomeIcon className="w-6 h-7" /> },
  { href: "/about", label: "私達について" },
  { href: "/article/list", label: "NEWS" },
  { href: "/about", label: "ビジネス" },
  { href: "/about", label: "テック" },
  { href: "/about", label: "フード" },
];

/**
 * @package
 */
export const Header: VFC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const handleChange = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <header>
      <h1 className="py-4 text-4xl font-bold text-center bg-white border-b">
        Title
      </h1>
      <div
        className={`flex justify-between items-center px-3 ${
          isEnabled ? "bg-black text-white" : "bg-white"
        }`}
      >
        <nav className="py-2 ">
          {items.map(({ href, label, icon }) => {
            return (
              <NavLink key={href} href={href} activeClassName="text-blue-500 ">
                <a
                  className={
                    "inline-block py-4 px-6 text-lg　" +
                    `${
                      isEnabled
                        ? "hover:bg-white hover:text-black"
                        : "hover:bg-black hover:text-white"
                    }`
                  }
                >
                  <div className="flex justify-between">
                    <div>{icon ?? ""}</div>
                    <div>{label}</div>
                  </div>
                </a>
              </NavLink>
            );
          })}
        </nav>
        <Switch
          checked={isEnabled}
          onChange={handleChange}
          className={`bg-white ring-2 ring-black hidden md:inline-flex items-center h-5 rounded-full w-11 `}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              isEnabled ? "translate-x-6" : "translate-x-1"
            } inline-block w-4 h-4 transform bg-black rounded-full`}
          />
        </Switch>
      </div>
    </header>
  );
};

import { NavLink } from "src/component/Button";

const items = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
];

/**
 * @package
 */
export const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white">
      <h1 className="text-4xl font-bold text-center">Title</h1>
      <nav className="flex">
        {items.map(({ href, label }) => {
          return (
            <NavLink key={href} href={href} activeClassName="text-blue-500 ">
              <a className="flex justify-between items-center py-4 px-6 text-lg hover:text-white hover:bg-black">
                {label}
              </a>
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
};

import type { ReactNode } from "react";
import { Signin } from "src/component/Signin";
import { useUserSession } from "src/hook/useUserSession";
import { Header } from "./Header";
import { Sidemenu } from "./Sidemenu";

/**
 * @package
 */

export const Layout = (props: { children: ReactNode }) => {
  const { session } = useUserSession();

  return (
    <div className="bg-gray-100 text-gray-700 md:min-h-screen grid grid-cols-[250px,auto]">
      <Header />

      {/* {session ? (
        <main className="space-y-6 md:space-y-0 md:grid-cols-[auto,1fr] md:gap-6 md:grid min-h-[90vh]">
          <Sidemenu />
          <div className="">{props.children}</div>
        </main>
      ) : (
        <main className="">
          <Signin />
        </main>
      )} */}

      <main className="h-screen overflow-auto">
        <div className="overflow-auto ">{props.children}</div>
      </main>
    </div>
  );
};

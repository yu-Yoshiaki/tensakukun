import type { ReactNode } from "react";

import { Header } from "./Header";
import { Sidemenu } from "./Sidemenu";

export const Layout = (props: { children: ReactNode }) => {
  return (
    <div className="space-y-5 bg-gray-100 p-5 text-gray-700 md:min-h-screen md:px-20 lg:px-32 xl:px-40">
      <Header />

      <main className="grid-cols-4 gap-x-4 space-y-4 md:grid md:space-y-0">
        <div>
          <Sidemenu />
        </div>
        <div className="col-span-3">{props.children}</div>
      </main>
    </div>
  );
};

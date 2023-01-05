import type { ReactNode } from "react";
import { Footer } from "src/components/Footer";
import { CustomHead } from "src/components/Head";

import { Header } from "./Header";

/**
 * @package
 */

type Props = {
  children: ReactNode;
};

export const Layout = (props: Props) => {
  return (
    <div className="bg-gray-100 text-gray-700 ">
      <CustomHead />
      <Header />
      <main className="min-h-screen">{props.children}</main>
      <Footer />
    </div>
  );
};

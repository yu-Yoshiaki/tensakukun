import type { CustomLayout } from "next";

import { Footer } from "./Footer";
import { Header } from "./Header";

/**
 * @package
 */

const SideMenu = () => {
  return (
    <div className="space-y-5 bg-white">
      <div className="items-center p-[100px] w-full text-center bg-gray-400">
        広告
      </div>
      <div className="py-[300px] w-full text-center bg-white">Profile</div>
    </div>
  );
};

export const BlogLayout: CustomLayout = (page) => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] gap-5 min-h-screen bg-gray-200">
      <Header />
      <main className="gap-5 px-3 text-center md:grid md:grid-cols-3 md:px-32">
        <div className="col-span-2">{page}</div>
        <SideMenu />
      </main>
      <Footer />
    </div>
  );
};

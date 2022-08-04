import type { CustomLayout } from "next";

import { Footer } from "./Footer";
import { Header } from "./Header";

/**
 * @package
 */

export const BlogLayout: CustomLayout = (page) => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] gap-5 min-h-screen bg-gray-200">
      <Header />
      <main className="gap-5 px-3 text-center md:grid md:grid-cols-3 md:px-32">
        <div className="col-span-2">{page}</div>
      </main>
      <Footer />
    </div>
  );
};

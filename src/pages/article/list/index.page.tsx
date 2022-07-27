import { Tab } from "@headlessui/react";
import type { CustomNextPage } from "next";
import { BlogLayout } from "src/component/BlogLayout";

import { OneGrid } from "./OneGrid";
import { ThreeGrid } from "./ThreeGrid";
import { TwoGrid } from "./TwoGrid";

const Article = [
  { id: 1, articleId: 1, title: "Article 1" },
  { id: 2, articleId: 2, title: "Article 2" },
  { id: 3, articleId: 3, title: "Article 3" },
  // { articleId: 4, title: "Article 4" },
  // { articleId: 5, title: "Article 5" },
  // { articleId: 6, title: "Article 6" },
];

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

const list = [
  { text: "Grid 1", com: <OneGrid article={Article} /> },
  { text: "Grid 2", com: <TwoGrid article={Article} /> },
  { text: "Grid 3", com: <ThreeGrid article={Article} /> },
];
const ArticleList: CustomNextPage = () => {
  return (
    <div className="bg-gray-200">
      <div className="w-full sm:px-0">
        <Tab.Group>
          <Tab.List className="hidden p-1 space-x-1 bg-blue-900/20 rounded-xl md:flex">
            {list.map(({ text }) => {
              return (
                <Tab
                  key={text}
                  className={({ selected }) => {
                    return classNames(
                      "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 ",
                      "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                      selected
                        ? "bg-white shadow"
                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                    );
                  }}
                >
                  {text}
                </Tab>
              );
            })}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {list.map(({ text, com }) => {
              return (
                <Tab.Panel
                  key={text}
                  className={classNames(
                    "",
                    "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
                  )}
                >
                  {com}
                </Tab.Panel>
              );
            })}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

ArticleList.getLayout = BlogLayout;

export default ArticleList;

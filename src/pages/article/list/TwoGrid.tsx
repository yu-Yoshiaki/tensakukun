//@typescript-eslint/naming-convention
import Link from "next/link";

type Article = { id: number; articleId: number; title: string }[];

export const TwoGrid = (props: { article: Article }) => {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-8 bg-gray-200">
      {props.article.map((article) => {
        return (
          <Link href={`/article/list/${article.id}`} key={article.articleId}>
            <a className="pb-10 bg-white hover:shadow-lg">
              <div className="p-10 text-4xl font-bold">{article.title}</div>
              <div className="py-[150px] w-full bg-gray-400">Image</div>
              <div className="py-[50px] w-full">詳細</div>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

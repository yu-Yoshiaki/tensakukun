import Link from "next/link";

type Article = { id: number; articleId: number; title: string }[];

export const OneGrid = (props: { article: Article }) => {
  return (
    <div className="space-y-8 bg-gray-200">
      {props.article.map((article) => {
        return (
          <div key={article.articleId} className="pb-10 bg-white">
            <div className="p-6 text-2xl font-bold md:p-10 md:text-4xl">
              {article.title}
            </div>
            <div className="py-[80px] w-full bg-gray-400 md:py-[150px]">
              Image
            </div>
            <div className="py-[50px] w-full">詳細</div>

            <Link href={`/article/list/${article.id}`}>
              <a className="py-4 px-10 font-bold text-blue-400 hover:text-white hover:bg-blue-400 border-2 border-gray-400 hover:border-blue-400">
                Read More
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

import { useRouter } from "next/router";

type Props = {
  totalCount: number;
  pageSize: number;
  page: number;
  pagenationPath: string;
};
export const PageNation = (props: Props) => {
  const router = useRouter();

  const handleClick = (page: number) => {
    router.push({
      pathname: props.pagenationPath,
      query: { page },
    });
  };

  const range = (start: number, end: number) => {
    return [...Array(end - start + 1)].map((_, index) => start + index);
  };

  return (
    <div className="flex gap-2 justify-center mt-10">
      {range(1, Math.ceil(props.totalCount / props.pageSize)).map(
        (number, index) => {
          return (
            <div key={index}>
              {props.page !== number ? (
                <button
                  onClick={() => handleClick(number)}
                  className={`bg-green-200 rounded-full w-8 h-8 flex items-center justify-center`}
                >
                  {number}
                </button>
              ) : (
                <div
                  key={index}
                  className={`bg-green-300 rounded-full w-8 h-8 flex items-center justify-center`}
                >
                  {number}
                </div>
              )}
            </div>
          );
        }
      )}
    </div>
  );
};

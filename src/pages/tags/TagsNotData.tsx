export const TagsNotData = () => {
  return (
    <div className="flex items-center justify-between whitespace-nowrap px-5 py-2">
      <div className="grid grid-cols-3 grid-rows-2 gap-2">
        <div className="col-span-2 h-4 w-[140px] animate-pulse bg-gray-300 text-[12px] md:text-[1px]"></div>
        <div className="col-span-2 row-start-2 flex h-6 w-[140px] animate-pulse items-center gap-2 bg-gray-300 text-lg font-bold"></div>
      </div>
      <div className="flex auto-cols-min gap-2">
        <div className="flex w-20 animate-pulse items-center justify-center gap-2 rounded-md bg-gray-200 px-3 py-1 text-sm font-semibold"></div>
        <div className="flex h-8 w-20 animate-pulse items-center justify-center gap-2 rounded-md bg-gray-200 px-3 py-1 text-sm font-semibold"></div>
      </div>
    </div>
  );
};

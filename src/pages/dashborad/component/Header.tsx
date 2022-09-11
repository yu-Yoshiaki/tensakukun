export const Header = () => {
  return (
    <header className="flex items-center justify-between rounded-xl bg-white px-3 shadow-md">
      <h1 className="flex h-[80px] items-center px-5 font-bold sm:text-2xl">
        HOTEL-TOKYO-OWNER
      </h1>
      <button className="rounded-xl bg-yellow-200 py-2 px-3 md:py-4 md:px-5">
        ログイン
      </button>
    </header>
  );
};

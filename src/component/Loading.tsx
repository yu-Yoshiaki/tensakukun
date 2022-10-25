export const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="relative ">
        <p className="text-7xl">🤔</p>
        <p className="absolute -top-9 -right-10 text-5xl animate-bounce">💬</p>
      </div>
      読み込み中......
    </div>
  );
};

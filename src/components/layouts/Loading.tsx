export const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="relative ">
        <p className="text-7xl">🤔</p>
        <p className="absolute -top-9 -right-10 animate-bounce text-5xl">💬</p>
      </div>
      読み込み中......
    </div>
  );
};

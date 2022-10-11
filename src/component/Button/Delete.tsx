import { MouseEventHandler } from "react";

type Props = {
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};

export const DeleteButton = (props: Props) => {
  return (
    <button
      type="button"
      onClick={props.handleClick}
      className="px-3 py-2 flex text-sm gap-2 rounded-md font-semibold bg-red-200 hover:bg-red-100 justify-center items-center"
    >
      🗑 <span className="whitespace-nowrap">削除</span>
    </button>
  );
};

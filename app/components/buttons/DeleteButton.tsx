import { MouseEventHandler } from "react";

/**
 * @package
 */

type Props = {
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};

export const DeleteButton = (props: Props) => {
  return (
    <button
      type="button"
      onClick={props.handleClick}
      className="px-3 py-1 flex text-sm gap-2 rounded-md font-semibold bg-red-200 hover:bg-red-100 justify-center items-center w-[100px]"
    >
      <span className="text-lg">🗑</span>削除
    </button>
  );
};

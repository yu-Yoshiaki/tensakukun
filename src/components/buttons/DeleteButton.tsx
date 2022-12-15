import type { MouseEventHandler } from "react";

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
      className="flex w-[100px] items-center justify-center gap-2 rounded-md bg-red-200 px-3 py-1 text-sm font-semibold hover:bg-red-100"
    >
      <span className="text-lg">🗑</span>削除
    </button>
  );
};

import type { MouseEventHandler } from "react";

/**
 * @package
 */

type Props = {
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};

export const EditButton = (props: Props) => {
  return (
    <button
      type="button"
      onClick={props.handleClick}
      className="flex w-[100px] items-center justify-center gap-2 rounded-md bg-gray-200 py-1 text-center text-sm font-semibold hover:bg-gray-100"
    >
      <span className="text-xl">🪛</span>編集
    </button>
  );
};

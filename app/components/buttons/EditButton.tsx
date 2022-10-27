import { MouseEventHandler } from "react";

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
      className="text-center py-1 flex text-sm gap-2 rounded-md font-semibold bg-gray-200 hover:bg-gray-100 justify-center items-center w-[100px]"
    >
      <span className="text-xl">🪛</span>編集
    </button>
  );
};

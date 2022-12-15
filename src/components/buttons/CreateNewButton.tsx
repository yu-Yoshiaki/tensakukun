import { MouseEventHandler } from "react";

/**
 * @package
 */

type Props = {
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};

export const CreateNewButton = (props: Props) => {
  return (
    <button
      type="button"
      onClick={props.handleClick}
      className="px-3 py-1 flex text-sm gap-2 text-white bg-gray-700 rounded-md font-semibold hover:bg-gray-600 justify-center items-center"
    >
      <span className="text-xl">✏</span>新規作成
    </button>
  );
};

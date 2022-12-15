import type { MouseEventHandler } from "react";

/**
 * @package
 */

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const CreateNewButton = (props: Props) => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className="flex items-center justify-center gap-2 rounded-md bg-gray-700 px-3 py-1 text-sm font-semibold text-white hover:bg-gray-600"
    >
      <span className="text-xl">✏</span>新規作成
    </button>
  );
};

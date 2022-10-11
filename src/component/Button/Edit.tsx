import { MouseEventHandler } from "react";

type Props = {
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};

export const EditButton = (props: Props) => {
  return (
    <button
      type="button"
      onClick={props.handleClick}
      className="px-3 py-2 flex text-sm gap-2 rounded-md font-semibold bg-gray-200 hover:bg-gray-100 justify-center items-center"
    >
      🪛 <span className="whitespace-nowrap">編集</span>
    </button>
  );
};

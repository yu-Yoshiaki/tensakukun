/**
 * @package
 */

type Props = {
  name: string;
};
export const Tag = (props: Props) => {
  return (
    <div className="flex items-center whitespace-nowrap rounded-xl bg-blue-50 py-1 px-2 text-center text-sm font-semibold">
      <span className="text-xs">#</span>
      <span className="text-sm">{props.name}</span>
    </div>
  );
};

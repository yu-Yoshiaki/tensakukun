/**
 * @package
 */

type Props = {
  name: string;
};
export const Tag = (props: Props) => {
  return (
    <div className="rounded-xl text-sm text-center whitespace-nowrap font-semibold flex items-center bg-blue-50 py-1 px-2">
      <span className="text-xs">#</span>
      <span className="text-sm">{props.name}</span>
    </div>
  );
};

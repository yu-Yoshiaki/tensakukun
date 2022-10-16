/**
 * @package
 */

type Props = {
  name: string;
};
export const Tag = (props: Props) => {
  return (
    <div className="rounded-md text-sm text-center whitespace-nowrap font-semibold flex items-center gap-1">
      <span className="text-lg">🔖</span> {props.name}
    </div>
  );
};

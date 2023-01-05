import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const Card = (props: Props) => {
  return (
    <div className="mx-auto max-w-[800px] space-y-5 rounded-md bg-white p-5 md:p-10">
      {props.children}
    </div>
  );
};

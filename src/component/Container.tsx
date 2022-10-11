import { ReactNode } from "react";

type Props = {
  title: string;
  explanation: string;
  children: ReactNode;
};

export const Container = (props: Props) => {
  return (
    <div className="relative px-2 py-10 md:p-10 bg-white min-h-[80vh] space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">{props.title}</h2>
        <h3 className="font-semibold">{props.explanation}</h3>
      </div>
      {props.children}
    </div>
  );
};

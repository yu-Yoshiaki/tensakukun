import { ReactNode } from "react";
import toast from "react-hot-toast";

type Props = {
  title: string;
  children: ReactNode;
  CloseButton: () => JSX.Element;
};
export const Modal = (props: Props) => {
  return (
    <div>
      <div className="absolute top-0 bottom-0 inset-0 opacity-70 bg-gray-200 rounded-xl"></div>

      <div className="absolute top-0 inset-0 py-32 flex items-center justify-center">
        <div className="rounded-xl px-10 py-10 bg-white space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">{props.title}</h2>
            <props.CloseButton />
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

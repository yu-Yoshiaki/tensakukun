import { ReactNode } from "react";

export const Modal = (props: { children: ReactNode }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0">
      <div className="bg-gray-800 opacity-20 absolute top-0 left-0 right-0 bottom-0"></div>
      <div className="absolute z-10 flex items-center justify-center top-0 left-0 right-0 bottom-0">
        {props.children}
      </div>
    </div>
  );
};

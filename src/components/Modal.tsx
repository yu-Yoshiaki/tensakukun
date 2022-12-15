import type { ReactNode } from "react";

export const Modal = (props: { children: ReactNode }) => {
  return (
    <div className="fixed inset-0">
      <div className="absolute inset-0 bg-gray-800 opacity-20"></div>
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        {props.children}
      </div>
    </div>
  );
};

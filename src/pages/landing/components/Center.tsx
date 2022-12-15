import type { ReactNode } from "react";

export const Center = (propps: { children: ReactNode }) => {
  return (
    <div className="flex items-center justify-center">{propps.children}</div>
  );
};

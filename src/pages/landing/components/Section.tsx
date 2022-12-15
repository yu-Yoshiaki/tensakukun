import type { ReactNode } from "react";
import { Center } from "src/pages/landing/components/Center";
export const Section = (props: {
  title: string;
  titleTextSize?: string;
  id?: string;
  children: ReactNode;
}) => {
  return (
    <section
      id={props.id}
      className="flex flex-col border-b border-gray-200 px-5 py-20 md:p-20 "
    >
      <Center>
        <h3
          className={`pb-14 text-center font-bold leading-relaxed tracking-wider ${
            props.titleTextSize
              ? "max-w-[700px] " + props.titleTextSize
              : "max-w-[580px] text-xl md:text-3xl "
          }`}
        >
          {props.title}
        </h3>
      </Center>
      <div>{props.children}</div>
    </section>
  );
};

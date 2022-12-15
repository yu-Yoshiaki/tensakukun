import { Center } from "src/lp/components/Center";
import { ReactNode } from "react";

export const Section = (props: {
  title: string;
  titleTextSize?: string;
  id?: string;
  children: ReactNode;
}) => {
  return (
    <section
      id={props.id}
      className="px-5 py-20 md:p-20 border-b border-gray-200 flex flex-col "
    >
      <Center>
        <h3
          className={`leading-relaxed tracking-wider font-bold pb-14 text-center ${
            props.titleTextSize
              ? "max-w-[700px] " + props.titleTextSize
              : "text-xl md:text-3xl max-w-[580px] "
          }`}
        >
          {props.title}
        </h3>
      </Center>
      <div>{props.children}</div>
    </section>
  );
};

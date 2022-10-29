import { Center } from "app/lp/components/Center";
import { ReactNode } from "react";

export const Section = (props: {
  title: string;
  titleTextSize?: string;
  children: ReactNode;
}) => {
  return (
    <section className="p-20 border-t border-gray-200 flex flex-col ">
      <Center>
        <h3
          className={`leading-relaxed tracking-wider font-bold pb-14 text-center ${
            props.titleTextSize
              ? "w-[700px] " + props.titleTextSize
              : "text-3xl w-[580px]"
          }`}
        >
          {props.title}
        </h3>
      </Center>
      <div>{props.children}</div>
    </section>
  );
};

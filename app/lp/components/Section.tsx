import { Center } from "app/lp/components/Center";
import { ReactNode } from "react";

export const Section = (props: {
  title: string;
  titleTextSize?: string;
  children: ReactNode;
}) => {
  return (
    <section className="p-20 border-b border-gray-200 flex flex-col">
      <Center>
        <h3
          className={`font-bold pb-20 text-center w-[580px] ${
            props.titleTextSize ?? "text-3xl"
          }`}
        >
          {props.title}
        </h3>
      </Center>
      <div>{props.children}</div>
    </section>
  );
};

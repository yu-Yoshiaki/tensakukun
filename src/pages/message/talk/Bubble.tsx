import { ImageFill } from "src/component";

type Props = {
  imageSrc?: string;
  imageArt?: string;
  text?: string;
  time: string;
};

export const Bubble = (props: Props) => {
  return (
    <div
      className={`${
        props.imageSrc ? "flex" : "flex flex-row-reverse"
      } items-center gap-2`}
    >
      {props.imageSrc && (
        <ImageFill
          src={props.imageSrc}
          alt={props.imageArt as string}
          width="w-10"
          height="h-10"
          objectFit="contain"
          className="rounded-full"
        />
      )}
      <div className="max-w-[200px]">
        <p
          className={`rounded-xl p-2 text-sm ${
            props.imageSrc ? "bg-white" : "bg-green-200"
          }`}
        >
          {props.text}
        </p>
      </div>
      <p className="text-xs text-gray-500">{props.time}</p>
    </div>
  );
};

import Image from "next/image";

type Props = {
  className?: string;
  width: string;
  height: string;
  src: string;
  alt: string;
  objectFit: "contain" | "cover";
};
export const ImageFill = (props: Props) => {
  return (
    <div className={`relative ${props.width} ${props.height}`}>
      <Image
        src={props.src}
        alt={props.alt}
        layout={"fill"}
        objectFit={props.objectFit}
        className={props.className}
      />
    </div>
  );
};

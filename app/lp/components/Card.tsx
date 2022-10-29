import Image from "next/image";

export const Card = (props: { header: string; body: string; img: string }) => {
  return (
    <div className="w-[450px] space-y-6">
      <div className="relative w-[420px] h-[220px] rounded-xl">
        <Image
          src={props.img}
          alt=""
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <p className="text-xl font-bold">{props.header}</p>
      <p className="text-sm">{props.body}</p>
    </div>
  );
};

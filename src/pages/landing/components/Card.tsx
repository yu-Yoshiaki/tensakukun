import Image from "next/image";

export const Card = (props: { header: string; body: string; img: string }) => {
  return (
    <div className="space-y-6 md:w-[300px]">
      <div className="rounded-md">
        <Image src={props.img} alt="" width={1280} height={670} />
      </div>
      <p className="text-xl font-bold">{props.header}</p>
      <p className="text-sm tracking-normal">{props.body}</p>
    </div>
  );
};

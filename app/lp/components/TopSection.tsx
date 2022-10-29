import Image from "next/image";

export const TopSection = () => {
  return (
    <div id="top" className="relative h-[85vh] w-full">
      <Image src={"/トップ画.png"} alt="" layout="fill" objectFit="contain" />
    </div>
  );
};

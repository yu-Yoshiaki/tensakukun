import dynamic from "next/dynamic";

const Liff = dynamic<Record<never, never>>(
  async () => {
    const module = await import("src/pages/liff");
    return module.Liff;
  },
  { ssr: false }
);
const liffPage = () => {
  return (
    <div>
      <Liff />
    </div>
  );
};

export default liffPage;

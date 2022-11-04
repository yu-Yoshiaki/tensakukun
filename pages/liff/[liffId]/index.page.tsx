import dynamic from "next/dynamic";

const LiffPage = dynamic<Record<never, never>>(
  async () => {
    const module = await import("app/liff/page");
    return module.LiffPage;
  },
  { ssr: false }
);
const liffpage = () => {
  return (
    <div>
      <LiffPage />
    </div>
  );
};

export default liffpage;

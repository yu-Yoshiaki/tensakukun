import dynamic from "next/dynamic";

const InflowRoutePage = dynamic<Record<never, never>>(
  async () => {
    const module = await import("src/pages/liff/inflow/page");
    return module.InflowRoutePage;
  },
  { ssr: false }
);
const inflow = () => {
  return (
    <div>
      <InflowRoutePage />
    </div>
  );
};

export default inflow;

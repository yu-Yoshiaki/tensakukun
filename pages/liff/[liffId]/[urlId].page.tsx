import dynamic from "next/dynamic";

const InflowRoutePage = dynamic<Record<never, never>>(
  async () => {
    const module = await import("app/liff/inflow/page");
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

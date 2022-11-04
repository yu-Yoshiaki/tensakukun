import { Loading } from "app/components/layouts/Loading";
import dynamic from "next/dynamic";

const LiffInitComponent = dynamic(
  () =>
    import("./LiffInitComponent").then((module) => module.LiffInitComponent),
  { ssr: false }
);
export const LiffPage = () => {
  return (
    <LiffInitComponent>
      <div className="flex h-screen items-center justify-center bg-gray-200">
        <Loading />
      </div>
    </LiffInitComponent>
  );
};

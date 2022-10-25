import type { CustomNextPage } from "next";
import { Loading } from "src/component/Loading";
import { useLiff } from "src/hook/useLiff";

const Index: CustomNextPage = () => {
  useLiff();

  return (
    <div className="flex h-screen items-center justify-center bg-gray-200">
      <Loading />
    </div>
  );
};

export default Index;

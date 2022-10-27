import { useLiff } from "app/liff/useLiff";
import { Loading } from "app/components/layouts/Loading";

export const LiffPage = () => {
  useLiff();

  return (
    <div className="flex h-screen items-center justify-center bg-gray-200">
      <Loading />
    </div>
  );
};

import { Loading } from "src/components/layouts/Loading";
import { useLiff } from "src/pages/liff/useLiff";
import { useRouter } from "next/router";

export const Liff = () => {
  const router = useRouter();
  const { liffId } = router.query;
  useLiff(liffId as string);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-200">
      <Loading />
    </div>
  );
};

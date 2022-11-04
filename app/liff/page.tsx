import { Loading } from "app/components/layouts/Loading";
import { useLiff } from "app/liff/useLiff";
import { useRouter } from "next/router";

export const LiffPage = () => {
  const router = useRouter();
  const { liffId } = router.query;
  useLiff(liffId as string);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-200">
      <Loading />
    </div>
  );
};

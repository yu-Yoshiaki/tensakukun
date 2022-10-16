import type { CustomNextPage } from "next";
import { useLiff } from "src/hook/useLiff";

const Index: CustomNextPage = () => {
  useLiff();
  return <div>処理中......</div>;
};

export default Index;

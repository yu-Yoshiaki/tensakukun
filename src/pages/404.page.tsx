import type { CustomNextPage } from "next";
import { Layout } from "src/component";

const ErrorPage: CustomNextPage = () => {
  return <Layout>404: お探しのページが存在しません。</Layout>;
};

export default ErrorPage;

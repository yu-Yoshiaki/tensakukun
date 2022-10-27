import { Layout } from "app/components";
import type { CustomNextPage } from "next";

const ErrorPage: CustomNextPage = () => {
  return (
    <Layout header="404: お探しのページが存在しません。">
      <div></div>
    </Layout>
  );
};

export default ErrorPage;

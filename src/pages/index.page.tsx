import type { CustomNextPage } from "next";
import { BlogLayout } from "src/component/BlogLayout";

const Root: CustomNextPage = () => {
  return (
    <div>
      <h2>Root</h2>
      <button className="p-2">Click me!　更新</button>
    </div>
  );
};

Root.getLayout = BlogLayout;

export default Root;

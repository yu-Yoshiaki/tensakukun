import "src/styles/index.css";

import type { CustomAppProps } from "next/app";
import { memo } from "react";
import { Toaster } from "react-hot-toast";

const App = (props: CustomAppProps) => {
  return (
    <div>
      <Toaster />
      <main>
        <props.Component {...props.pageProps} />
      </main>
    </div>
  );
};

export default memo(App);

import "app/styles/index.css";

import RootLayout from "app/layout";
import type { CustomAppProps } from "next/app";
import { memo } from "react";

const App = (props: CustomAppProps) => {
  return (
    <RootLayout>
      <props.Component {...props.pageProps} />
    </RootLayout>
  );
};

export default memo(App);

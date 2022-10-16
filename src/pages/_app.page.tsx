import "../style/index.css";

import type { CustomAppProps } from "next/app";
import Head from "next/head";
import { memo } from "react";
import { Toaster } from "react-hot-toast";

const App = (props: CustomAppProps) => {
  return (
    <>
      <Head>
        <title>Lプラス デモ</title>
      </Head>
      <Toaster />
      <props.Component {...props.pageProps} />
    </>
  );
};

export default memo(App);

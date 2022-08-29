/* eslint-disable no-console */
import "tailwindcss/tailwind.css";

import type { CustomAppProps } from "next/app";
import Head from "next/head";
import { memo } from "react";
import { Authenticated } from "src/component/LiffInit";

const App = (props: CustomAppProps) => {
  const getLayout =
    props.Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <>
      <Head>
        <title>ポケットonLINE</title>
      </Head>
      <Authenticated />
      {getLayout(<props.Component {...props.pageProps} />)}
    </>
  );
};

export default memo(App);

import Head from "next/head";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

const RootLayout = (props: { children: ReactNode }) => {
  return (
    <html lang="en">
      <Head>
        <title>Lプラス デモ</title>
      </Head>
      <Toaster />
      <body>{props.children}</body>
    </html>
  );
};

export default RootLayout;

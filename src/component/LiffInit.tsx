/* eslint-disable react/jsx-handler-names */
/* eslint-disable no-console */

/* 
他のコンポーネんとで Liff 操作をする場合、このコンポーネントの初期化が完了しないとエラーになる。
→ useEffectでは、初期化より先に発火するのでエラーとなる。
*/

import { LiffMockPlugin } from "@line/liff-mock";
import Script from "next/script";

const liffId = process.env.NEXT_PUBLIC_LIFF_ID as string;

export const Authenticated = () => {
  const liffInit = async () => {
    try {
      // if (process.env.NODE_ENV === "development") {
      //   liff.use(new LiffMockPlugin());
      //   await liff.init({ liffId, mock: true });
      //   liff.login();
      // } else {
      await liff.init({ liffId });
      // }
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <Script
      src="https://static.line-scdn.net/liff/edge/2/sdk.js"
      onLoad={() => {
        return liffInit();
      }}
    />
  );
};

import type { Liff } from "@line/liff";
import type { ExtendedInit, LiffMockApi } from "@line/liff-mock";

declare module "@line/liff" {
  interface Liff {
    init: ExtendedInit;
    $mock: LiffMockApi;
  }
}

declare global {
  const liff: Liff;
}

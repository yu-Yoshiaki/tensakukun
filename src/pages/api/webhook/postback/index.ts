/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Message } from "@line/bot-sdk";
import { configClient } from "src/libs/configClient";

export const postbackAction = async (id: string, event: any) => {
  const replyMessageList: Message[] = [];
  const client = await configClient(id);

  if (replyMessageList.length === 0) {
    return client?.replyMessage(event.replyToken, {
      type: "text",
      text: "何かお困りごとはございませんか？",
    });
  }
  return client?.replyMessage(event.replyToken, replyMessageList);
};

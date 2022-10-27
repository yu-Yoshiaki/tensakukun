/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Message } from "@line/bot-sdk";
import type { MessageEvent } from "@line/bot-sdk";
import { configClient } from "app/libs/configClient";

const messageList: Message[] = [];

export const messageAction = async (id: string, data: MessageEvent) => {
  const client = await configClient(id);

  if (data.message.type === "text") {
    const text = data.message.text;
    if (text === "テスト") {
      messageList.push({
        type: "text",
        text: "押して",
        quickReply: {
          items: [
            {
              type: "action",
              action: {
                type: "uri",
                uri: "https://liff.line.me/1657424528-doXMQvzK/signup",
                label: "url",
              },
            },
          ],
        },
      });
    }
    if (text === "テスト") {
      messageList.push({
        type: "text",
        text: "押して",
        quickReply: {
          items: [
            {
              type: "action",
              action: {
                type: "uri",
                uri: "https://liff.line.me/1657424528-doXMQvzK/signup",
                label: "url",
              },
            },
          ],
        },
      });
    }
    if (text === "テスト") {
      messageList.push({
        type: "text",
        text: "押して",
        quickReply: {
          items: [
            {
              type: "action",
              action: {
                type: "uri",
                uri: "https://liff.line.me/1657424528-doXMQvzK/signup",
                label: "url",
              },
            },
          ],
        },
      });
    } else if (text === "アイウエオ" || text === "あいうえお") {
      messageList.push({
        type: "text",
        text: "アイウエオ",
      });
    } else {
      messageList.push({ type: "text", text: "Why" });
    }
  }

  return client?.replyMessage(data.replyToken, messageList);
};

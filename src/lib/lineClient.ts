const line = require("@line/bot-sdk");

import type { Client } from "@line/bot-sdk";

const channelAccessToken = process.env.CHANNEL_ACCESS_TOKEN as string;
const channelSecret = process.env.CHANNEL_SECRET as string;

export const lineClient: Client = new line.Client({
  channelAccessToken,
  channelSecret,
});

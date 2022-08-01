import { Client } from "@line/bot-sdk";

const config = {
  channelAccessToken: process.env.ACCESS_TOKEN as string,
  channelSecret: process.env.CHANNEL_SECRET as string,
};

export const client = new Client(config);

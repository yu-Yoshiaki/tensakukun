import type { NextApiRequest, NextApiResponse } from "next";

const line = require("@line/bot-sdk");

const client = new line.Client({
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN as string,
});

const sendPushMessage = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId, message } = req.body;
  if (req.method === "POST") {
    try {
      client
        .pushMessage(userId, {
          type: "text",
          text: message,
        })
        .then(() => {
          res.status(200).json({ status: "Success" });
        })
        .catch((err: any) => {
          res.status(200).json(err.message);
        });
    } catch (err: any) {
      res.status(500).json(err.message);
    }
  }
};

export default sendPushMessage;

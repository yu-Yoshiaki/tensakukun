import type { WebhookEvent } from "@line/bot-sdk";
import type { NextApiRequest, NextApiResponse } from "next";
import { followAction } from "./follow";
import { messageAction } from "./message";

export const BotPage = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { id } = req.query;

    Promise.all(
      req.body.events.map((data: WebhookEvent) => {
        if (data.type === "message") {
          return messageAction(id as string, data);
        }
        if (data.type === "follow") {
          return followAction(id as string, data);
        }
        // if (data.type === "unfollow") {
        //   return unfollowAction(data);
        // }
        // if (data.type === "postback") {
        //   return postbackAction(data);
        // }

        return;
      })
    ).then(() => {
      res.status(200);
    });
  } else {
    res.status(200);
  }
};

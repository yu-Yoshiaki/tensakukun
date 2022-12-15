import type { NextApiRequest, NextApiResponse } from "next";
import { createAccessToken } from "src/libs/createAccessToken";
import type { LiffAppData } from "src/libs/createLiffApp";
import { createLiffApp } from "src/libs/createLiffApp";
import { getBotInfo } from "src/libs/getBotInfo";
import { setWebhookUrl } from "src/libs/setWebhookUrl";
import { supabaseServer } from "src/libs/supabaseServer";
import { updateLiffApp } from "src/libs/updateLiffApp";
import type { definitions } from "src/types/supabase";

const createConfig = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { ownerId } = req.query;

      const {
        apiChannelId,
        apiChannelSecret,
        liffChannelId,
        liffChannelSecret,
      } = req.body;

      const apiChannelAccessToken = await createAccessToken(
        apiChannelId,
        apiChannelSecret
      );
      const liffAccessToken = await createAccessToken(
        liffChannelId,
        liffChannelSecret
      );

      await setWebhookUrl(ownerId as string, apiChannelAccessToken);

      const botInfo = await getBotInfo(apiChannelAccessToken);

      const liffAppData: LiffAppData = {
        view: {
          type: "full",
          url: "https://lplus.vercel.app/liff",
        },
        description: "Test Liff App",
        permanentLinkPattern: "concat",
        scope: ["profile", "chat_message.write"],
        botPrompt: "none",
      };

      const { liffId } = await createLiffApp(liffAccessToken, liffAppData);

      await updateLiffApp(liffId, liffAccessToken, {
        view: { url: `https://lplus.vercel.app/liff/${liffId}` },
      });

      const ownerInfo = {
        id: ownerId as string,
        name: botInfo.displayName,
        apiChannelId,
        apiChannelSecret,
        apiChannelAccessToken,
        liffChannelId,
        liffChannelSecret,
        liffAccessToken,
        liffId,
        webhookUrl: `https://lplus.vercel.app/api/webhook/${ownerId as string}`,
        basicId: botInfo.basicId,
        pictureUrl: botInfo.pictureUrl,
        firstLogin: false,
      };

      const { error } = await supabaseServer
        .from<definitions["owner_infomation"]>("owner_infomation")
        .insert(ownerInfo);
      if (error) {
        throw new Error(`Supabase Insert Error: ${error.message}`);
      }
      res.status(200).json("success");
    } catch (error: any) {
      res.status(500).json(error.message);
    }
  }
};

export default createConfig;

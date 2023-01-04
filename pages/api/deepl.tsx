import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const API_KEY = process.env.DEEPL_ACCESS_KEY as string;
const url = "https://api-free.deepl.com/v2/translate";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const text = req.body.data;

    const params = {
      auth_key: API_KEY,
      text,
      target_lang: "EN",
    };

    const { data } = await axios.get(url, {
      params,
    });

    const result = data.translations[0].text;
    res.status(200).json({ translation: result });
  } catch (err: any) {
    res.status(200).json({ translation: "error" });
  }
}

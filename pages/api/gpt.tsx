import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-mNhGs3jBT3ZSV6XkPCGWXaOQ",
  apiKey: process.env.OPENAI_API_KEY,
});

const gpt = async (req: NextApiRequest, res: NextApiResponse) => {
  const openai = new OpenAIApi(configuration);
  const prompt = `単語ごとに解説して ${req.body.data}`;
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 200,
      temperature: 0,
    });

    res.status(200).json({ explain: response.data.choices[0].text });
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};

export default gpt;

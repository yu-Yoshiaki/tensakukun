import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Layout } from "src/components";
import { Card } from "src/components/Card";

const theme = [
  {
    ja: "おすすめの映画について、そのタイトルと内容、好きなポイントを教えて",
    en: "Tell us about the movie you recommend, its title and content, and what you like about it.",
  },
  {
    ja: "今日の出来事を一つ教えて",
    en: "Tell me one thing that happened today.",
  },
  {
    ja: "今度の旅行はどこいきたい？　魅力的な場所を教えて",
    en: "Where do you want to go on your next trip?　Tell us about some fascinating places.",
  },
];

const getRandam = (n: number, m: number) => {
  return Math.floor(Math.random() * (m + 1 - n)) + n;
};

const Translation = () => {
  const [answer, setAnswer] = useState<string>();
  const [translation, setTranslation] = useState<string | null>(null);
  const [explain, setExplain] = useState<string | null>(null);

  const num = useMemo(() => {
    return getRandam(0, 2);
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!answer) return;
    const { data } = await axios.post("/api/deepl", {
      data: answer,
    });

    setTranslation(data.translation);

    const { data: gpt } = await axios.post("/api/gpt", {
      data: data.translation,
    });
    setExplain(gpt.explain);
  }, [answer]);

  const handleChange = useCallback((e) => {
    setAnswer(e.target.value);
  }, []);

  return (
    <div className="space-y-10">
      <Card>
        <h3 className="rounded-md bg-yellow-100 p-1">
          まずは、日本語で書いてみよう😃
        </h3>
        <p className="text-lg font-bold">
          テーマ
          <br />
          <span className="text-2xl font-bold">{theme[num].ja}</span>
        </p>

        <textarea
          onChange={handleChange}
          rows={4}
          className="w-full border"
          placeholder="お題に沿って回答してください。"
        />
      </Card>
      <Card>
        <h3 className="rounded-md bg-lime-100 p-1">
          次に、英語で書いてみよう💡
        </h3>
        <p className="text-lg font-bold">
          テーマ
          <br />
          <span className="text-2xl font-bold">{theme[num].en}</span>
        </p>

        <textarea
          rows={4}
          className="w-full border"
          placeholder="お題に沿って回答してください。"
        />
      </Card>
      <button
        onClick={handleSubmit}
        disabled={!answer}
        className={`mx-auto block w-44 rounded-md ${
          answer
            ? "bg-blue-500 text-white"
            : "cursor-not-allowed bg-gray-300 text-gray-500"
        } p-3 font-semibold`}
      >
        お手本を見る
      </button>
      {translation && (
        <Card>
          <h3 className="text-xl font-bold">お手本</h3>

          <p className="min-h-[100px] w-full border bg-lime-50 rounded-md p-2">
            {translation}
          </p>
        </Card>
      )}
      {translation && (
        <Card>
          <h3 className="text-xl font-bold">単語、文言の解説</h3>

          <p className="min-h-[100px] w-full border bg-lime-50 rounded-md p-2">
            {explain ?? "読み込み中..."}
          </p>
        </Card>
      )}
    </div>
  );
};

const Description = () => {
  return (
    <section id="概要">
      <Card>
        <h3 className="border-b pb-2 text-xl font-bold">添削くんとは？</h3>
        <p className="text-lg">
          <span className="font-semibold">
            英語で自分の意見を言えるようになるサービス。
          </span>
          <br />
          <span className="font-semibold">DeepL</span>
          という翻訳AIで動いていて、注目ポイントは、リアルの会話と遜色ない
          <span className="font-semibold">「自然さ」</span>にあります。
        </p>
      </Card>
    </section>
  );
};

const Howto = () => {
  return (
    <section id="使い方">
      <Card>
        <h3 className="border-b pb-2 text-xl font-bold">使い方</h3>
        <p className="text-lg">
          かんたん <span className="font-semibold text-blue-500">3</span>{" "}
          ステップ
        </p>
        <li className="font-semibold">お題に沿って日本語で回答する</li>
        <li className="font-semibold">回答を自分で考えて英語で書いてみる</li>
        <li className="font-semibold">答えを確認し、本場の言い回しを覚える</li>
      </Card>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="登録フォーム">
      <Card>
        <iframe
          style={{ border: "none", width: "100%" }}
          height="589px"
          src="https://www.noway-form.com/ja/f/573495e4-5f9d-49bf-9e88-4695d2ce4b80/embed"
        />
      </Card>
    </section>
  );
};

export const Index = () => {
  return (
    <Layout>
      <div className="space-y-10 py-20 px-5">
        <h2 className="mb-20 text-center text-3xl font-semibold">
          AIを使ってかんたんに英語力が身に付く。
        </h2>
        <Translation />
        <Description />
        <Howto />
        <Contact />
      </div>
    </Layout>
  );
};

import axios from "axios";
import { useCallback, useState } from "react";
import { Layout } from "src/components";

const theme = {
  ja: "おすすめの映画について、そのタイトルと内容、好きなポイントを教えて",
  en: "Tell us about the movie you recommend, its title and content, and what you like about it.",
};

const IndexPage = () => {
  const [answer, setAnswer] = useState("");
  const [translation, setTranslation] = useState<string | null>(null);

  const handleSubmit = useCallback(async () => {
    const { data } = await axios.post("/api/deepl", {
      data: answer,
    });
    setTranslation(data.translation);
  }, [answer]);

  const handleChange = useCallback((e) => {
    setAnswer(e.target.value);
  }, []);

  return (
    <Layout>
      <div className="space-y-10 py-20">
        <p className="text-center text-3xl font-semibold">
          AIを使ってかんたんに英語力が身に付く。
        </p>
        <div className="mx-auto max-w-[800px] space-y-5 rounded-md bg-white p-10">
          <p className="rounded-md bg-yellow-100 p-1">
            まずは、日本語で書いてみよう😃
          </p>
          <p className="text-lg font-bold">
            テーマ
            <br />
            <span className="text-2xl font-bold">{theme.ja}</span>
          </p>

          <textarea
            onChange={handleChange}
            rows={4}
            className="w-full border"
            placeholder="お題に沿って回答してください。"
          />
        </div>
        <div className="mx-auto max-w-[800px] space-y-5 rounded-md bg-white p-10">
          <p className="rounded-md bg-lime-100 p-1">
            次に、英語で書いてみよう💡
          </p>
          <p className="text-lg font-bold">
            テーマ
            <br />
            <span className="text-2xl font-bold">{theme.en}</span>
          </p>

          <textarea
            rows={4}
            className="w-full border"
            placeholder="お題に沿って回答してください。"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="mx-auto block w-44 rounded-md bg-blue-500 p-3 font-semibold text-white"
        >
          答え合わせをする
        </button>
        {translation && (
          <div className="mx-auto max-w-[800px] space-y-5 rounded-md bg-white p-10">
            <span>翻訳</span>

            <p className="min-h-[100px] w-full border bg-lime-50">
              {translation}
            </p>
          </div>
        )}
        <section
          id="使い方"
          className="mx-auto max-w-[800px] space-y-5 rounded-md bg-white p-10"
        >
          <h2 className="border-b pb-2 text-xl font-bold">使い方</h2>
          <p className="text-lg">
            かんたん <span className="font-semibold text-blue-500">3</span>{" "}
            ステップ
          </p>
          <li className="font-semibold">お題に沿って日本語で回答する</li>
          <li className="font-semibold">回答を自分で考えて英語で書いてみる</li>
          <li className="font-semibold">
            答えを確認し、本場の言い回しを覚える
          </li>
        </section>
        <section
          id="使い方"
          className="mx-auto max-w-[800px] space-y-5 rounded-md bg-white p-10"
        >
          <iframe
            style={{ border: "none", width: "100%" }}
            height="589px"
            src="https://www.noway-form.com/ja/f/573495e4-5f9d-49bf-9e88-4695d2ce4b80/embed"
          />
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;

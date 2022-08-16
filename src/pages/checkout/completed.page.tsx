import type { CustomNextPage } from "next";

const CompleteCheckout: CustomNextPage = () => {
  const handleBackTalk = async () => {
    await liff.sendMessages([
      {
        type: "text",
        text: "ご購入ありがとうございます。",
      },
    ]);
    window.location.href = process.env.LINE_FRIEND_URL as string;
  };
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <h1 className="text-3xl">ご購入ありがとうございます。</h1>
      <h2 className="flex text-xl">
        トーク画面でメッセージ「購入履歴」と送信すると確認できます。
        <button onClick={handleBackTalk}>トーク画面に戻る。</button>
      </h2>
    </div>
  );
};

export default CompleteCheckout;

import type { CustomNextPage } from "next";

const CompleteCheckout: CustomNextPage = () => {
  const handleBackTalk = async () => {
    await liff.sendMessages([
      {
        type: "text",
        text: "ご購入ありがとうございます。",
      },
    ]);
    window.location.href = process.env.NEXT_PUBLIC_LINE_FRIEND_URL as string;
  };
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div>
        <h1 className="text-3xl font-bold">ご購入ありがとうございます。</h1>
        <h2 className="text-xl md:flex">
          <p> トーク画面でメッセージ「購入履歴」と送信すると確認できます。</p>
          <button className="font-bold text-blue-300" onClick={handleBackTalk}>
            トーク画面に戻る。
          </button>
        </h2>
      </div>
    </div>
  );
};

export default CompleteCheckout;

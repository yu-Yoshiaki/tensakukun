import type { QuickReply, TextMessage } from "@line/bot-sdk";

const quickReply: QuickReply = {
  items: [
    {
      type: "action",
      action: {
        label: "",
        type: "message",
        text: "",
      },
    },
  ],
};
const testText: TextMessage = {
  type: "text",
  text: "test",
  quickReply,
};

export const Text = () => {
  return (
    <div>
      <div className="rounded-3xl border-none bg-green-300 p-2">
        {testText.text}
      </div>
      <div className="rounded-3xl border-none bg-green-300 p-2">
        {testText.text}
      </div>
    </div>
  );
};

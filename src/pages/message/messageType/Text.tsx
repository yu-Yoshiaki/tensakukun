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
// import type { QuickReply, QuickReplyItem, TextMessage } from "@line/bot-sdk";

// export const quickReply: (items: QuickReplyItem) => QuickReply = (items) => {
//   return {
//     items: [
//       {
//         type: "action",
//         action: {
//           type: "camera",
//         },
//       },
//     ],
//   };
// };

// export const textMessage: (
//   text: string,
//   quickReply?: QuickReply
// ) => TextMessage = (text, quickReply) => {
//   if (quickReply) return { type: "text", text, quickReply };
//   return { type: "text", text };
// };

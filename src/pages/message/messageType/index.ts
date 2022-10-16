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

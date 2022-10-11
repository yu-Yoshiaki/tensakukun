import { Message } from "@line/bot-sdk";
import { useState } from "react";
import { UseFormGetValues, UseFormSetValue } from "react-hook-form";
import { InserData } from "src/pages/message/create.page";

/**
 * @package
 */

const Input = (props: { setMessages: (message: Message) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<string>("");

  const handleSetMessage = () => {
    props.setMessages({ type: "text", text: value });
    setIsOpen(false);
  };

  return (
    <div className="text-sm">
      {isOpen ? (
        <div className="flex flex-col items-start gap-2">
          <textarea
            className="bg-green-300 font-bold rounded-3xl h-8 border-none max-w-[70%]"
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={handleSetMessage}>セット</button>
        </div>
      ) : (
        <button
          className="rounded-full bg-blue-500 text-white h-8 w-8"
          onClick={() => setIsOpen(true)}
        >
          +
        </button>
      )}
    </div>
  );
};

export const Preview = (props: { setValue: UseFormSetValue<InserData> }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSetMessages = (newMessage: Message) => {
    props.setValue("messages", [...messages, newMessage]);
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="h-full bg-sky-300 p-5 space-y-4">
      <p className="p-2 bg-yellow-200">
        ※ プレビューは実際の画面と異なる場合があります。
      </p>

      <div>
        {messages.map((message, index) => {
          if (message.type === "text") {
            return (
              <div
                key={index}
                className="bg-green-300 font-bold rounded-3xl p-2 border-none w-32"
              >
                {message.text}
              </div>
            );
          }
        })}
      </div>

      <Input setMessages={handleSetMessages} />
    </div>
  );
};

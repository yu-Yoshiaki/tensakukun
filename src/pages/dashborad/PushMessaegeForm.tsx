import axios from "axios";
import { useState } from "react";
import type { definitions } from "src/type/supabase";

type Props = {
  lineId: definitions["reserve"]["lineid"];
  onClose: () => void;
};

const PushMessageForm = (props: Props) => {
  const [message, setMessage] = useState<string>();

  const handleSet = (event: any) => {
    setMessage(event.target.value);
  };

  const handleSend = async () => {
    if (message === undefined) return;

    const { data } = await axios.post<{ status: string }>(
      "/api/sendPushMessage",
      {
        userId: props.lineId,
        message,
      }
    );

    alert(`メッセージ送信: ${data.status}`);
  };
  return (
    <form className="absolute inset-0 animate-scale-up-right rounded-xl bg-red-200">
      <div className="absolute inset-x-0 bottom-0 flex h-[80%] flex-col items-center space-y-4 rounded-b-xl bg-white py-3">
        <div className="space-x-4">
          <label htmlFor="#message ">メッセージ</label>
          <input
            id="message"
            type="text"
            className="border-blue-100 "
            onChange={handleSet}
          />
        </div>
        <div className="space-x-20">
          <button
            onClick={handleSend}
            className="text-sm font-semibold text-blue-600 hover:text-blue-300"
          >
            送信
          </button>
          <button
            onClick={props.onClose}
            className="text-sm font-semibold text-red-600 hover:text-red-300"
          >
            やめる
          </button>
        </div>
      </div>
    </form>
  );
};

export const SendMessageButton = (props: {
  lineId: definitions["reserve"]["lineid"];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen && <PushMessageForm lineId={props.lineId} onClose={handleOpen} />}
      <button onClick={handleOpen} className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      </button>
    </div>
  );
};

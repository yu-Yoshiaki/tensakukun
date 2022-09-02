import axios from "axios";
import { useState } from "react";

export const PushMessageForm = (props: { userId: string }) => {
  const [message, setMessage] = useState<string>();

  const handleSetMessage = (event: any) => {
    setMessage(event.target.value);
  };

  const handleClick = async () => {
    if (message === undefined) return;

    const { data } = await axios.post<{ status: string }>(
      "/api/sendPushMessage",
      {
        userId: props.userId,
        message,
      }
    );
    alert(`メッセージ送信: ${data.status}`);
  };
  return (
    <form className="flex space-x-4">
      <input
        type="text"
        className="border-blue-100"
        onChange={handleSetMessage}
      />
      <button
        onClick={handleClick}
        className="py-3 px-4 text-sm font-semibold text-blue-600 hover:text-blue-300"
      >
        送信
      </button>
    </form>
  );
};

import { useState } from "react";

export const PushMessageForm = (props: { userId: string }) => {
  const [message, setMessage] = useState<string>();
  const handleChangeMessage = (e: any) => {
    setMessage(e.target.value);
  };
  const handleClick = async () => {
    if (message === undefined) return;

    try {
      await fetch("/api/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...props, message }),
      });
    } catch (err: any) {}
  };
  return (
    <form className="flex space-x-4">
      <input
        type="text"
        className="border-blue-100"
        onChange={(e) => {
          return handleChangeMessage(e.target.value);
        }}
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

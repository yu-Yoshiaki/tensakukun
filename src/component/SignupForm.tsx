import { useRouter } from "next/router";
import { useState } from "react";
import { useCustomer } from "src/hook/useCustomer";

export const SignupForm = () => {
  const [username, setUsername] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const { createCustomer } = useCustomer();
  const router = useRouter();

  const handleClick = async () => {
    const lineid = (await liff.getProfile()).userId;

    if (username === undefined || phone === undefined || email === undefined)
      return;

    const { data, error } = await createCustomer({
      username,
      email,
      phone,
      lineid,
    });

    if (error) {
      if (error) return alert(error.message);
    }

    return router.push("/success");
  };

  return (
    <form className="flex flex-col justify-between p-2 py-5 text-sm ">
      <div className="space-y-3 mb-20">
        <div className="space-x-2 flex items-center justify-end">
          <p>
            お名前
            <span className="bg-yellow-300 text-xs p-1 rounded-sm ml-1">
              必須
            </span>
          </p>
          <input
            type="text"
            onChange={(e: any) => setUsername(e.target.value)}
            className="border-gray-300 rounded-md"
          />
        </div>
        <div className="space-x-2 flex items-center justify-end ">
          <p>
            メールアドレス
            <span className="bg-yellow-300 text-xs p-1 rounded-sm ml-1">
              必須
            </span>
          </p>
          <input
            type="text"
            onChange={(e: any) => setEmail(e.target.value)}
            className="border-gray-300 rounded-md"
          />
        </div>
        <div className="space-x-2 flex items-center justify-end ">
          <p>
            電話番号
            <span className="bg-yellow-300 text-xs p-1 rounded-sm ml-1">
              必須
            </span>
          </p>
          <input
            type="text"
            onChange={(e: any) => setPhone(e.target.value)}
            className="border-gray-300 rounded-md"
          />
        </div>
      </div>
      <button
        type="button"
        className="bg-green-200 py-3 rounded-md"
        onClick={handleClick}
      >
        ユーザー登録
      </button>
    </form>
  );
};

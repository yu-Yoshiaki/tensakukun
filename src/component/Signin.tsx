import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { supabase } from "src/lib/supabase";

export const Signin = () => {
  const [isLoading, setIsLoading] = useState(false);

  type Form = {
    email: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({ criteriaMode: "all" });

  const handleLogin = async ({ email }: Form) => {
    setIsLoading(true);
    const { error } = await supabase.auth.signIn({ email });
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("メールを確認してください。");
    }
    setIsLoading(false);
  };

  // h-[calc(100%-80px)]
  return (
    <div className="flex items-center justify-center w-full h-[calc(100vh-80px)]">
      <div className="bg-white rounded-md p-8 space-y-8 w-[500px]">
        <h2 className="text-2xl font-bold flex items-center justify-center">
          ログイン
        </h2>
        <div className="flex flex-wrap p-5 rounded-md border border-gray-300">
          <p>
            確認リンクを添付した認証メールが配信されます。
            <br />
            そちらのリンクからページに遷移してください。
          </p>
        </div>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex flex-col justify-between h-[400px] gap-8"
        >
          <div className="grid grid-cols-2">
            <label>
              メールアドレス{" "}
              <span className="font-semibold text-red-400">必須</span>
            </label>
            <p>{errors?.email && <p>{errors.email.message}</p>}</p>

            <input
              className="col-span-2 rounded border p-2"
              {...register("email", {
                required: { value: true, message: "" },
                pattern: {
                  value:
                    /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*/,
                  message: "メールアドレスの形式が不正です",
                },
              })}
            />
            <p>例: sato12345@example.com</p>
          </div>

          <input
            value={isLoading ? "Loading" : "認証メールを送信する"}
            type="submit"
            className="rounded border-0 bg-gray-700 py-2 px-12 text-lg text-white hover:bg-gray-600"
          />
        </form>
      </div>
    </div>
  );
};

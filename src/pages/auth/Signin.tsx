import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { supabase } from "src/libs/supabase";

/**
 * @package
 */

type Form = {
  email: string;
};

export const Signin = () => {
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <div className="w-[500px] space-y-8 rounded-md bg-white p-8">
      <h2 className="flex items-center justify-center text-2xl font-bold">
        ログイン
      </h2>
      <div className="flex flex-wrap rounded-md border border-gray-300 p-5">
        <p>
          確認リンクを添付した認証メールが配信されます。
          <br />
          そちらのリンクからページに遷移してください。
          <br />
          <span className="bg-yellow-100">
            ※ ユーザー作成もこちらから行えます。
          </span>
        </p>
      </div>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="flex h-[400px] flex-col justify-between gap-8"
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
  );
};

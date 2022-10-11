import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useFilteredCustomer } from "src/hook/useFilteredCustomer";
import { supabase } from "src/lib/supabase";
import type { definitions } from "src/type/supabase";

export const SignupForm = (props: { lineid?: string }) => {
  const { filteredCustomers } = useFilteredCustomer();
  const router = useRouter();

  type Form = {
    username: string;
    email: string;
    phone: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({ criteriaMode: "all" });

  const onSubmit = async (data: Form) => {
    const { error } = await supabase
      .from<definitions["customers"]>("customers")
      .update({
        ...data,
        lineid: props.lineid,
      });

    if (error) {
      if (error) return toast.error(error.message);
    }

    return router.push("/liff/success");
  };

  return (
    <form
      className="flex flex-col justify-between p-2 py-5 text-sm "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-20 space-y-3">
        <div className="flex items-center justify-end space-x-2">
          <label>
            お名前
            <span className="ml-1 rounded-sm bg-yellow-300 p-1 text-xs">
              必須
            </span>
          </label>
          {errors && errors.username?.message}
          <input
            type="text"
            {...register("username", { required: true })}
            className="rounded-md border-gray-300"
          />
        </div>

        <div className="flex items-center justify-end space-x-2">
          <label>
            メールアドレス
            <span className="ml-1 rounded-sm bg-yellow-300 p-1 text-xs">
              必須
            </span>
          </label>
          {errors && errors.email?.message}
          <input
            type="text"
            {...register("email", { required: true })}
            className="rounded-md border-gray-300"
          />
        </div>

        <div className="flex items-center justify-end space-x-2">
          <label>
            電話番号
            <span className="ml-1 rounded-sm bg-yellow-300 p-1 text-xs">
              必須
            </span>
          </label>
          {errors && errors.phone?.message}
          <input
            type="text"
            {...register("phone", { required: true })}
            className="rounded-md border-gray-300"
          />
        </div>
      </div>
      <button type="submit" className="rounded-md bg-green-200 py-3">
        ユーザー登録
      </button>
    </form>
  );
};

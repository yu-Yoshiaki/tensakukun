import { Sidemenu } from "app/components/layouts/Sidemenu";
import { useUserSession } from "app/auth/useUserSession";
import { supabase } from "app/libs/supabase";

/**
 * @package
 */

const Logout = () => {
  const handleSignout = async () => {
    const { error } = await supabase.auth.signOut();
    error && alert(error.message);
  };
  return (
    <button onClick={handleSignout} className="font-semibold">
      ログアウト
    </button>
  );
};

export const Header = () => {
  const { session } = useUserSession();

  return (
    <header className="flex bg-white px-4 py-5 flex-col gap-40 md:gap-0 md:justify-between h-screen w-[250px]">
      <div>
        <h1 className="text-center pt-5 pb-10 font-bold sm:text-2xl lg:text-3xl text-gray-700">
          {process.env.NEXT_PUBLIC_PROJECT_NAME}
        </h1>
        <Sidemenu />
      </div>
      <div className="flex flex-col gap-2 items-start">
        <button className="font-semibold">困りごと 🤔</button>
        <button className="font-semibold">利用規約</button>
        {session && <Logout />}
        <p className="text-gray-500 text-xs font-semibold">
          Created by {process.env.NEXT_PUBLIC_PROJECT_NAME}
        </p>
      </div>
    </header>
  );
};

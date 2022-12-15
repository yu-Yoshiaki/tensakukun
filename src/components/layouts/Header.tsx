import { Sidemenu } from "src/components/layouts/Sidemenu";
import { supabase } from "src/libs/supabase";
import { useUserSession } from "src/pages/auth/useUserSession";

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
    <header className="flex h-screen w-[250px] flex-col gap-40 bg-white px-4 py-5 md:justify-between md:gap-0">
      <div>
        <h1 className="pt-5 pb-10 text-center font-bold text-gray-700 sm:text-2xl lg:text-3xl">
          <h1 className="text-center font-bold text-gray-700 sm:text-2xl lg:text-3xl">
            <span className="text-6xl">L</span>プラス
          </h1>
        </h1>
        <Sidemenu />
      </div>
      <div className="flex flex-col items-start gap-2">
        <button className="font-semibold">困りごと 🤔</button>
        <button className="font-semibold">利用規約</button>
        {session && <Logout />}
        <p className="text-xs font-semibold text-gray-500">
          Created by {process.env.NEXT_PUBLIC_PROJECT_NAME}
        </p>
      </div>
    </header>
  );
};

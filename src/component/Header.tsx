import { Sidemenu } from "src/component/Sidemenu";
import { useUserSession } from "src/hook/useUserSession";
import { supabase } from "src/lib/supabase";

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
          <span className="text-6xl">L</span>プラス
        </h1>
        <Sidemenu />
      </div>
      <div className="flex flex-col gap-2 items-start">
        <button className="font-semibold">困りごと 🤔</button>
        <button className="font-semibold">利用規約</button>
        {session && <Logout />}
        <p className="text-gray-500 text-xs font-semibold">
          Created by Lプラス
        </p>
      </div>
    </header>
  );
};

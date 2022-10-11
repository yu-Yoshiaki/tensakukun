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
    <button
      onClick={handleSignout}
      className="rounded-md bg-red-200 py-2 px-3 md:py-4 md:px-5"
    >
      ログアウト
    </button>
  );
};

export const Header = () => {
  const { session } = useUserSession();

  return (
    <header className="bg-sky-300 px-3">
      <h1 className="text-center border py-10 font-bold sm:text-2xl lg:text-3xl text-gray-700">
        <span className="text-6xl">L</span>プラス デモ
      </h1>
      <Sidemenu />
      <div>{session && <Logout />}</div>
    </header>
  );
};

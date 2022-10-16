import type { CustomNextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Signin } from "src/component";
import { useUserSession } from "src/hook/useUserSession";

const Auth: CustomNextPage = () => {
  const { session } = useUserSession();
  const router = useRouter();

  useEffect(() => {
    session && router.push("/");
  }, [router, session]);

  return <Signin />;
};

export default Auth;

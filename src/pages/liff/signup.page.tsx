import type { CustomNextPage } from "next";
import { useLiff } from "src/hook/useLiff";
import { useLiffGetProfile } from "src/hook/useLiffGetProfile";

import { SignupForm } from "./component/SignupForm";

const Signup: CustomNextPage = () => {
  const { liff } = useLiff();
  if (!liff) return <div>Loading...</div>;

  const { lineid } = useLiffGetProfile({ liff });
  return <SignupForm lineid={lineid} />;
};

export default Signup;

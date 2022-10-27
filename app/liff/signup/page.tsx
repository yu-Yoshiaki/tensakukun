import { useLiff } from "app/liff/useLiff";

// import { useLiffGetProfile } from "src/hook/useLiffGetProfile";
import { SignupForm } from "../SignupForm";

export const SignupPage = () => {
  const { liff } = useLiff();
  if (!liff) return <div>Loading...</div>;

  // const { lineid } = useLiffGetProfile({ liff });
  return <SignupForm />;
};

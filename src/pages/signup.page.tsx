import type { CustomNextPage } from "next";
import { SignupForm } from "src/component/SignupForm";

const createUser: CustomNextPage = () => {
  return <SignupForm />;
};

export default createUser;

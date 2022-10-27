import { Setting } from "./Setting";
import { SettingFirst } from "./SettingFirst";

export const SettingPage = () => {
  const isFirstLogin = false;

  return <div>{!isFirstLogin ? <Setting /> : <SettingFirst />}</div>;
};

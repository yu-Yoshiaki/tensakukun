import { Setting } from "src/component/Setting";
import { SettingFirst } from "src/component/SettingFirst";

const setting = () => {
  const isFirstLogin = false;

  return <div>{!isFirstLogin ? <Setting /> : <SettingFirst />}</div>;
};

export default setting;

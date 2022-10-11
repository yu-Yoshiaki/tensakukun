import {
  UseFormRegister,
  FieldValues,
  ValidationRule,
  FieldErrorsImpl,
} from "react-hook-form";
import { Input } from "src/component";

type Props = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrorsImpl<{
    [x: string]: any;
  }>;
};

/**
 * @package
 */

export const Template = (props: Props) => {
  const handleChange = (event: any) => {};

  return (
    <div>
      <Input
        register={props.register}
        label={"テンプレートメッセージ代替テキスト"}
        labelLeft={false}
        errors={props.errors}
        placeholder={
          "代替テキスト。テンプレートメッセージに非対応のデバイスで表示されるほか、ユーザーがメッセージを受信した際に、端末の通知やトークリストでも表示されます。最大文字数:400"
        }
        className={"text-sm font-normal w-full"}
      />
      <label htmlFor="templateMessageType">テンプレートタイプ</label>
      <select
        id="templateMessageType"
        {...props.register("type", { required: true })}
        onChange={handleChange}
        className="rounded-xl"
      >
        <option value="buttons" selected>
          buttons
        </option>
        <option value="confirm">confirm</option>
        <option value="carousel">carousel</option>
        <option value="image_carousel">image_carousel</option>
      </select>
    </div>
  );
};

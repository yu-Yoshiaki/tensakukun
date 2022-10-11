import { Message } from "@line/bot-sdk";
import { Dispatch, SetStateAction } from "react";
import type {
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
  ValidationRule,
} from "react-hook-form";

type Props = {
  label: string;
  register: UseFormRegister<FieldValues>;
  required?: string | ValidationRule<boolean>;
  errors: FieldErrorsImpl<{
    [x: string]: any;
  }>;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  setMessage: Dispatch<SetStateAction<Message[]>>;
};

/**
 * @package
 */

export const Text = (props: Props) => {
  const handleChange = (event: any) => {
    props.setMessage([
      {
        type: "text",
        text: event.target.value,
      },
    ]);
  };
  return (
    <div
      className={
        props.className ??
        "items-center justify-between gap-4 space-y-2 text-sm md:flex md:space-y-0"
      }
    >
      {props.errors[props.label] && <span>エラー</span>}
      <label
        htmlFor={props.label}
        className={props.className ?? "w-24 whitespace-nowrap"}
      >
        {props.label}
      </label>

      <input
        {...props.register(props.label, { required: props.required })}
        type="text"
        id={props.label}
        className={
          props.className ??
          "w-full rounded-xl border-sky-200 text-[16px] font-semibold md:w-[400px]"
        }
        onChange={handleChange}
      />
    </div>
  );
};

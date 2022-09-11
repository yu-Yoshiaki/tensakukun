import type {
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
  ValidationRule,
} from "react-hook-form";

type Props = {
  label: string;
  labelLeft: boolean;
  register: UseFormRegister<FieldValues>;
  required?: string | ValidationRule<boolean>;
  defaultValue?: string;
  errors: FieldErrorsImpl<{
    [x: string]: any;
  }>;
  placeholder: string;
};

export const Input = (props: Props) => {
  return (
    <div className="items-center justify-between gap-4 space-y-2 text-sm md:flex md:space-y-0">
      {props.errors[props.label] && <span>エラー</span>}
      {props.labelLeft && (
        <label htmlFor={props.label} className="w-24 whitespace-nowrap">
          {props.label}
        </label>
      )}

      <input
        {...props.register(props.label, { required: props.required })}
        type="text"
        id={props.label}
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        className="w-full rounded-xl border-sky-200 text-[16px] font-semibold md:w-[400px]"
      />
    </div>
  );
};

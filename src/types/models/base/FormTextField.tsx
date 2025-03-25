"use client";

import {
  FieldPath,
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

type FormTextFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> = React.InputHTMLAttributes<HTMLInputElement> &
  UseControllerProps<TFieldValues, TName>;

function FormTextField<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>(props: FormTextFieldProps<TFieldValues, TName>) {
  const { name, control, rules, defaultValue, ...inputProps } = props;

  const {
    field,
    fieldState: { error },
  } = useController({ name, control, rules, defaultValue });

  return (
    <div className="form-control w-full">
      <input
        {...inputProps}
        {...field}
        value={field.value ?? ""}
        className={`input input-bordered w-full ${error ? "input-error" : ""}`}
      />
      {error && (
        <label className="label">
          <span className="label-text-alt text-error">{error.message}</span>
        </label>
      )}
    </div>
  );
}

export default FormTextField;

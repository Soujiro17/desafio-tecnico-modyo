import { useId } from "react";
import { Input } from "./Input";

export function FormGroup({
  onChange,
  value,
  placeholder = "",
  label = "",
  type = "text",
  name = "",
  inputBorderColor,
  required = false,
  ...props
}) {
  const id = useId();

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-lg mb-2">
        {label} {required && <span className="text-red-500 font-bold">*</span>}
      </label>
      <Input
        {...props}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        id={id}
        type={type}
        name={name}
        required={required}
        aria-required={required}
        inputBorderColor={inputBorderColor}
      />
    </div>
  );
}

import { useId } from "react";
import { Input } from "./Input";

export function FormGroup({
  onChange,
  value,
  placeholder = "",
  label = "",
  type = "text",
}) {
  const id = useId();

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-2xl mb-2">
        {label}
      </label>
      <Input
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        id={id}
        type={type}
      />
    </div>
  );
}

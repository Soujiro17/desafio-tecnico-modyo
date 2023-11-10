export function Input({ inputBorderColor, ...props }) {
  return (
    <input
      className={`h-10 rounded-md pl-3 border-2 border-solid border-${inputBorderColor}-400 outline-none`}
      {...props}
    />
  );
}

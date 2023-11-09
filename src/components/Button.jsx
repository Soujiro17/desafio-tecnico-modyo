export function Button({
  title = "",
  className = "",
  onClick,
  type = "button",
  children,
  ...props
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`p-2 bg-green-500 border-solid text-white border-green-500 border-2 block rounded-md text-center hover:opacity-70 transtion duration-200 ${className}`}
      title={title}
      {...props}
    >
      {children}
    </button>
  );
}

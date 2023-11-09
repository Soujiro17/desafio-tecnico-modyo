export function Link({
  href = "",
  title = "",
  className = "",
  children,
  ...props
}) {
  return (
    <a
      className={`p-2 bg-green-500 border-solid text-white border-green-500 border-2 block rounded-md text-center ${className}`}
      href={href}
      {...props}
      title={title}
    >
      {children}
    </a>
  );
}

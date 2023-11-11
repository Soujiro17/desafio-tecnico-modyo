export function LogoModyo({ height, width, className, ...props }) {
  return (
    <img
      {...props}
      src="/modyo.png"
      alt="modyo"
      height={height}
      width={width}
      className={className}
    />
  );
}

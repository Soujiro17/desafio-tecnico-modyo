export function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white p-3 h-auto border-solid border-slate-700	shadow-md rounded-md ${className}`}
    >
      {children}
    </div>
  );
}

export function BoardCard({ id, isActive, image, onClick, loading = false }) {
  const loadingClass = loading
    ? "bg-gray-300 card-loading"
    : "bg-blue-950 hover:opacity-70 cursor-pointer";

  const activeStyle = isActive
    ? {
        background: `no-repeat url(${image}) center`,
        backgroundSize: "cover",
        transform: "rotate3d(0, 1, 0, 180deg) rotateY(180deg) translateZ(50px)",
      }
    : {};

  return (
    <div
      key={id}
      onClick={onClick}
      className={`h-full min-h-[110px] min-w-[100px] w-full rounded-md transition-all duration-200 text-white text-center flex items-center justify-center text-7xl ${loadingClass}`}
      style={activeStyle}
    >
      {isActive ? "" : "?"}
    </div>
  );
}

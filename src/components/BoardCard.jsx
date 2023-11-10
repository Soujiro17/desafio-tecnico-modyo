export function BoardCard({ id, isActive, image, onClick }) {
  return (
    <div
      key={id}
      onClick={onClick}
      className={`h-full min-h-[110px] min-w-[100px] hover:opacity-70 cursor-pointer w-full rounded-md transition-all duration-200 bg-blue-950 ${
        isActive ? "active-card" : ""
      }`}
      style={isActive ? { backgroundImage: `url(${image})` } : {}}
    />
  );
}

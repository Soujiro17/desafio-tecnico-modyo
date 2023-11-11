import { BoardCard } from "./BoardCard";
import { BoardLayout } from "./layouts/BoardLayout";

export function BoardSkeleton() {
  return (
    <BoardLayout>
      {Array(20)
        .fill(0)
        .map((_, index) => (
          <BoardCard
            loading={true}
            key={index}
            id={index}
            image=""
            isActive={false}
          />
        ))}
    </BoardLayout>
  );
}

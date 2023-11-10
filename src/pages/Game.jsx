import { MainLayout } from "../components/layouts/MainLayout";
import { Card } from "../components/Card";
import { Board } from "../components/Board";

export function Game() {
  return (
    <MainLayout>
      <Card className="px-2 overflow-auto">
        <Board />
      </Card>
    </MainLayout>
  );
}

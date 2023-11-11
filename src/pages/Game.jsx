import { MainLayout } from "../components/layouts/MainLayout";
import { Card } from "../components/Card";
import { Board } from "../components/Board";

export function Game() {
  return (
    <MainLayout logoHeight={100} logoWidth={200}>
      <Card className="w-full md:w-auto px-2 overflow-auto">
        <Board />
      </Card>
    </MainLayout>
  );
}

import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Spinner } from "../components/Spinner";

const Welcome = lazy(() => import("../pages/Welcome"));
const Game = lazy(() => import("../pages/Game"));

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/game" element={<Game />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

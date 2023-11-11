import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Spinner } from "../components/Spinner";
import { useUser } from "../hooks/useUser";
import { Navigate } from "react-router-dom";

const Welcome = lazy(() => import("../pages/Welcome"));
const Game = lazy(() => import("../pages/Game"));

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route
            path="/game"
            element={
              <PrivateRoute>
                <Game />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export function PrivateRoute({ children }) {
  const { username } = useUser();

  if (!username) {
    return <Navigate to="/" />;
  }

  return children;
}

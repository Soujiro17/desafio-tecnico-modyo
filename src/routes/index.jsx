import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome } from "../pages/Welcome";
import { Game } from "../pages/Game";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/game" element={<Game />} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

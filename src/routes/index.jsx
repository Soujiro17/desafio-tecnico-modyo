import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome } from "../pages/Welcome";
import { Start } from "../pages/Start";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/start" element={<Start />} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

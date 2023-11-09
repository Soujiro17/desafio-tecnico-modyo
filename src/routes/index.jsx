import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Start } from "../pages/Start";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

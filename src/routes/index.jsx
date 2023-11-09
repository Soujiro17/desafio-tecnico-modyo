import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome } from "../pages/Welcome";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

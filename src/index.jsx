import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/home.page";
import TemplatePage from "./pages/template.page";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index={true} element={<HomePage />} />
        <Route path="/template" element={<TemplatePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

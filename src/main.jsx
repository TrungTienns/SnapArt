// src/main.jsx
import React from "react";
import './i18n';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import LanguageGate from './components/LanguageGate/LanguageGate';
import "./index.scss";   // ← file phải tồn tại

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageGate>
        <AppRoutes />
      </LanguageGate>
    </BrowserRouter>
  </React.StrictMode>
);
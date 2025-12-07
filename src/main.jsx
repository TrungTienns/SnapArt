// src/main.jsx
import React from "react";
import './i18n';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import LanguageGate from './components/LanguageGate/LanguageGate';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import "./index.scss";   // ← file phải tồn tại

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <LanguageGate>
          <AppRoutes />
        </LanguageGate>
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
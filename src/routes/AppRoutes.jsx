// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import LanguageSelector from "../pages/LanguageSelector/LanguageSelector";
import NotFound from "../pages/NotFound/NotFound";
import ContactPage from "../pages/ContactPage/ContactPage";
import { path } from "../common/path";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={path.homepage} element={<HomePage />} />
      <Route path="/language" element={<LanguageSelector />} />
      <Route path={path.about} element={<AboutPage />} />
      <Route path={path.contact} element={<ContactPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
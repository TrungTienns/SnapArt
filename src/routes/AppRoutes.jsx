// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import NotFound from "../pages/NotFound/NotFound";
import { path } from "../common/path";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={path.homepage} element={<HomePage />} />
      <Route path={path.about} element={<AboutPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
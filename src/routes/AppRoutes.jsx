// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import LanguageSelector from "../pages/LanguageSelector/LanguageSelector";
import NotFound from "../pages/NotFound/NotFound";
import WorkPage from "../pages/WorkPage/WorkPage";

import Blog1 from "../pages/BlogsPage/Blog1/Blog1";
import Blog2 from "../pages/BlogsPage/Blog2/Blog2";
import Blog3 from "../pages/BlogsPage/Blog3/Blog3";
import Blog4 from "../pages/BlogsPage/Blog4/Blog4";

// Layout
import Header from "../layout/Header/Header";

// ScrollToTop
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

// Path constants
import { path } from "../common/path";

const AppRoutes = () => {
  return (
    <>
      {/* Header luôn hiển thị */}
      <Header />

      {/* Scroll tự động lên đầu mỗi khi chuyển route */}
      <ScrollToTop />

      {/* Nội dung chính */}
      <Routes>
        <Route path={path.homepage} element={<HomePage />} />
        <Route path="/language" element={<LanguageSelector />} />
        <Route path={path.about} element={<AboutPage />} />
        <Route path={path.contact} element={<ContactPage />} />
        <Route path={path.works} element={<WorkPage />} />

        {/* Blog pages */}
        <Route path={path.blog1} element={<Blog1 />} />
        <Route path={path.blog2} element={<Blog2 />} />
        <Route path={path.blog3} element={<Blog3 />} />
        <Route path={path.blog4} element={<Blog4 />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
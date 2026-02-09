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
import BlogPage from "../pages/BlogPage/BlogPage";
// Blog pages
import Blog1 from "../pages/BlogsPage/Blog1/Blog1";
import Blog2 from "../pages/BlogsPage/Blog2/Blog2";
import Blog3 from "../pages/BlogsPage/Blog3/Blog3";
import Blog4 from "../pages/BlogsPage/Blog4/Blog4";
//Product pages
import Product1 from "../pages/WorkPages/WorkPage1/WorkPage1";
import Product2 from "../pages/WorkPages/WorkPage2/WorkPage2";
import Product3 from "../pages/WorkPages/WorkPage3/WorkPage3";
import Product4 from "../pages/WorkPages/WorkPage4/WorkPage4";
import Product5 from "../pages/WorkPages/WorkPage5/WorkPage5";
import Product6 from "../pages/WorkPages/WorkPage6/WorkPage6";
import Product7 from "../pages/WorkPages/WorkPage7/WorkPage7";
import Product8 from "../pages/WorkPages/WorkPage8/WorkPage8";

//Work Pages
import Workshop1 from "../pages/WorkShopPage/WorkPage1/Workshop1";
import Workshop2 from "../pages/WorkShopPage/WorkPage2/Workshop2";
import Workshop3 from "../pages/WorkShopPage/WorkPage3/Workshop3";
import Workshop4 from "../pages/WorkShopPage/WorkPage4/Workshop4";
import Workshop5 from "../pages/WorkShopPage/WorkPage5/Workshop5";
import Workshop6 from "../pages/WorkShopPage/WorkPage6/Workshop6";
//Collection page
import AdultCollection from "../pages/CollectionPage/AdultCollection/AdultCollection";

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
        <Route path={path.blog} element={<BlogPage />} />

        {/* Blog pages */}
        <Route path={path.blog1} element={<Blog1 />} />
        <Route path={path.blog2} element={<Blog2 />} />
        <Route path={path.blog3} element={<Blog3 />} />
        <Route path={path.blog4} element={<Blog4 />} />
        {/* Product pages */}
        <Route path={path.product1} element={<Product1 />} />
        <Route path={path.product2} element={<Product2 />} />
        <Route path={path.product3} element={<Product3 />} />
        <Route path={path.product4} element={<Product4 />} />
        <Route path={path.product5} element={<Product5 />} />
        <Route path={path.product6} element={<Product6 />} />
        <Route path={path.product7} element={<Product7 />} />
        <Route path={path.product8} element={<Product8 />} />
        {/* Workshop pages */}
        <Route path={path.workshop1} element={<Workshop1 />} />
        <Route path={path.workshop2} element={<Workshop2 />} />
        <Route path={path.workshop3} element={<Workshop3 />} />
        <Route path={path.workshop4} element={<Workshop4 />} />
        <Route path={path.workshop5} element={<Workshop5 />} />
        <Route path={path.workshop6} element={<Workshop6 />} />

        {/* Collection pages */}
        <Route path={path.adultCollection} element={<AdultCollection />} />
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
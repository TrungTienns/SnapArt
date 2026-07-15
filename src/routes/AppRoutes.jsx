// src/routes/AppRoutes.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Layout & Context components (these should be loaded immediately)
import Header from "../layout/Header/Header";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { path } from "../common/path";

// Lazy Loaded Pages
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const AboutPage = lazy(() => import("../pages/AboutPage/AboutPage"));
const ContactPage = lazy(() => import("../pages/ContactPage/ContactPage"));
const LanguageSelector = lazy(() => import("../pages/LanguageSelector/LanguageSelector"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
const WorkPage = lazy(() => import("../pages/WorkPage/WorkPage"));
const BlogPage = lazy(() => import("../pages/BlogPage/BlogPage"));
const BlogDetail = lazy(() => import("../pages/BlogDetail/BlogDetail"));
const AdminPage = lazy(() => import("../pages/AdminPage/AdminPage"));

// Blog pages removed (now dynamic)

// Product pages
const Product1 = lazy(() => import("../pages/WorkPages/WorkPage1/WorkPage1"));
const Product2 = lazy(() => import("../pages/WorkPages/WorkPage2/WorkPage2"));
const Product3 = lazy(() => import("../pages/WorkPages/WorkPage3/WorkPage3"));
const Product4 = lazy(() => import("../pages/WorkPages/WorkPage4/WorkPage4"));
const Product5 = lazy(() => import("../pages/WorkPages/WorkPage5/WorkPage5"));
const Product6 = lazy(() => import("../pages/WorkPages/WorkPage6/WorkPage6"));
const Product7 = lazy(() => import("../pages/WorkPages/WorkPage7/WorkPage7"));
const Product8 = lazy(() => import("../pages/WorkPages/WorkPage8/WorkPage8"));

// Workshop Pages
const Workshop1 = lazy(() => import("../pages/WorkShopPage/WorkPage1/Workshop1"));
const Workshop2 = lazy(() => import("../pages/WorkShopPage/WorkPage2/Workshop2"));
const Workshop3 = lazy(() => import("../pages/WorkShopPage/WorkPage3/Workshop3"));
const Workshop4 = lazy(() => import("../pages/WorkShopPage/WorkPage4/Workshop4"));
const Workshop5 = lazy(() => import("../pages/WorkShopPage/WorkPage5/Workshop5"));
const Workshop6 = lazy(() => import("../pages/WorkShopPage/WorkPage6/Workshop6"));

// Collection page
const AdultCollection = lazy(() => import("../pages/CollectionPage/AdultCollection/AdultCollection"));

// Custom Paintings Page
const CustomPaintingsPage = lazy(() => import("../pages/CustomPaintingsPage/CustomPaintingsPage"));

// Available Paintings Page
const AvailablePaintingsPage = lazy(() => import("../pages/AvailablePaintingsPage/AvailablePaintingsPage"));

const AvailableToteBagPage = lazy(() => import("../pages/AvailableToteBagPage/AvailableToteBagPage"));

// Simple loading spinner for Suspense fallback
const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#faf9f6' }}>
    <div style={{
      width: '40px', height: '40px', borderRadius: '50%', border: '4px solid #fce4e4',
      borderTopColor: '#ff9994', animation: 'spin 1s linear infinite'
    }}></div>
    <style>
      {`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}
    </style>
  </div>
);

const AppRoutes = () => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <>
      {/* Header luôn hiển thị ngoại trừ trang Admin */}
      {!isAdminPage && <Header />}

      {/* Scroll tự động lên đầu mỗi khi chuyển route */}
      <ScrollToTop />

      {/* Nội dung chính */}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path={path.homepage} element={<HomePage />} />
          <Route path="/language" element={<LanguageSelector />} />
          <Route path={path.about} element={<AboutPage />} />
          <Route path={path.contact} element={<ContactPage />} />
          <Route path={path.works} element={<WorkPage />} />
          <Route path={path.blog} element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/admin" element={<AdminPage />} />

          {/* Blog dynamic detail route will go here eventually */}
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
          
          {/* Available Paintings */}
          <Route path={path.availablePaintings} element={<AvailablePaintingsPage />} />
          <Route path="/available-painting" element={<AvailablePaintingsPage />} />
          
          {/* Custom Paintings */}
          <Route path={path.customPaintings} element={<CustomPaintingsPage />} />
          <Route path={path.availableToteBag} element={<AvailableToteBagPage />} />
          
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;

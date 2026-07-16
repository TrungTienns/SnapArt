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
const Login = lazy(() => import("../pages/Auth/Login"));
const Register = lazy(() => import("../pages/Auth/Register"));

// Blog pages removed (now dynamic)

// Product Dynamic Detail Page
const ProductDetail = lazy(() => import("../pages/ProductDetail/ProductDetail"));

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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path={path.about} element={<AboutPage />} />
          <Route path={path.contact} element={<ContactPage />} />
          <Route path={path.works} element={<WorkPage />} />
          <Route path={path.blog} element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/admin" element={<AdminPage />} />

          {/* Product dynamic detail route */}
          <Route path="/product/:id" element={<ProductDetail />} />

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

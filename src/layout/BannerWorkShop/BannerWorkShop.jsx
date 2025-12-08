import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./BannerWorkShop.scss";

// Dữ liệu ảnh banner
import banner1 from "../../assets/images/bannerworkshop.jpg";
import banner2 from "../../assets/images/aboutus_image1.jpg";
import banner3 from "../../assets/images/blog_image2.jpg";

const bannerImages = [banner1, banner2, banner3];

const BannerWorkshop = () => {
  const { t } = useTranslation(); // ✅ i18n
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % bannerImages.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);

  // ✅ Auto slide mỗi 4s
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="banner-workshop">
      <div
        className="banner-slider"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {bannerImages.map((img, idx) => (
          <div
            key={idx}
            className="banner-slide"
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="banner-overlay"></div>
            <div className="banner-content">
              <h1>{t("workshopBanner.title")}</h1>
              <p>{t("workshopBanner.subtitle")}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Buttons điều hướng */}
      <button className="banner-btn prev" onClick={prevSlide}>
        &lt;
      </button>
      <button className="banner-btn next" onClick={nextSlide}>
        &gt;
      </button>
    </section>
  );
};

export default BannerWorkshop;
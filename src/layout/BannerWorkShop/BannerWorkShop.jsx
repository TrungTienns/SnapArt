import React, { useState, useEffect } from 'react';
import './BannerWorkShop.scss';

// Dữ liệu ảnh banner
import banner1 from '../../assets/images/bannerworkshop.jpg';
import banner2 from '../../assets/images/aboutus_image1.jpg';
import banner3 from '../../assets/images/blog_image2.jpg';

const bannerImages = [banner1, banner2, banner3];

const BannerWorkshop = ({
  title = "Workshop SnapArt",
  subtitle = "Khám phá, sáng tạo, và chữa lành cùng nghệ thuật"
}) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % bannerImages.length);
  const prevSlide = () => setCurrent((current - 1 + bannerImages.length) % bannerImages.length);

  // Auto slide mỗi 4s
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="banner-workshop">
      <div className="banner-slider" style={{ transform: `translateX(-${current * 100}%)` }}>
        {bannerImages.map((img, idx) => (
          <div key={idx} className="banner-slide" style={{ backgroundImage: `url(${img})` }}>
            <div className="banner-overlay"></div>
            <div className="banner-content">
              <h1>{title}</h1>
              <p>{subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons điều hướng */}
      <button className="banner-btn prev" onClick={prevSlide}>&lt;</button>
      <button className="banner-btn next" onClick={nextSlide}>&gt;</button>
    </section>
  );
};

export default BannerWorkshop;
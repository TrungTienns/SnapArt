import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './BannerAboutUs.scss';

import bannerImage from '../../assets/images/bannerabout_us1.jpg';

function BannerAboutUs() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  const handleClick = () => {
    navigate('/contact'); // chuyển đến trang ContactPage
  };

  return (
    <section
      className="banner-aboutus"
      style={{ backgroundImage: `url(${bannerImage})` }}
      data-aos="fade-in"
    >
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <h1>Khám Phá Nghệ Thuật Trong Chính Bạn</h1>
        <p>
          Mỗi buổi học tại SnapArt là hành trình khám phá cảm xúc, sắc màu và sự sáng tạo vô tận.
        </p>
        <button className="banner-button" onClick={handleClick}>
          Bắt Đầu Ngay
        </button>
      </div>
    </section>
  );
}

export default BannerAboutUs;
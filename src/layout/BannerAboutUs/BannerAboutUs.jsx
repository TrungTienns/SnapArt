import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './BannerAboutUs.scss';

import bannerImage from '../../assets/images/bannerabout_us1.jpg'; // đặt ảnh tại đây

function BannerAboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

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
        <a href="/workshops" className="banner-button">
          Bắt Đầu Ngay
        </a>
      </div>
    </section>
  );
}

export default BannerAboutUs;
import React from 'react';
import './BannerContact.scss';

import bannerImage from '../../assets/images/contact_banner.jpg'; // ảnh nền

const BannerContact = () => {
  return (
    <section
      className="banner-contact"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <h1>Chúng tôi ở đây là vì bạn</h1>
        <p>
          Gửi lời nhắn và bắt đầu hành trình sáng tạo, chữa lành cùng SnapArt. Chúng tôi luôn sẵn sàng đồng hành cùng bạn.
        </p>
      </div>
    </section>
  );
};

export default BannerContact;
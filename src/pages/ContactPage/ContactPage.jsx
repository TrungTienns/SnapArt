import React from 'react';
import { useTranslation } from "react-i18next";
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import './ContactPage.scss';
import Contact from '../../layout/Rating/Rating';
import '../../layout/BannerAboutUs/BannerAboutUs.scss';
import BannerContact from '../../layout/BannerContact/BannerContact';
import '../../layout/BannerContact/BannerContact.scss';
import AllRating from '../../layout/AllRating/AllRating';

import fbIcon from "../../assets/icons/facebook.svg";
import igIcon from "../../assets/icons/instagram.svg";
import ttIcon from "../../assets/icons/tiktok.svg";

function ContactPage() {
  const { t } = useTranslation();

  return (
    <div className="contactpage">
      <Header />
      <BannerContact />
      <AllRating />
      <Contact />
      {/* Social Contact Section */}
      <section className="social-contact-section">
        <div className="sc-header">
          <h2>{t("contactPage.socialTitle") || "Kết Nối Với Chúng Tôi"}</h2>
          <p>
            {t("contactPage.socialDesc") || 
            "Hãy theo dõi và nhắn tin cho SnapArt qua các nền tảng mạng xã hội để cập nhật những thông tin mới nhất và nhận tư vấn nhanh chóng."}
          </p>
        </div>
        
        <div className="sc-grid">
          {/* Facebook */}
          <a href="https://www.facebook.com/profile.php?id=61583373132344" target="_blank" rel="noopener noreferrer" className="social-card">
            <div className="sc-icon-wrapper">
              <img src={fbIcon} alt="Facebook" />
            </div>
            <h3>Facebook</h3>
            <p>{t("contactPage.fbDesc") || "Theo dõi fanpage và nhắn tin trực tiếp để được chúng tôi hỗ trợ và tư vấn chi tiết."}</p>
            <span className="sc-link-text">
              {t("contactPage.connectBtn") || "Kết nối ngay"}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/snapart_hcm" target="_blank" rel="noopener noreferrer" className="social-card">
            <div className="sc-icon-wrapper">
              <img src={igIcon} alt="Instagram" />
            </div>
            <h3>Instagram</h3>
            <p>{t("contactPage.igDesc") || "Khám phá không gian nghệ thuật và những bức tranh đầy cảm hứng từ học viên."}</p>
            <span className="sc-link-text">
              {t("contactPage.connectBtn") || "Kết nối ngay"}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </a>

          {/* TikTok */}
          <a href="https://www.tiktok.com/@snapart_hcm?lang=vi-VN" target="_blank" rel="noopener noreferrer" className="social-card">
            <div className="sc-icon-wrapper">
              <img src={ttIcon} alt="TikTok" />
            </div>
            <h3>TikTok</h3>
            <p>{t("contactPage.ttDesc") || "Xem các video ngắn về quá trình vẽ tranh và những khoảnh khắc thú vị tại xưởng."}</p>
            <span className="sc-link-text">
              {t("contactPage.connectBtn") || "Kết nối ngay"}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ContactPage;
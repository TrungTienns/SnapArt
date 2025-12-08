import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { useTranslation } from "react-i18next";
import "./Footer.scss";
import logo from "../../assets/logo.png";

// Icons
import facebookIcon from "../../assets/icons/facebook.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import tiktokIcon from "../../assets/icons/tiktok.svg";
import xIcon from "../../assets/icons/zalo.svg";

// Cat animation
import sleepyCat from "../../assets/animation/CatPlayingPink.json";

const Footer = forwardRef((props, ref) => {
  const { t } = useTranslation();

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer ref={ref} className="site-footer">
      <div className="footer-container">

        {/* ✅ Logo & Slogan */}
        <div className="footer-brand">
          <Link to="/" className="brand">
            <img src={logo} alt="SnapArt logo" className="brand-logo" />
            <span className="brand-name">SnapArt</span>
          </Link>

          <p className="slogan">{t("footer.slogan")}</p>

          <div className="social-links">
            <a href="#"><img src={xIcon} alt="Zalo" className="social-icon" /></a>
            <a href="https://www.tiktok.com/@0.0merida?lang=vi-VN">
              <img src={tiktokIcon} alt="TikTok" className="social-icon" />
            </a>
            <a href="https://www.instagram.com/mer1998_/">
              <img src={instagramIcon} alt="Instagram" className="social-icon" />
            </a>
            <a href="https://www.facebook.com/people/SnapArt/61583373132344/?mibextid=wwXIfr">
              <img src={facebookIcon} alt="Facebook" className="social-icon" />
            </a>
          </div>
        </div>

        {/* ✅ Site Map */}
        <div className="footer-column">
          <h3>{t("footer.siteMap")}</h3>
          <ul>
            <li><Link to="/">{t("footer.home")}</Link></li>
            <li><Link to="/technology">{t("footer.technology")}</Link></li>
            <li><Link to="/contact">{t("footer.contact")}</Link></li>
            <li><Link to="/terms">{t("footer.terms")}</Link></li>
            <li><Link to="/privacy">{t("footer.privacy")}</Link></li>
          </ul>
        </div>

        {/* ✅ Address & Google Map (THỦ ĐỨC) */}
        <div className="footer-column">
          <h3>{t("footer.address")}</h3>
          <p>
            02 Đ. 33, khu phố 3, Thủ Đức, Thành phố Hồ Chí Minh, Vietnam
          </p>

          {/* ✅ Google Maps chỉ còn “View larger map” */}
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.568883541385!2d106.7802998!3d10.7906208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317526849b1691a9%3A0xa6cbb70a2dd9810f!2zMDIgxJDGsOG7nW5nIDMzLCBLUC4zLCBUaOG7pyDEkOG7qWMsIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1733649310000"
            width="220"
            height="120"
            style={{ border: 0, borderRadius: "6px" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* ✅ Back to Top */}
        <button onClick={scrollToTop} className="back-to-top">
          <span>{t("footer.backToTop")}</span>
        </button>
      </div>

      {/* ✅ Cat Animation */}
      <div className="footer-cat">
        <Lottie
          animationData={sleepyCat}
          loop
          autoplay
          style={{ width: 120, height: 120 }}
        />
      </div>

      <div className="footer-bottom">
        <p>{t("footer.copyright")}</p>
      </div>
    </footer>
  );
});

export default Footer;
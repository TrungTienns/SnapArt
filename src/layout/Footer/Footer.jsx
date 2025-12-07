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
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const googleMapsLink =
    "https://www.google.com/maps?q=371/8+Hai+Bà+Trưng,+Q.3,+HCM";

  return (
    <footer ref={ref} className="site-footer">
      <div className="footer-container">
        {/* Logo & Slogan */}
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

        {/* Site Map */}
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

        {/* Address & Map */}
        <div className="footer-column">
          <h3>{t("footer.address")}</h3>
          <p>
            371/8 Hai Bà Trưng, Q.3, HCM <br />
            ({t("footer.nearMarket")})
          </p>

          <a
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            <iframe
              title="Google Maps"
              src="https://maps.google.com/maps?q=371/8%20Hai%20Bà%20Trưng,%20Q.3,%20HCM&z=16&output=embed"
              width="200"
              height="120"
              style={{ border: 0, borderRadius: "6px" }}
              loading="lazy"
            ></iframe>
          </a>
        </div>

        <button onClick={scrollToTop} className="back-to-top">
          <span>{t("footer.backToTop")}</span>
        </button>
      </div>

      {/* 🐱 Cat Animation */}
      <div className="footer-cat">
        <Lottie animationData={sleepyCat} loop autoplay style={{ width: 120, height: 120 }} />
      </div>

      <div className="footer-bottom">
        <p>{t("footer.copyright")}</p>
      </div>
    </footer>
  );
});

export default Footer;
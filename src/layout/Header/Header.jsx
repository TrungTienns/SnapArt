import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo.png";
import Lottie from "lottie-react";
import cuteCatWork from "../../assets/animation/CuteCatWorks.json";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  const links = [
    { to: "/", label: t("menu.home") },
    { to: "/about", label: t("menu.about") },
    { to: "/adult-collection", label: t("menu.artwork") },
    { to: "/works", label: t("menu.course") },
    { to: "/blog", label: t("menu.blog") },
    { to: "/contact", label: t("menu.contact") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 50);

      if (current > lastScroll && current > 100) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // đổi ngôn ngữ
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  const currentLang = i18n.language || "vi";

  return (
    <header
      className={`site-header ${scrolled ? "scrolled" : ""} ${
        hideHeader ? "hide" : ""
      }`}
    >
      <div className="header-inner">
        {/* LEFT */}
        <div className="header-left">
          <Link to="/" className="brand">
            <img src={logo} alt="SnapArt logo" className="brand-logo" />
          </Link>

          {/* LANGUAGE SWITCH */}
          <div className="lang-switch">
            <button
              className={`flag-btn ${currentLang === "vi" ? "active" : ""}`}
              onClick={() => changeLanguage("vi")}
              title="Tiếng Việt"
              aria-label="Switch to Vietnamese"
            >
              🇻🇳
            </button>

            <button
              className={`flag-btn ${currentLang === "en" ? "active" : ""}`}
              onClick={() => changeLanguage("en")}
              title="English"
              aria-label="Switch to English"
            >
              🇺🇸
            </button>
          </div>
        </div>

        {/* NAV */}
        <nav className={`main-nav ${open ? "open" : ""}`}>
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="header-right">
          <button
            className="cta"
            onClick={() =>
              window.open("https://www.instagram.com/snapart_hcm/?hl=en", "_blank")
            }
          >
            {t("menu.cta")}
          </button>

          <button
            className={`menu-toggle ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* ANIMATION */}
        <div className="header-animation">
          <Lottie animationData={cuteCatWork} loop />
        </div>
      </div>

      {open && <div className="mobile-backdrop" onClick={() => setOpen(false)} />}
    </header>
  );
}

export default Header;
import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo.png";
import Lottie from "lottie-react";
import cuteCatWork from "../../assets/animation/CuteCatWorks.json";
import bgMusic from "../../assets/music/lunarnewyear.mp3";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const links = [
    { to: "/", label: t("menu.home") },
    { to: "/about", label: t("menu.about") },
    { to: "/gallery", label: t("menu.artwork") },
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

  return (
    <header
      className={`site-header ${scrolled ? "scrolled" : ""} ${
        hideHeader ? "hide" : ""
      }`}
    >
      <audio ref={audioRef} src={bgMusic} loop />

      <div className="header-inner">
        {/* LEFT */}
        <div className="header-left">
          <Link to="/" className="brand">
            <img src={logo} alt="SnapArt logo" className="brand-logo" />
          </Link>

          <div
            className={`music-toggle ${isPlaying ? "playing" : ""}`}
            onClick={toggleMusic}
          >
            <div className={`toggle-btn ${isPlaying ? "on" : ""}`}>
              <div className="circle"></div>
            </div>
          </div>
        </div>

        {/* NAV */}
        <nav className={`main-nav ${open ? "open" : ""}`}>
          {links.map((link) => (
            <Link
              key={link.label}
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
              window.open(
                "https://www.instagram.com/snapart_hcm/?hl=en",
                "_blank"
              )
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

      {open && (
        <div
          className="mobile-backdrop"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}

export default Header;
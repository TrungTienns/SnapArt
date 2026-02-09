// src/components/Banner/Banner.jsx
import React, { useEffect, useState } from "react";
import "./Banner.scss";

import logo from "../../assets/images/banner.png";
import flower from "../../assets/icons/flower.png";
import sun from "../../assets/icons/sun.png";
import brush from "../../assets/icons/paint-brush.png";

import { useTranslation } from "react-i18next";

import flowerAnimation from "../../assets/animation/FlowerBanner.json";
import Lottie from "lottie-react";

function Banner() {
  const { t } = useTranslation();

  // Loop words lấy từ file dịch
  const loopWords = t("banner.loop", { returnObjects: true });

  const [loopIdx, setLoopIdx] = useState(0);
  const [show, setShow] = useState(true);
  const [logoVisible, setLogoVisible] = useState(false);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // đổi chữ loop
    const interval = setInterval(() => {
      setShow(false);

      setTimeout(() => {
        setLoopIdx((prev) => (prev + 1) % loopWords.length);
        setShow(true);
      }, 350);
    }, 2150);

    // hiện logo animation
    const logoTimer = setTimeout(() => {
      setLogoVisible(true);
    }, 500);

    // scroll fade-out
    const handleScroll = () => {
      const aboutSection = document.querySelector("#about-us-section");
      if (!aboutSection) return;

      const scrollY = window.scrollY;
      const aboutOffsetTop = aboutSection.offsetTop;
      const fadeStart = aboutOffsetTop - window.innerHeight / 1.5;

      let newOpacity = 1 - (scrollY - fadeStart) / 200;
      newOpacity = Math.max(Math.min(newOpacity, 1), 0);

      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      clearTimeout(logoTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loopWords]);

  return (
    <section className="hero-artworkshop fullscreen" style={{ opacity }}>
      {/* Lottie flower */}
      <div className="flower-wrapper">
        <Lottie animationData={flowerAnimation} loop autoplay />
      </div>

      {/* LEFT */}
      <div className="hero-artworkshop-left">
        <div className="hero-snapart-name">SnapArt</div>

        <h1 className="hero-artworkshop-title">
          {t("banner.title")}{" "}
          <span className="hero-loop-wrapper">
            <span
              className={`hero-loop-word-art${show ? " show" : ""}`}
              style={{
                fontSize: loopWords[loopIdx]?.length > 7 ? "0.85em" : "1em",
              }}
            >
              {loopWords[loopIdx]}
            </span>
          </span>
        </h1>

        <p className="hero-artworkshop-desc">
          {t("banner.descBefore")} <b>{loopWords[loopIdx]}</b>{" "}
          {t("banner.descAfter")}
        </p>

        {/* ✅ Nút tham gia ngay - mở Instagram chuẩn */}
        <a
          href="https://www.instagram.com/snapart_hcm/"
          className="hero-artworkshop-btn"
          target="_blank"
          rel="noreferrer"
        >
          {t("banner.button")}
        </a>
      </div>

      {/* RIGHT */}
      <div className="hero-artworkshop-right">
        <img
          src={logo}
          alt="Logo SnapArt"
          className={`hero-logo${logoVisible ? " show-logo" : ""}`}
        />

        <img src={flower} alt="flower" className="icon-small icon1" />
        <img src={sun} alt="sun" className="icon-small icon2" />
        <img src={brush} alt="brush" className="icon-small icon3" />
      </div>
    </section>
  );
}

export default Banner;
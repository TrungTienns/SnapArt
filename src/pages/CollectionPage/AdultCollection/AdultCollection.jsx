import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import Header from "../../../layout/Header/Header";
import Footer from "../../../layout/Footer/Footer";
import "./AdultCollection.scss";

// ảnh demo
import img1 from "../../../assets/images/adults/adult1.webp";
import img2 from "../../../assets/images/adults/adult2.webp";
import img3 from "../../../assets/images/adults/adult3.webp";
import img4 from "../../../assets/images/adults/adult4.webp";
import img5 from "../../../assets/images/adults/adult5.webp";
import img6 from "../../../assets/images/adults/adult6.webp";
import img7 from "../../../assets/images/adults/adult7.webp";
import img8 from "../../../assets/images/adults/adult8.webp";
import img9 from "../../../assets/images/adults/adult9.webp";
import img10 from "../../../assets/images/adults/adult10.webp";
import img11 from "../../../assets/images/adults/adult11.webp";
import img12 from "../../../assets/images/adults/adult12.webp";
import img13 from "../../../assets/images/adults/adult13.webp";
import img14 from "../../../assets/images/adults/adult14.webp";
import img15 from "../../../assets/images/adults/adult15.webp";
import img16 from "../../../assets/images/adults/adult16.webp";
import img17 from "../../../assets/images/adults/adult17.webp";
import img18 from "../../../assets/images/adults/adult18.webp";
import img19 from "../../../assets/images/adults/adult19.webp";
import img20 from "../../../assets/images/adults/adult20.webp";
import img21 from "../../../assets/images/adults/adult21.webp";
import img22 from "../../../assets/images/adults/adult22.webp";
import img23 from "../../../assets/images/adults/adult23.webp";
import img24 from "../../../assets/images/adults/adult24.webp";
import img25 from "../../../assets/images/adults/adult25.webp";
import img26 from "../../../assets/images/adults/adult26.webp";
import img27 from "../../../assets/images/adults/adult27.webp";
import img28 from "../../../assets/images/adults/adult28.webp";
import img29 from "../../../assets/images/adults/adult29.webp";
import img30 from "../../../assets/images/adults/adult30.webp";
import img31 from "../../../assets/images/adults/adult31.webp";
import img32 from "../../../assets/images/adults/adult32.webp";
import img33 from "../../../assets/images/adults/adult33.webp";
import img34 from "../../../assets/images/adults/adult34.webp";

const adultImages = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
  , img32, img33, img34
];

const AdultCollection = () => {
  const { t } = useTranslation();

  // ✅ modal state
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const cards = document.querySelectorAll(".collection-card");

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  // ✅ mở modal
  const openModal = (idx) => {
    setActiveIndex(idx);
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // khóa scroll
  };

  // ✅ đóng modal
  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  // ✅ next/prev (loop)
  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % adultImages.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? adultImages.length - 1 : prev - 1
    );
  };

  // ✅ keyboard support
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <Header />

      <section className="collection-page">
        <h2 className="collection-title">{t("gallery.adult")}</h2>

        <div className="collection-grid">
          {adultImages.map((img, idx) => (
            <div className="collection-card" key={idx}>
              <img
                src={img}
                alt={`${t("gallery.adult")} ${idx + 1}`}
              />

              {/* overlay hover */}
              <div className="card-overlay">
                <button
                  className="view-btn"
                  onClick={() => openModal(idx)}
                >
                  Xem ảnh
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ MODAL */}
      {isOpen && (
        <div className="image-modal" onClick={closeModal}>
          <div
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()} // click ảnh không đóng
          >
            <button className="nav-btn prev" onClick={goPrev}>
              ‹
            </button>

            <img
              className="modal-img"
              src={adultImages[activeIndex]}
              alt={`Full ${activeIndex + 1}`}
            />

            <button className="nav-btn next" onClick={goNext}>
              ›
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default AdultCollection;
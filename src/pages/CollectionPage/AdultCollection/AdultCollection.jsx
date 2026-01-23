import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Header from "../../../layout/Header/Header";
import Footer from "../../../layout/Footer/Footer";
import "./AdultCollection.scss";

// ảnh demo
import img1 from "../../../assets/images/adults/adult1.jpg";
import img2 from "../../../assets/images/adults/adult2.jpg";
import img3 from "../../../assets/images/adults/adult3.jpg";
import img4 from "../../../assets/images/adults/adult4.jpg";
import img5 from "../../../assets/images/adults/adult5.jpg";
import img6 from "../../../assets/images/adults/adult6.jpg";
import img7 from "../../../assets/images/adults/adult7.jpg";
import img8 from "../../../assets/images/adults/adult8.jpg";
import img9 from "../../../assets/images/adults/adult9.jpg";
import img10 from "../../../assets/images/adults/adult10.jpg";

const adultImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const AdultCollection = () => {
  const { t } = useTranslation(); // ✅ i18n

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

  return (
    <>
      <Header />

      <section className="collection-page">
        <h2 className="collection-title">
          {t("gallery.adult")}
        </h2>

        <div className="collection-grid">
          {adultImages.map((img, idx) => (
            <div className="collection-card" key={idx}>
              <img
                src={img}
                alt={`${t("gallery.adult")} ${idx + 1}`}
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AdultCollection;
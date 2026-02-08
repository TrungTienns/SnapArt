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
import img11 from "../../../assets/images/adults/adult11.jpg";
import img12 from "../../../assets/images/adults/adult12.jpg";
import img13 from "../../../assets/images/adults/adult13.jpg";
import img14 from "../../../assets/images/adults/adult14.jpg";
import img15 from "../../../assets/images/adults/adult15.jpg";
import img16 from "../../../assets/images/adults/adult16.jpg";
import img17 from "../../../assets/images/adults/adult17.jpg";
import img18 from "../../../assets/images/adults/adult18.jpg";
import img19 from "../../../assets/images/adults/adult19.jpg";
import img20 from "../../../assets/images/adults/adult20.jpg";
import img21 from "../../../assets/images/adults/adult21.jpg";
import img22 from "../../../assets/images/adults/adult22.jpg";
import img23 from "../../../assets/images/adults/adult23.jpg";
import img24 from "../../../assets/images/adults/adult24.jpg";
import img25 from "../../../assets/images/adults/adult25.jpg";
import img26 from "../../../assets/images/adults/adult26.jpg";
import img27 from "../../../assets/images/adults/adult27.jpg";
import img28 from "../../../assets/images/adults/adult28.jpg";
import img29 from "../../../assets/images/adults/adult29.jpg";

const adultImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29];

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
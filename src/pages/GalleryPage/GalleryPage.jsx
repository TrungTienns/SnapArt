import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import "./GalleryPage.scss";

// hình demo
import adultImg from "../../assets/images/aboutus_image1.jpg";
import kidsImg from "../../assets/images/aboutus_image2.jpg";

const GalleryPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // ✅ i18n

  const collections = [
    {
      id: 1,
      title: t("gallery.adult"),
      img: adultImg,
      link: "/adult-collection",
    },
    {
      id: 2,
      title: t("gallery.kids"),
      img: kidsImg,
      link: "/kids-collection",
    },
  ];

  return (
    <>
      <Header />

      <section className="gallery-page">
        <h2 className="gallery-title">{t("gallery.title")}</h2>

        <div className="gallery-collections">
          {collections.map((col) => (
            <div
              className="collection-card"
              key={col.id}
              onClick={() => navigate(col.link)}
            >
              <img src={col.img} alt={col.title} />
              <div className="collection-overlay">
                <h3>{col.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GalleryPage;
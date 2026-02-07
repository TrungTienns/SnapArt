import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import "./GalleryPage.scss";

import adultImg from "../../assets/images/aboutus_image1.jpg";
import kidsImg from "../../assets/images/aboutus_image2.jpg";

const GalleryPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const collections = [
    {
      title: t("gallery.adult"),
      img: adultImg,
      path: "/adult-collection",
    }
  ];

  return (
    <>
      <Header />

      <section className="gallery-page">
        <h2 className="gallery-title">{t("gallery.title")}</h2>

        <div className="gallery-collections">
          {collections.map((item, index) => (
            <div
              key={index}
              className="gallery-card"
              onClick={() => navigate(item.path)}
            >
              <img src={item.img} alt={item.title} />
              <div className="overlay">
                <h3>{item.title}</h3>
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
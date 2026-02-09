import React from "react";
import { useTranslation } from "react-i18next";

import Header from "../../../layout/Header/Header.jsx";
import Footer from "../../../layout/Footer/Footer.jsx";

import blogImage from "../../../assets/images/blog_image1.jpg";
import "./Blog1.scss";

function Blog1() {
  const { t } = useTranslation();

  return (
    <div className="blog1-page">
      <Header />

      <div className="blog1-container">
        <h1 className="blog-title">{t("blog1.title")}</h1>

        <p className="blog-intro">{t("blog1.intro")}</p>

        <h2>{t("blog1.section1.title")}</h2>
        <ul>
          <li>
            <strong>{t("blog1.section1.items.item1.bold")}</strong>{" "}
            {t("blog1.section1.items.item1.text")}
          </li>

          <li>
            <strong>{t("blog1.section1.items.item2.bold")}</strong>{" "}
            {t("blog1.section1.items.item2.text")}
          </li>

          <li>
            {t("blog1.section1.items.item3.text1")}{" "}
            <strong>{t("blog1.section1.items.item3.bold")}</strong>{" "}
            {t("blog1.section1.items.item3.text2")}
          </li>
        </ul>

        <h2>{t("blog1.section2.title")}</h2>
        <ul>
          <li>{t("blog1.section2.items.item1")}</li>
          <li>{t("blog1.section2.items.item2")}</li>
          <li>{t("blog1.section2.items.item3")}</li>
        </ul>

        <h2>{t("blog1.section3.title")}</h2>
        <ul>
          <li>{t("blog1.section3.items.item1")}</li>
          <li>{t("blog1.section3.items.item2")}</li>
          <li>{t("blog1.section3.items.item3")}</li>
        </ul>

        <div className="blog-image">
          <img src={blogImage} alt={t("blog1.imageAlt")} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Blog1;
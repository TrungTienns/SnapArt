import React from "react";
import { useTranslation } from "react-i18next";

import Header from "../../../layout/Header/Header.jsx";
import Footer from "../../../layout/Footer/Footer.jsx";
import blogImage from "../../../assets/images/blog_image2.jpg";

import "./Blog2.scss";

function Blog2() {
  const { t } = useTranslation();

  return (
    <div className="blog2-page">
      <Header />

      <div className="blog2-container">
        <h1 className="blog-title">{t("blog2.title")}</h1>

        <p className="blog-intro">{t("blog2.intro")}</p>

        <h2>{t("blog2.section1.title")}</h2>
        <ul>
          <li>{t("blog2.section1.items.item1")}</li>
          <li>{t("blog2.section1.items.item2")}</li>
          <li>{t("blog2.section1.items.item3")}</li>
        </ul>

        <h2>{t("blog2.section2.title")}</h2>
        <ul>
          <li>{t("blog2.section2.items.item1")}</li>
          <li>{t("blog2.section2.items.item2")}</li>
          <li>{t("blog2.section2.items.item3")}</li>
        </ul>

        <h2>{t("blog2.section3.title")}</h2>
        <ul>
          <li>{t("blog2.section3.items.item1")}</li>
          <li>{t("blog2.section3.items.item2")}</li>
          <li>{t("blog2.section3.items.item3")}</li>
        </ul>

        <div className="blog-image">
          <img src={blogImage} alt={t("blog2.imageAlt")} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Blog2;
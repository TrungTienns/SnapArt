import React from "react";
import { useTranslation } from "react-i18next";

import Header from "../../../layout/Header/Header";
import Footer from "../../../layout/Footer/Footer";
import BannerWorkshop from "../../../layout/BannerWorkShop/BannerWorkShop";
import "./Workshop4.scss";

// hình demo
import imgResin from "../../../assets/images/aboutus_image1.jpg";

const Workshop4 = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <BannerWorkshop />

      <section className="workshop-page">
        <div className="workshop-container">
          {/* HERO */}
          <div className="workshop-hero">
            <div className="hero-left">
              <span className="hero-badge">{t("workshop4.badge")}</span>

              <h2 className="hero-title">{t("workshop4.title")}</h2>

              <p className="hero-desc">{t("workshop4.desc")}</p>

              <div className="hero-highlights">
                <div className="highlight-item">
                  <span className="dot" />
                  <p>{t("workshop4.highlights.h1")}</p>
                </div>

                <div className="highlight-item">
                  <span className="dot" />
                  <p>{t("workshop4.highlights.h2")}</p>
                </div>

                <div className="highlight-item">
                  <span className="dot" />
                  <p>{t("workshop4.highlights.h3")}</p>
                </div>
              </div>

              <div className="hero-actions">
                <a className="btn-primary" href="#booking">
                  {t("workshop4.actions.book")}
                </a>

                <a className="btn-secondary" href="#pricing">
                  {t("workshop4.actions.price")}
                </a>
              </div>
            </div>

            <div className="hero-right">
              <img src={imgResin} alt={t("workshop4.title")} />
            </div>
          </div>

          {/* CONTENT */}
        <div className="workshop-content">
  <div className="content-card full">
    <h3>{t("workshop4.forWho.title")}</h3>
    <p>{t("workshop4.forWho.desc")}</p>
  </div>
</div>

          {/* PRICING */}
          <div className="pricing-card" id="pricing">
            <div className="pricing-header">
              <h3>{t("workshop4.pricing.title")}</h3>
              <p>{t("workshop4.pricing.desc")}</p>
            </div>

            <div className="price-box">
              <div className="price-main">
                <span className="price-label">
                  {t("workshop4.pricing.priceLabel")}
                </span>
                <span className="price-value">
                  {t("workshop4.pricing.priceValue")}
                </span>
              </div>

              <div className="included">
                <h4>{t("workshop4.included.title")}</h4>
                <ul>
                  <li>{t("workshop4.included.i1")}</li>
                  <li>{t("workshop4.included.i2")}</li>
                  <li>{t("workshop4.included.i3")}</li>
                  <li>{t("workshop4.included.i4")}</li>
                </ul>
              </div>

              <div className="group-sale">
                <h4>{t("workshop4.groupSale.title")}</h4>
                <ul>
                  <li>{t("workshop4.groupSale.g1")}</li>
                  <li>{t("workshop4.groupSale.g2")}</li>
                  <li>{t("workshop4.groupSale.g3")}</li>
                </ul>
              </div>
            </div>

            <div className="booking" id="booking">
              <a className="btn-primary full" href="#">
                {t("workshop4.actions.book")}
              </a>

              <p className="note">{t("workshop4.note")}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Workshop4;
import React from "react";
import { useTranslation } from "react-i18next";

import Header from "../../../layout/Header/Header";
import Footer from "../../../layout/Footer/Footer";
import BannerWorkshop from "../../../layout/BannerWorkShop/BannerWorkShop";
import "./Workshop2.scss";

import imgAcrylic from "../../../assets/images/product2.jpg";

const Workshop2 = () => {
  const { t } = useTranslation();

  const facebookLink = "https://www.facebook.com/profile.php?id=61583373132344";

  return (
    <>
      <Header />
      <BannerWorkshop />

      <section className="workshop-page">
        <div className="workshop-container">
          {/* HERO */}
          <div className="workshop-hero">
            <div className="hero-left">
              <span className="hero-badge">{t("workshopAcrylic.badge")}</span>

              <h2 className="hero-title">{t("workshopAcrylic.title")}</h2>

              <p className="hero-desc">{t("workshopAcrylic.desc")}</p>

              <div className="hero-highlights">
                <div className="highlight-item">
                  <span className="dot" />
                  <p>{t("workshopAcrylic.duration")}</p>
                </div>
                <div className="highlight-item">
                  <span className="dot" />
                  <p>{t("workshopAcrylic.age")}</p>
                </div>
                <div className="highlight-item">
                  <span className="dot" />
                  <p>{t("workshopAcrylic.takeHome")}</p>
                </div>
              </div>

              <div className="hero-actions">
                <a
                  className="btn-primary"
                  href={facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("workshopAcrylic.bookNow")}
                </a>

                <a className="btn-secondary" href="#pricing">
                  {t("workshopAcrylic.viewPrice")}
                </a>
              </div>
            </div>

            <div className="hero-right">
              <img src={imgAcrylic} alt={t("workshopAcrylic.title")} />
            </div>
          </div>

          {/* CONTENT */}
          <div className="workshop-content">
            <div className="content-card">
              <h3>{t("workshopAcrylic.introTitle")}</h3>
              <p>{t("workshopAcrylic.introDesc1")}</p>
              <p>{t("workshopAcrylic.introDesc2")}</p>
            </div>

            <div className="content-card">
              <h3>{t("workshopAcrylic.fitTitle")}</h3>
              <ul>
                <li>{t("workshopAcrylic.fit1")}</li>
                <li>{t("workshopAcrylic.fit2")}</li>
                <li>{t("workshopAcrylic.fit3")}</li>
                <li>{t("workshopAcrylic.fit4")}</li>
              </ul>
            </div>
          </div>

          {/* PRICING */}
          <div className="pricing-card" id="pricing">
            <div className="pricing-header">
              <h3>{t("workshopAcrylic.pricingTitle")}</h3>
              <p>{t("workshopAcrylic.pricingDesc")}</p>
            </div>

            <div className="pricing-grid one">
              <div className="pricing-box">
                <div className="pricing-box-head">
                  <h4>{t("workshopAcrylic.boxTitle")}</h4>
                  <span className="tag">{t("workshopAcrylic.hot")}</span>
                </div>

                <div className="pricing-row">
                  <span>{t("workshopAcrylic.size1")}</span>
                  <span>260K</span>
                </div>
                <div className="pricing-row">
                  <span>{t("workshopAcrylic.size2")}</span>
                  <span>310K</span>
                </div>
                <div className="pricing-row">
                  <span>{t("workshopAcrylic.size3")}</span>
                  <span>360K</span>
                </div>
              </div>
            </div>

            <div className="included">
              <h4>{t("workshopAcrylic.includedTitle")}</h4>
              <ul>
                <li>{t("workshopAcrylic.inc1")}</li>
                <li>{t("workshopAcrylic.inc2")}</li>
                <li>{t("workshopAcrylic.inc3")}</li>
                <li>{t("workshopAcrylic.inc4")}</li>
              </ul>
            </div>

            <div className="group-sale">
              <h4>{t("workshopAcrylic.groupTitle")}</h4>
              <ul>
                <li>{t("workshopAcrylic.group1")}</li>
                <li>{t("workshopAcrylic.group2")}</li>
                <li>{t("workshopAcrylic.group3")}</li>
                <li>{t("workshopAcrylic.group4")}</li>
              </ul>
            </div>

            <div className="booking">
              <a
                className="btn-primary full"
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("workshopAcrylic.bookNow")}
              </a>

              <p className="note">{t("workshopAcrylic.note")}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Workshop2;
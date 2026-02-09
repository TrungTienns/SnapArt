import React from "react";
import { useTranslation } from "react-i18next";

import Header from "../../../layout/Header/Header";
import Footer from "../../../layout/Footer/Footer";
import BannerWorkshop from "../../../layout/BannerWorkShop/BannerWorkShop";
import "./Workshop3.scss";

import imgTote from "../../../assets/images/totepaiting.jpg";

const Workshop3 = () => {
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
              <span className="hero-badge">{t("workshopTote.badge")}</span>

              <h2 className="hero-title">{t("workshopTote.title")}</h2>

              <p className="hero-desc">{t("workshopTote.desc")}</p>

              <div className="hero-highlights">
                <div className="highlight-item">
                  <span className="dot" />
                  <p>{t("workshopTote.highlight1")}</p>
                </div>
                <div className="highlight-item">
                  <span className="dot" />
                  <p>{t("workshopTote.highlight2")}</p>
                </div>
                <div className="highlight-item">
                  <span className="dot" />
                  <p>{t("workshopTote.highlight3")}</p>
                </div>
              </div>

              <div className="hero-actions">
                <a
                  className="btn-primary"
                  href={facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("workshopTote.bookNow")}
                </a>

                <a className="btn-secondary" href="#pricing">
                  {t("workshopTote.viewPrice")}
                </a>
              </div>
            </div>

            <div className="hero-right">
              <img src={imgTote} alt={t("workshopTote.title")} />
            </div>
          </div>

          {/* CONTENT */}
          <div className="workshop-content">
            <div className="content-card">
              <h3>{t("workshopTote.learnTitle")}</h3>
              <ul>
                <li>{t("workshopTote.learn1")}</li>
                <li>{t("workshopTote.learn2")}</li>
                <li>{t("workshopTote.learn3")}</li>
                <li>{t("workshopTote.learn4")}</li>
              </ul>
            </div>

            <div className="content-card">
              <h3>{t("workshopTote.fitTitle")}</h3>
              <p>{t("workshopTote.fitDesc")}</p>
            </div>
          </div>

          {/* PRICING */}
          <div className="pricing-card" id="pricing">
            <div className="pricing-header">
              <h3>{t("workshopTote.pricingTitle")}</h3>
              <p>{t("workshopTote.pricingDesc")}</p>
            </div>

            <div className="price-box">
              <div className="price-main">
                <span className="price-label">{t("workshopTote.priceLabel")}</span>
                <span className="price-value">{t("workshopTote.priceValue")}</span>
              </div>

              <div className="included">
                <h4>{t("workshopTote.includedTitle")}</h4>
                <ul>
                  <li>{t("workshopTote.inc1")}</li>
                  <li>{t("workshopTote.inc2")}</li>
                  <li>{t("workshopTote.inc3")}</li>
                  <li>{t("workshopTote.inc4")}</li>
                </ul>
              </div>

              <div className="group-sale">
                <h4>{t("workshopTote.groupTitle")}</h4>
                <ul>
                  <li>{t("workshopTote.group1")}</li>
                  <li>{t("workshopTote.group2")}</li>
                  <li>{t("workshopTote.group3")}</li>
                  <li>{t("workshopTote.group4")}</li>
                </ul>
              </div>
            </div>

            <div className="booking" id="booking">
              <a
                className="btn-primary full"
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("workshopTote.bookNow")}
              </a>

              <p className="note">{t("workshopTote.note")}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Workshop3;
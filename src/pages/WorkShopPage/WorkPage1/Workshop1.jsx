import React from "react";
import { useTranslation } from "react-i18next";

import Header from "../../../layout/Header/Header";
import Footer from "../../../layout/Footer/Footer";
import BannerWorkshop from "../../../layout/BannerWorkShop/BannerWorkShop";
import "./Workshop1.scss";

import imgSand from "../../../assets/images/sand_pictures.jpg";

const Workshop1 = () => {
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
              <span className="hero-badge">{t("workshopSand.badge")}</span>

              <h2 className="hero-title">{t("workshopSand.title")}</h2>

              <p className="hero-desc">{t("workshopSand.desc")}</p>

              <div className="hero-highlights">
                <div className="highlight-item">
                  <span className="dot" />
                  <p>{t("workshopSand.duration")}</p>
                </div>
                <div className="highlight-item">
                  <span className="dot" />
                  <p>{t("workshopSand.level")}</p>
                </div>
                <div className="highlight-item">
                  <span className="dot" />
                  <p>{t("workshopSand.takeHome")}</p>
                </div>
              </div>

              <div className="hero-actions">
                <a
                  className="btn-primary"
                  href={facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("workshopSand.bookNow")}
                </a>
                <a className="btn-secondary" href="#pricing">
                  {t("workshopSand.viewPrice")}
                </a>
              </div>
            </div>

            <div className="hero-right">
              <img src={imgSand} alt={t("workshopSand.title")} />
            </div>
          </div>

          {/* CONTENT */}
          <div className="workshop-content">
            <div className="content-card">
              <h3>{t("workshopSand.introTitle")}</h3>
              <p>{t("workshopSand.introDesc1")}</p>
              <p>{t("workshopSand.introDesc2")}</p>
            </div>

            <div className="content-card">
              <h3>{t("workshopSand.fitTitle")}</h3>
              <ul>
                <li>{t("workshopSand.fit1")}</li>
                <li>{t("workshopSand.fit2")}</li>
                <li>{t("workshopSand.fit3")}</li>
                <li>{t("workshopSand.fit4")}</li>
              </ul>
            </div>
          </div>

          {/* PRICING */}
          <div className="pricing-card" id="pricing">
            <div className="pricing-header">
              <h3>{t("workshopSand.pricingTitle")}</h3>
              <p>{t("workshopSand.pricingDesc")}</p>
            </div>

            <div className="pricing-grid">
              <div className="pricing-box">
                <div className="pricing-box-head">
                  <h4>{t("workshopSand.box1Title")}</h4>
                  <span className="tag">{t("workshopSand.box1Tag")}</span>
                </div>

                <div className="pricing-row"><span>20x30</span><span>290K</span></div>
                <div className="pricing-row"><span>30x30</span><span>340K</span></div>
                <div className="pricing-row"><span>30x40</span><span>390K</span></div>
              </div>

              <div className="pricing-box">
                <div className="pricing-box-head">
                  <h4>{t("workshopSand.box2Title")}</h4>
                  <span className="tag tag-soft">{t("workshopSand.box2Tag")}</span>
                </div>

                <div className="pricing-row"><span>20x20</span><span>300K</span></div>
                <div className="pricing-row"><span>25x25</span><span>360K</span></div>
                <div className="pricing-row"><span>20x30</span><span>360K</span></div>
              </div>
            </div>

            <div className="included">
              <h4>{t("workshopSand.includedTitle")}</h4>
              <ul>
                <li>{t("workshopSand.inc1")}</li>
                <li>{t("workshopSand.inc2")}</li>
                <li>{t("workshopSand.inc3")}</li>
                <li>{t("workshopSand.inc4")}</li>
              </ul>
            </div>

            <div className="group-sale">
              <h4>{t("workshopSand.groupTitle")}</h4>
              <ul>
                <li>{t("workshopSand.group1")}</li>
                <li>{t("workshopSand.group2")}</li>
                <li>{t("workshopSand.group3")}</li>
                <li>{t("workshopSand.group4")}</li>
              </ul>
            </div>

            <div className="booking">
              <a
                className="btn-primary full"
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("workshopSand.bookNow")}
              </a>

              <p className="note">{t("workshopSand.note")}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Workshop1;
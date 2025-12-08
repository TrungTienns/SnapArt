import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../layout/BannerAboutUs/BannerAboutUs.scss";

import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import "./AboutPage.scss";

import img1 from "../../assets/images/aboutus_image1.jpg";
import img2 from "../../assets/images/aboutus_image2.jpg";
import img3 from "../../assets/images/aboutus_image3.jpg";
import img4 from "../../assets/images/aboutus_image4.jpg";
import BannerAboutUs from "../../layout/BannerAboutUs/BannerAboutUs";

const images = [img1, img2, img3, img4];

function AboutPage() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-in-out", once: true });
  }, []);

  const infoItems = [
    {
      number: "1.",
      title: t("aboutPage.section1.title"),
      description: t("aboutPage.section1.desc"),
    },
    {
      number: "2.",
      title: t("aboutPage.section2.title"),
      description: t("aboutPage.section2.desc"),
    },
    {
      number: "3.",
      title: t("aboutPage.section3.title"),
      description: t("aboutPage.section3.desc"),
    },
    {
      number: "4.",
      title: t("aboutPage.section4.title"),
      description: t("aboutPage.section4.desc"),
    },
  ];

  return (
    <div>
      <Header />
      <BannerAboutUs />

      <main className="about-page">
        {/* Hero */}
        <section className="about-hero" data-aos="fade-down">
          <div className="hero-content">
            <h1>{t("aboutPage.heroTitle")}</h1>
            <p>{t("aboutPage.heroDesc")}</p>
          </div>
        </section>

        {/* Article blocks */}
        <section className="about-article">
          {infoItems.map((item, index) => (
            <div
              className={`article-block ${
                index % 2 === 0 ? "left-image" : "right-image"
              }`}
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="article-image">
                <img src={images[index]} alt={item.title} />
              </div>

              <div className="article-text">
                <span className="article-number">{item.number}</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Ending Section */}
        <section className="about-ending" data-aos="fade-up">
          <h2>{t("aboutPage.endingTitle")}</h2>
          <p>{t("aboutPage.endingDesc")}</p>
          <a href="https://www.facebook.com/profile.php?id=61583373132344" className="cta-button">
            {t("aboutPage.cta")}
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AboutPage;
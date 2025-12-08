import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutUs.scss';

import img1 from '../../assets/images/aboutus_image1.jpg';
import img2 from '../../assets/images/aboutus_image2.jpg';
import img3 from '../../assets/images/aboutus_image3.jpg';
import img4 from '../../assets/images/aboutus_image4.jpg';

import { useTranslation } from 'react-i18next';

const images = [img1, img2, img3, img4];

const AboutUs = () => {
  const { t } = useTranslation();

  // ✅ ĐÚNG KEY MỚI: aboutHome.info
  const infoItems = t('aboutHome.info', { returnObjects: true });

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <section className="about-us-section">
      <div className="about-us__container">

        {/* Header */}
        <div className="about-us__header" data-aos="fade-down">
          <div className="header__text">
            <h2>{t('aboutHome.title')}</h2>

            <p>
              {t('aboutHome.desc1')} <br />
              <span className="values-highlight">
                {t('aboutHome.values')}
              </span>
            </p>
          </div>

          <a href="/about" className="learn-more-btn">
            {t('aboutHome.more')}
          </a>
        </div>

        {/* Main Content */}
        <div className="about-us__main-content">

          {/* Info Grid */}
          <div className="about-us__info-grid" data-aos="fade-right">
            {Array.isArray(infoItems) &&
              infoItems.map((item, index) => (
                <div className="info-item" key={index}>
                  <div className="info-item__number">{item.number}</div>

                  <div className="info-item__content">
                    <h3 className="info-item__title">{item.title}</h3>
                    <p className="info-item__description">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>

          {/* Image Grid */}
          <div className="about-us__image-grid" data-aos="fade-left">
            {images.map((img, index) => (
              <div className={`image-wrapper size-${index + 1}`} key={index}>
                <img
                  src={img}
                  alt={`About us ${index + 1}`}
                  className="image-grid__item"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
// src/components/Benefit/Benefit.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Benefit.scss';

import aboutus1 from '../../assets/images/aboutus_image1.jpg';
import aboutus2 from '../../assets/images/aboutus_image2.jpg';
import aboutus3 from '../../assets/images/aboutus_image3.jpg';
import aboutus4 from '../../assets/images/aboutus_image4.jpg';

import { useTranslation } from 'react-i18next';

const Benefit = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  let benefits = t('benefit.items', { returnObjects: true });

  // ✅ CHỐNG CRASH 100%
  if (!Array.isArray(benefits)) {
    benefits = [];
  }

  const images = [aboutus1, aboutus2, aboutus3, aboutus4];
  const aosList = ['fade-right', 'fade-up', 'fade-left', 'fade-up'];

  return (
    <section className="benefit-section">
      <div className="benefit-header" data-aos="zoom-in">
        <h2>{t('benefit.title')}</h2>
        <p>{t('benefit.desc')}</p>
      </div>

      <div className="benefit-grid">
        {benefits.map((b, index) => (
          <div
            className={`benefit-card card-${index + 1}`}
            key={index}
            data-aos={aosList[index]}
          >
            <img src={images[index]} alt={b.title} />
            <div className="benefit-content">
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefit;
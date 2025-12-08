import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './BannerAboutUs.scss';

import bannerImage from '../../assets/images/bannerabout_us1.jpg';
import { useTranslation } from 'react-i18next';

function BannerAboutUs() {
  const { t } = useTranslation(); // ✅ i18n

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  const handleClick = () => {
    window.open('https://www.facebook.com/profile.php?id=61583373132344', '_blank');
  };

  return (
    <section
      className="banner-aboutus"
      style={{ backgroundImage: `url(${bannerImage})` }}
      data-aos="fade-in"
    >
      <div className="banner-overlay"></div>

      <div className="banner-content">
        <h1>{t('bannerAbout.title')}</h1>
        <p>{t('bannerAbout.desc')}</p>

        <button className="banner-button" onClick={handleClick}>
          {t('bannerAbout.button')}
        </button>
      </div>
    </section>
  );
}

export default BannerAboutUs;
import React from 'react';
import { useTranslation } from 'react-i18next';
import './BannerContact.scss';

import bannerImage from '../../assets/images/contact_banner.jpg';

const BannerContact = () => {
  const { t } = useTranslation();

  return (
    <section
      className="banner-contact"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <h1>{t('contactBanner.title')}</h1>
        <p>{t('contactBanner.description')}</p>
      </div>
    </section>
  );
};

export default BannerContact;
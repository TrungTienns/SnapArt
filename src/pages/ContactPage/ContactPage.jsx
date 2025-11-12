import React from 'react';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import './ContactPage.scss';
import Contact from '../../layout/Contact/Contact';
import BannerAboutUs from '../../layout/BannerAboutUs/BannerAboutUs';
import '../../layout/BannerAboutUs/BannerAboutUs.scss';
import BannerContact from '../../layout/BannerContact/BannerContact';
import '../../layout/BannerContact/BannerContact.scss';

function ContactPage() {
  return (
    <div className="contactpage">
      <Header />
      <BannerContact />
      <Contact />
        <Footer />
    </div>
  );
}

export default ContactPage;
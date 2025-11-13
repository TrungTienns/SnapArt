import React from 'react';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import './ContactPage.scss';
import Contact from '../../layout/Rating/Rating';
import '../../layout/BannerAboutUs/BannerAboutUs.scss';
import BannerContact from '../../layout/BannerContact/BannerContact';
import '../../layout/BannerContact/BannerContact.scss';
import AllRating from '../../layout/AllRating/AllRating';

function ContactPage() {
  return (
    <div className="contactpage">
      <Header />
      <BannerContact />
      <AllRating />
      <Contact />
      <Footer />
    </div>
  );
}

export default ContactPage;
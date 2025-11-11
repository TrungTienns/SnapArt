import React from 'react';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import Banner from '../../layout/Banner/Banner';
import './HomePage.scss';
import AboutUs from '../../layout/AboutUs/AboutUs';

function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <Banner />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default HomePage;
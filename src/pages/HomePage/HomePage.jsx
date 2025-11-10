import React from 'react';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import Banner from '../../layout/Banner/Banner';
import './HomePage.scss';

function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <div className="page-container">
        <Banner />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;

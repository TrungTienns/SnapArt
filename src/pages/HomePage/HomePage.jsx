import React from 'react';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import Banner from '../../layout/Banner/Banner';
import './HomePage.scss';
import AboutUs from '../../layout/AboutUs/AboutUs';
import Benefit from '../../layout/Benefit/Benefit';
import Contact from '../../layout/Contact/Contact.jsx';
import Blog from '../../layout/Blog/Blog.jsx';
import WorkShopProduct from '../../layout/WorkShopProduct/WorkShopProduct.jsx';
function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <Banner />
      <AboutUs />
      <Benefit />
      <Contact />
      <Blog />
      <WorkShopProduct />
      <Footer />
    </div>
  );
}

export default HomePage;
import React, { useRef } from 'react';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import Banner from '../../layout/Banner/Banner';
import './HomePage.scss';
import AboutUs from '../../layout/AboutUs/AboutUs';
import Benefit from '../../layout/Benefit/Benefit';
import Contact from '../../layout/Rating/Rating.jsx';
import Blog from '../../layout/Blog/Blog.jsx';
import WorkShopProduct from '../../layout/WorkShopProduct/WorkShopProduct.jsx';
import AllRating from '../../layout/AllRating/AllRating.jsx';

function HomePage() {
  const footerRef = useRef(null);

  return (
    <div className="homepage">

      <Header footerRef={footerRef} />
      <Banner />
      <AboutUs />
      <Benefit />
      <Blog />
      {/* <WorkShopProduct /> */}
      <Contact />
      <AllRating />
      <Footer ref={footerRef} />
    </div>
  );
}

export default HomePage;
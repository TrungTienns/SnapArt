import React from 'react';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import BannerWorkshop from '../../layout/BannerWorkShop/BannerWorkShop';
import Products from '../../layout/Products/Products';

const WorkshopPage = () => {
    return (
        <div className="workshop-page">
            <Header />
            <BannerWorkshop />
            <Products typeFilter="workshop" basePath="/workshop" skipCategories={true} />
            <Footer />
        </div>
    );
};

export default WorkshopPage;

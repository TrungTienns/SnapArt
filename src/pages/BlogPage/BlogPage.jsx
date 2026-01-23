import React from 'react';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import WorkshopProduct from '../../layout/WorkShopProduct/WorkShopProduct'
import BannerWorkshop from '../../layout/BannerWorkShop/BannerWorkShop';
import Blog from '../../layout/Blog/Blog';

const WorkPage = () => {
    return (
        <>
            <Header />
            <BannerWorkshop />
            <Blog />
            <Footer />
        </>
    );
};

export default WorkPage;
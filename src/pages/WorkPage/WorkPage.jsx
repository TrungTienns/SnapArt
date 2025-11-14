import React from 'react';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import WorkshopProduct from '../../layout/WorkShopProduct/WorkShopProduct'
import BannerWorkshop from '../../layout/BannerWorkShop/BannerWorkShop';
import Products from '../../layout/Products/Products';
const WorkPage = () => {
    return (
        <>
            <Header />
            <BannerWorkshop />
            <Products />
            <Footer />
        </>
    );
};

export default WorkPage;
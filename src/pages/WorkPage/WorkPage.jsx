import React from 'react';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import WorkshopProduct from '../../layout/WorkShopProduct/WorkShopProduct'
import BannerWorkshop from '../../layout/BannerWorkShop/BannerWorkShop';

const WorkPage = () => {
    return (
        <>
            <Header />
            <BannerWorkshop />
            <WorkshopProduct />
            <Footer />
        </>
    );
};

export default WorkPage;
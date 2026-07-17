import React from 'react';
import Footer from '../../layout/Footer/Footer';
import Products from '../../layout/Products/Products';

const CategoriesPage = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <Products typeFilter="physical" />
            <Footer />
        </div>
    );
};

export default CategoriesPage;

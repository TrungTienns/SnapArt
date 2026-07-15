import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import productService from '../../services/productService';
import './ProductGrid.scss';

const ProductGrid = () => {
  const { t, i18n } = useTranslation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getAll();
        setProducts(data);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="product-grid-loading">Loading amazing artworks...</div>;
  }

  if (error) {
    return <div className="product-grid-error">Error: {error}</div>;
  }

  const physicalProducts = products.filter(p => p.product_type !== 'workshop');
  const workshops = products.filter(p => p.product_type === 'workshop');

  const renderProductCard = (product) => (
    <div key={product.product_id} className="product-card">
      <div className="product-image-placeholder">
          <img 
            src={product.image_url || `https://picsum.photos/seed/${product.product_id}/400/400`} 
            alt={product.name} 
          />
      </div>
      <div className="product-info">
        <h3 className="product-name">{i18n.language === 'en' && product.name_en ? product.name_en : product.name}</h3>
        {product.product_type !== 'workshop' && (
          <p className="product-material">{i18n.language === 'en' && product.material_en ? product.material_en : (product.material || 'Mixed Media')}</p>
        )}
        {product.product_type === 'workshop' && product.metadata && (
          <p className="product-material">{product.metadata.duration || 'Workshop'}</p>
        )}
        <div className="product-price-row">
          {product.sale_price ? (
            <>
              <span className="sale-price">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.sale_price)}</span>
              <span className="original-price">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}</span>
            </>
          ) : (
            <span className="price">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}</span>
          )}
        </div>
        <button className="add-to-cart-btn">
          {product.product_type === 'workshop' ? (i18n.language === 'en' ? 'Book Now' : 'Đặt lịch ngay') : (i18n.language === 'en' ? 'View Details' : 'Xem chi tiết')}
        </button>
      </div>
    </div>
  );

  return (
    <div className="product-grid-container">
      {physicalProducts.length > 0 && (
        <>
          <h2 className="product-grid-title">{i18n.language === 'en' ? 'Featured Artworks' : 'Tác phẩm nổi bật'}</h2>
          <div className="product-grid">
            {physicalProducts.map(renderProductCard)}
          </div>
        </>
      )}

      {workshops.length > 0 && (
        <>
          <h2 className="product-grid-title" style={{ marginTop: '4rem' }}>{i18n.language === 'en' ? 'Art Workshops' : 'Workshop Nghệ thuật'}</h2>
          <div className="product-grid">
            {workshops.map(renderProductCard)}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductGrid;

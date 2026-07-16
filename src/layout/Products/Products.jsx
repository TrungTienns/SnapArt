// src/layout/Products/Products.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import productService from "../../services/productService";
import "./Products.scss";

export default function Products() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getAll();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const getPriceText = (product) => {
    const price = product.sale_price || product.price;
    if (!price) return "";
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const getProductName = (product) => {
    if (i18n.language === 'en' && product.name_en) {
      return product.name_en;
    }
    return product.name;
  };

  return (
    <section className="products-section">
      <h2 className="products-title">{t("products.title")}</h2>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px' }}>Loading products...</div>
      ) : products.length > 0 ? (
        <div className="products-grid">
          {products.map((item) => (
            <div
              className="product-card"
              key={item.product_id}
              onClick={() => navigate(`/product/${item.product_id}`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") navigate(`/product/${item.product_id}`);
              }}
            >
              {/* Title */}
              <h3 className="product-name">{getProductName(item)}</h3>

              {/* Ảnh + overlay */}
              <div className="product-image">
                <div className={`product-badge ${item.product_type === 'workshop' ? 'badge-workshop' : 'badge-physical'}`}>
                  {item.product_type === 'workshop' ? 'Workshop' : 'Art Item'}
                </div>
                
                <img src={item.image_url || `https://picsum.photos/seed/${item.product_id}/400/400`} alt={getProductName(item)} loading="lazy" />

                <div className="product-image-overlay">
                  <div className="overlay-pill">
                    <span className="overlay-icon">✨</span>
                    <span className="overlay-text">
                      {t("products.clickToView")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="product-info-bottom">
                <div className="product-price-wrap">
                  <span className="price-label">Giá từ:</span>
                  <span className="product-price">{getPriceText(item)}</span>
                </div>

                <button
                  className="product-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open("https://www.facebook.com/profile.php?id=61583373132344", "_blank");
                  }}
                >
                  {t("products.bookButton")}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '40px', color: '#6b7280' }}>
          Chưa có sản phẩm nào được tải lên.
        </div>
      )}

      {/* Ghi chú nhỏ */}
      <p className="products-note">
        ✨ Giá đã bao gồm hoạ cụ, nước + snacks, tripod dùng chung và nhân viên hỗ trợ.
      </p>
    </section>
  );
}
// src/pages/ProductDetail/ProductDetail.jsx
import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DOMPurify from 'dompurify';
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import productService from "../../services/productService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUsers, faPalette, faRuler, faBoxOpen, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";

import "./ProductDetail.scss";
import Products from '../../layout/Products/Products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await productService.getById(id);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchProduct();
  }, [id]);

  const formatPrice = (value) => {
    if (!value) return "";
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
  };

  if (loading) {
    return (
      <div className="product-detail-page">
        <Header />
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-detail-page">
        <Header />
        <div className="error-container">
          <h2>Product not found</h2>
          <button onClick={() => navigate("/")} className="back-home-btn">Quay lại trang chủ</button>
        </div>
        <Footer />
      </div>
    );
  }

  const isEnglish = i18n.language === "en";
  const title = (isEnglish && product.name_en) ? product.name_en : product.name;
  const description = (isEnglish && product.description_en) ? product.description_en : product.description;
  const material = (isEnglish && product.material_en) ? product.material_en : product.material;
  const priceToDisplay = product.sale_price || product.price;

  let metadata = {};
  if (product.metadata) {
    try {
      metadata = typeof product.metadata === 'string' ? JSON.parse(product.metadata) : product.metadata;
    } catch (e) {
      console.error("Error parsing metadata");
    }
  }

  const targetAudience = (isEnglish && metadata.target_audience_en) ? metadata.target_audience_en : metadata.target_audience;
  const takeaway = (isEnglish && metadata.takeaway_en) ? metadata.takeaway_en : metadata.takeaway;
  const duration = metadata.duration;

  return (
    <div className="product-detail-page">
      <Header />

      <section className="detail-section">
        <div className="detail-container" data-aos="fade-up">
          
          <div className="product-top-section">
            <div className="product-image-col" data-aos="fade-right">
              <img src={product.image_url || `https://picsum.photos/seed/${product.product_id}/800/500`} alt={title} />
            </div>
            
            <div className="product-info-col info-card-combined" data-aos="fade-left" data-aos-delay="100">
              <div className="detail-header">
                <span className={`badge ${product.product_type === 'workshop' ? 'badge-workshop' : 'badge-physical'}`}>
                  {product.product_type === 'workshop' ? (isEnglish ? 'Workshop' : 'Workshop') : (isEnglish ? 'Art Item' : 'Sản phẩm')}
                </span>
                <h1 className="detail-title">{title}</h1>
                <div className="price-tag">
                  <span className="price-label">{t("products.price_label") || "Giá từ"}: </span>
                  <span className="price-value">{formatPrice(priceToDisplay)}</span>
                  {product.sale_price && <span className="price-original">{formatPrice(product.price)}</span>}
                </div>
              </div>

              <div className="info-section">
                <h3>{isEnglish ? "Information" : "Thông tin chi tiết"}</h3>
                <ul className="info-list">
                  {product.product_type === 'workshop' ? (
                    <>
                      {duration && (
                        <li>
                          <FontAwesomeIcon icon={faClock} className="info-icon" />
                          <div>
                            <strong>{isEnglish ? "Duration:" : "Thời lượng:"}</strong>
                            <span>{duration}</span>
                          </div>
                        </li>
                      )}
                      {targetAudience && (
                        <li>
                          <FontAwesomeIcon icon={faUsers} className="info-icon" />
                          <div>
                            <strong>{isEnglish ? "Target Audience:" : "Phù hợp với:"}</strong>
                            <span>{targetAudience}</span>
                          </div>
                        </li>
                      )}
                      {takeaway && (
                        <li>
                          <FontAwesomeIcon icon={faBoxOpen} className="info-icon" />
                          <div>
                            <strong>{isEnglish ? "Takeaway:" : "Thành phẩm:"}</strong>
                            <span>{takeaway}</span>
                          </div>
                        </li>
                      )}
                    </>
                  ) : (
                    <>
                      {product.size && (
                        <li>
                          <FontAwesomeIcon icon={faRuler} className="info-icon" />
                          <div>
                            <strong>{isEnglish ? "Size:" : "Kích thước:"}</strong>
                            <span>{product.size}</span>
                          </div>
                        </li>
                      )}
                      {material && (
                        <li>
                          <FontAwesomeIcon icon={faPalette} className="info-icon" />
                          <div>
                            <strong>{isEnglish ? "Material:" : "Chất liệu:"}</strong>
                            <span>{material}</span>
                          </div>
                        </li>
                      )}
                    </>
                  )}
                </ul>
                
                <div className="action-buttons">
                  {product.product_type === 'workshop' ? (
                    <button className="btn-primary" onClick={() => navigate(`/booking?type=${encodeURIComponent(title)}`)}>
                      <FontAwesomeIcon icon={faCartPlus} /> {t("products.bookSchedule") || "Đặt lịch"}
                    </button>
                  ) : (
                    <button className="btn-primary" onClick={() => addToCart(product)}>
                      <FontAwesomeIcon icon={faCartPlus} /> {isEnglish ? "Add to Cart" : "Thêm vào giỏ"}
                    </button>
                  )}
                </div>

                <div className="detail-note">
                  {product.product_type === 'workshop' 
                    ? "✨ " + (isEnglish ? "Price includes art supplies, drinks, snacks, shared tripod and staff support." : "Giá đã bao gồm hoạ cụ, nước + snacks, tripod dùng chung và nhân viên hỗ trợ.")
                    : "✨ " + (isEnglish ? "Price includes packaging and standard shipping." : "Giá đã bao gồm phí đóng gói tiêu chuẩn.")}
                </div>
              </div>
            </div>
          </div>

          <div className="product-bottom-section" data-aos="fade-up" data-aos-delay="200">
            <div className="detail-main-content">
              <h3 className="section-title">{isEnglish ? "Description" : "Mô tả chi tiết"}</h3>
              <div 
                className="rich-text-content"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }} 
              />
            </div>

            {product.product_type === 'workshop' && (
              <div className="detail-main-content">
                <div className="workshop-generic-notes" style={{ padding: '24px', backgroundColor: '#fff6f6', borderRadius: '16px', borderLeft: '5px solid #ff9994', height: '100%' }}>
                  <h4 style={{ color: '#ff9994', marginBottom: '16px', fontSize: '1.2rem', fontWeight: 'bold' }}>
                    {t('workshop4.groupSale.title') || "📝 Lưu ý"}
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: 1.8, color: '#475569' }}>
                    <li>{t('workshop4.groupSale.g1') || "• Nhóm 3 người 👉 giảm 10%"}</li>
                    <li>{t('workshop4.groupSale.g2') || "• Nhóm 4 người 👉 giảm 15%"}</li>
                    <li>{t('workshop4.groupSale.g3') || "• 2 người làm chung 1 sản phẩm 👉 phụ thu +150K"}</li>
                    <li>{t('workshop4.groupSale.g4') || "• Chưa hoàn thành trong ngày 👉 lần sau quay lại hoàn thiện phụ thu 50K."}</li>
                  </ul>
                  <p style={{ marginTop: '16px', fontStyle: 'italic', color: '#64748b' }}>
                    {t('workshop4.note') || "* Bạn có thể inbox để được tư vấn thêm & lịch học phù hợp."}
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {product.product_type === 'workshop' && (
        <div style={{ backgroundColor: '#faf9f6' }}>
          <Products typeFilter="workshop" customTitle={isEnglish ? "You might also like" : "Có lẽ bạn sẽ thích"} />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetail;

import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CartContext } from '../../context/CartContext';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faMinus, faPlus, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import productService from '../../services/productService';
import './CartPage.scss';

const CartPage = () => {
    const { t, i18n } = useTranslation();
    const { cart, removeFromCart, updateQuantity, getCartTotal } = useContext(CartContext);
    const navigate = useNavigate();
    
    const [recommendedProducts, setRecommendedProducts] = useState([]);

    useEffect(() => {
        const fetchRecommended = async () => {
            try {
                const data = await productService.getAll();
                // Get latest 3 products that are available (assuming higher ID or just last 3 items)
                // Filter out products currently in cart (optional, but good UX)
                const cartIds = cart.map(c => c.product_id);
                const available = data.filter(p => !cartIds.includes(p.product_id));
                // Sort by ID descending (simulating latest)
                available.sort((a, b) => b.product_id - a.product_id);
                setRecommendedProducts(available.slice(0, 3));
            } catch (err) {
                console.error("Lỗi lấy sản phẩm gợi ý:", err);
            }
        };
        fetchRecommended();
    }, [cart]);

    const formatPrice = (value) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(value || 0).replace('$', '$'); 
        // Note: The design has $1,200. But if the app uses VND, we should stick to VND format.
        // I will stick to VND since the app is Vietnamese-first.
    };
    
    const formatVND = (value) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
    };

    return (
        <div className="cart-page">
            <Header />
            <main className="cart-container">
                <div className="cart-header-section">
                    <h1 className="cart-title">{t('cart.title')}</h1>
                    <div className="cart-progress-bar">
                        <div className="step active">
                            <div className="step-circle">1</div>
                            <span className="step-label">{t('cart.step1')}</span>
                        </div>
                        <div className="step-line"></div>
                        <div className="step">
                            <div className="step-circle">2</div>
                            <span className="step-label">{t('cart.step2')}</span>
                        </div>
                        <div className="step-line"></div>
                        <div className="step">
                            <div className="step-circle">3</div>
                            <span className="step-label">{t('cart.step3')}</span>
                        </div>
                    </div>
                </div>
                
                {cart.length === 0 ? (
                    <div className="empty-cart">
                        <p>{t('cart.empty')}</p>
                        <Link to="/collection" className="btn-continue-shopping">
                            {t('cart.continueShopping')}
                        </Link>
                    </div>
                ) : (
                    <div className="cart-layout">
                        <div className="cart-main-col">
                            <div className="cart-table">
                                <div className="table-head">
                                    <span className="col-info">{t('cart.colInfo')}</span>
                                    <div className="col-actions-header">
                                        <span className="col-qty-header">{t('cart.colQty')}</span>
                                        <span className="col-price-header">{t('cart.colPrice')}</span>
                                    </div>
                                </div>
                                
                                {cart.map(item => {
                                    let metadata = {};
                                    try {
                                        metadata = typeof item.metadata === 'string' ? JSON.parse(item.metadata) : item.metadata;
                                    } catch(e) {}
                                    
                                    return (
                                        <div key={item.product_id} className="table-row">
                                            <div className="col-info">
                                                <div className="img-wrapper">
                                                    <img src={item.image_url || `https://picsum.photos/seed/${item.product_id}/800/500`} alt={item.name} />
                                                </div>
                                                <div className="item-details">
                                                    <Link to={`/products/${item.product_id}`} className="item-name">
                                                        {i18n.language === 'en' ? (item.name_en || item.name) : item.name}
                                                    </Link>
                                                    <div className="item-meta">
                                                        {item.material && (
                                                            <div className="meta-line">
                                                                <span className="meta-label">Chất liệu:</span>
                                                                <span className="meta-val">{i18n.language === 'en' ? (item.material_en || item.material) : item.material}</span>
                                                            </div>
                                                        )}
                                                        {item.size && (
                                                            <div className="meta-line">
                                                                <span className="meta-label">Size:</span>
                                                                <span className="meta-val">{item.size}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-actions-wrapper">
                                                <div className="qty-controls">
                                                    <button onClick={() => updateQuantity(item.product_id, -1)}><FontAwesomeIcon icon={faMinus}/></button>
                                                    <span>{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.product_id, 1)}><FontAwesomeIcon icon={faPlus}/></button>
                                                </div>
                                                
                                                <div className="price-and-remove">
                                                    <span className="price-val">{formatVND((item.sale_price || item.price) * item.quantity)}</span>
                                                    <button className="btn-remove" onClick={() => removeFromCart(item.product_id)}>
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="cart-sidebar">
                            <div className="summary-box">
                                <h3>{t('cart.summaryTitle')}</h3>
                                
                                <div className="summary-line">
                                    <span className="s-label">{t('cart.subtotal')}</span>
                                    <span className="s-val">{formatVND(getCartTotal())}</span>
                                </div>
                                
                                <div className="summary-line total-line">
                                    <span className="s-label">{t('cart.total')}</span>
                                    <span className="s-val-large">{formatVND(getCartTotal())}</span>
                                </div>
                                
                                <button className="btn-secure-checkout" onClick={() => navigate('/checkout')}>
                                    {t('cart.secureCheckout')} <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                                
                                <p className="secure-note">
                                    {t('cart.checkoutNote')}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
                
                {recommendedProducts.length > 0 && (
                    <section className="recommended-section">
                        <div className="rec-header">
                            <h2>{t('cart.youMightLike')}</h2>
                            <Link to="/collection" className="view-all-link">{t('cart.viewAll')} &rarr;</Link>
                        </div>
                        <div className="rec-grid">
                            {recommendedProducts.map(p => (
                                <div className="rec-card" key={p.product_id} onClick={() => navigate(`/products/${p.product_id}`)}>
                                    <div className="rec-img">
                                        <img src={p.image_url || `https://picsum.photos/seed/${p.product_id}/800/500`} alt={p.name} />
                                    </div>
                                    <div className="rec-info">
                                        <h4>{i18n.language === 'en' ? (p.name_en || p.name) : p.name}</h4>
                                        <p className="rec-cat">{i18n.language === 'en' ? 'Artisanal Canvas' : 'Tác phẩm nghệ thuật'}</p>
                                        <p className="rec-price">{formatVND(p.sale_price || p.price)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default CartPage;

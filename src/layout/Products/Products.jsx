import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBoxOpen, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import productService from '../../services/productService';
import categoryService from '../../services/categoryService';
import './Products.scss';
import { useCart } from '../../context/CartContext';

const Products = ({ typeFilter, customTitle, basePath = '/categories', skipCategories = false }) => {
    const { t, i18n } = useTranslation();
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [priceSort, setPriceSort] = useState('default');
    const [newFilter, setNewFilter] = useState('all');
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const { slug } = useParams();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        fetchData();
    }, []);

    useEffect(() => {
        if (categories.length > 0) {
            if (slug) {
                const foundCategory = categories.find(c => c.slug === slug);
                if (foundCategory) {
                    setSelectedCategory(foundCategory);
                } else {
                    let foundSub = null;
                    categories.forEach(cat => {
                        if (cat.subcategories) {
                            const sub = cat.subcategories.find(s => s.slug === slug);
                            if (sub) foundSub = sub;
                        }
                    });
                    setSelectedCategory(foundSub || null);
                }
            } else {
                setSelectedCategory(null);
            }
        }
    }, [slug, categories]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [catRes, prodRes] = await Promise.allSettled([
                categoryService.getAll(),
                productService.getAll()
            ]);

            if (catRes.status === 'fulfilled' && prodRes.status === 'fulfilled') {
                const catData = catRes.value.data || catRes.value;
                const prodData = prodRes.value.data || prodRes.value;
                
                const filteredProds = typeFilter 
                    ? prodData.filter(p => p.product_type === typeFilter) 
                    : prodData;
                
                setProducts(filteredProds);
                setCategories(catData);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleCategoryClick = (category) => {
        navigate(`${basePath}/${category.slug}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBack = () => {
        navigate(basePath);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    };

    const handleAddToCart = (e, product) => {
        e.preventDefault(); 
        e.stopPropagation();
        addToCart(product, 1);
    };

    const handleBuyNow = (e, product) => {
        e.preventDefault(); 
        e.stopPropagation();
        addToCart(product, 1);
        navigate('/cart');
    };

    const isNewProduct = (createdAt) => {
        if (!createdAt) return false;
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        return new Date(createdAt) >= sevenDaysAgo;
    };

    const getFilteredProducts = (prodList) => {
        let filtered = [...prodList];
        
        if (newFilter === 'new') {
            filtered = filtered.filter(p => isNewProduct(p.created_at));
        }

        if (priceSort === 'asc') {
            filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        } else if (priceSort === 'desc') {
            filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        }

        return filtered;
    };

    if (loading) {
        return (
            <div className="products-section loading">
                <div className="spinner"></div>
                <p>Loading...</p>
            </div>
        );
    }

    // View 2: Show Products of Selected Category OR All Products if skipCategories is true
    if (selectedCategory || skipCategories) {
        let categoryProducts = [];
        
        if (selectedCategory) {
            const categoryIds = [selectedCategory.category_id];
            if (selectedCategory.subcategories && selectedCategory.subcategories.length > 0) {
                selectedCategory.subcategories.forEach(sub => categoryIds.push(sub.category_id));
            }
            categoryProducts = getFilteredProducts(products.filter(p => categoryIds.includes(p.category_id)));
        } else {
            categoryProducts = getFilteredProducts(products);
        }

        return (
            <div className="products-section" id="products">
                <div className="products-container">
                    <div className="category-header">
                        {!skipCategories && (
                            <button className="back-btn" onClick={handleBack}>
                                <FontAwesomeIcon icon={faArrowLeft} /> Quay lại danh mục
                            </button>
                        )}
                        <h2 className="section-title">
                            {customTitle ? customTitle : (selectedCategory ? (i18n.language === 'en' && selectedCategory.name_en ? selectedCategory.name_en : selectedCategory.name) : t('products.title'))}
                        </h2>
                        <div className="filter-controls">
                            <select value={newFilter} onChange={(e) => setNewFilter(e.target.value)}>
                                <option value="all">Tất cả sản phẩm</option>
                                <option value="new">Hàng mới về</option>
                            </select>
                            <select value={priceSort} onChange={(e) => setPriceSort(e.target.value)}>
                                <option value="default">Giá: Mặc định</option>
                                <option value="asc">Giá: Thấp đến Cao</option>
                                <option value="desc">Giá: Cao đến Thấp</option>
                            </select>
                        </div>
                    </div>

                    {categoryProducts.length > 0 ? (
                        <div className="products-grid">
                            {categoryProducts.map((product) => (
                                <div className="product-card" key={product.product_id} data-aos="fade-up">
                                    <Link to={`/products/${product.product_id}`} className="product-link">
                                        <div className="product-image">
                                            {product.image_url ? (
                                                <img src={product.image_url} alt={product.name} />
                                            ) : (
                                                <div className="placeholder-image">
                                                    <FontAwesomeIcon icon={faBoxOpen} />
                                                </div>
                                            )}
                                            {isNewProduct(product.created_at) && (
                                                <div className="new-badge">NEW</div>
                                            )}
                                            {product.stock_quantity === 0 && (
                                                <div className="out-of-stock-badge">Hết hàng</div>
                                            )}
                                        </div>
                                        <div className="product-info">
                                            <h3>{i18n.language === 'en' && product.name_en ? product.name_en : product.name}</h3>
                                            <p className="price">{formatPrice(product.price)}</p>
                                        </div>
                                    </Link>
                                    <div className="product-actions">
                                        <button 
                                            className="buy-now-btn" 
                                            onClick={(e) => handleBuyNow(e, product)}
                                            disabled={product.stock_quantity === 0}
                                        >
                                            Buy Now
                                        </button>
                                        <button 
                                            className="add-to-cart-btn" 
                                            onClick={(e) => handleAddToCart(e, product)}
                                            disabled={product.stock_quantity === 0}
                                            title="Thêm vào giỏ"
                                        >
                                            <FontAwesomeIcon icon={faShoppingCart} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="empty-state">
                            <p>Chưa có sản phẩm nào trong danh mục này.</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
    // View 1: Show Categories
    return (
        <div className="products-section categories-view" id="products">
            <div className="products-container">
                <h2 className="section-title" data-aos="fade-up">
                    {customTitle || t('header.products', 'Danh Mục Sản Phẩm')}
                </h2>
                <div className="subtitle-divider" data-aos="fade-up">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>

                {categories.length > 0 ? (
                    <div className="categories-grid">
                        {categories.map((category, index) => (
                            <div 
                                className="category-card" 
                                key={category.category_id} 
                                data-aos="fade-up" 
                                data-aos-delay={index * 100}
                                onClick={() => handleCategoryClick(category)}
                            >
                                <div className="category-image">
                                    {category.image_url ? (
                                        <img src={category.image_url} alt={category.name} />
                                    ) : (
                                        <div className="placeholder-image">
                                            <FontAwesomeIcon icon={faBoxOpen} />
                                        </div>
                                    )}
                                    <div className="overlay">
                                        <span className="view-text">Xem Sản Phẩm</span>
                                    </div>
                                </div>
                                <div className="category-info">
                                    <h3>{i18n.language === 'en' && category.name_en ? category.name_en : category.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        <div className="filter-controls" style={{ marginBottom: '30px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
                            <select value={newFilter} onChange={(e) => setNewFilter(e.target.value)}>
                                <option value="all">Tất cả sản phẩm</option>
                                <option value="new">Hàng mới về</option>
                            </select>
                            <select value={priceSort} onChange={(e) => setPriceSort(e.target.value)}>
                                <option value="default">Giá: Mặc định</option>
                                <option value="asc">Giá: Thấp đến Cao</option>
                                <option value="desc">Giá: Cao đến Thấp</option>
                            </select>
                        </div>
                        <div className="products-grid">
                        {getFilteredProducts(products).map((product) => (
                            <div className="product-card" key={product.product_id} data-aos="fade-up">
                                <Link to={`/products/${product.product_id}`} className="product-link">
                                    <div className="product-image">
                                        {product.image_url ? (
                                            <img src={product.image_url} alt={product.name} />
                                        ) : (
                                            <div className="placeholder-image">
                                                <FontAwesomeIcon icon={faBoxOpen} />
                                            </div>
                                        )}
                                        {isNewProduct(product.created_at) && (
                                            <div className="new-badge">NEW</div>
                                        )}
                                        {product.stock_quantity === 0 && (
                                            <div className="out-of-stock-badge">Hết hàng</div>
                                        )}
                                    </div>
                                    <div className="product-info">
                                        <h3>{i18n.language === 'en' && product.name_en ? product.name_en : product.name}</h3>
                                        <p className="price">{formatPrice(product.price)}</p>
                                    </div>
                                </Link>
                                <div className="product-actions">
                                    <button 
                                        className="buy-now-btn" 
                                        onClick={(e) => handleBuyNow(e, product)}
                                        disabled={product.stock_quantity === 0}
                                    >
                                        Buy Now
                                    </button>
                                    <button 
                                        className="add-to-cart-btn" 
                                        onClick={(e) => handleAddToCart(e, product)}
                                        disabled={product.stock_quantity === 0}
                                        title="Thêm vào giỏ"
                                    >
                                        <FontAwesomeIcon icon={faShoppingCart} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Products;

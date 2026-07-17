import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CartContext } from '../../context/CartContext';
import orderService from '../../services/orderService';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import Swal from 'sweetalert2';
import axios from 'axios';
import './CheckoutPage.scss';

const CheckoutPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { cart, getCartTotal, clearCart } = useContext(CartContext);
    const [loading, setLoading] = useState(false);

    // Form data
    const [formData, setFormData] = useState({
        customer_name: '',
        customer_phone: '',
        customer_email: '',
        notes: '',
        address_detail: ''
    });

    // Address API data
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    const [selectedProvince, setSelectedProvince] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const [selectedWard, setSelectedWard] = useState(null);

    // Fetch Provinces on load
    useEffect(() => {
        if (cart.length === 0) {
            navigate('/cart'); // redirect if cart is empty
            return;
        }

        const fetchProvinces = async () => {
            try {
                const res = await axios.get('https://provinces.open-api.vn/api/p/');
                setProvinces(res.data);
            } catch (err) {
                console.error('Lỗi khi tải danh sách Tỉnh/TP', err);
            }
        };
        fetchProvinces();
    }, [cart.length, navigate]);

    // Fetch Districts when Province changes
    useEffect(() => {
        if (selectedProvince) {
            const fetchDistricts = async () => {
                try {
                    const res = await axios.get(`https://provinces.open-api.vn/api/p/${selectedProvince.code}?depth=2`);
                    setDistricts(res.data.districts);
                    setSelectedDistrict(null);
                    setWards([]);
                    setSelectedWard(null);
                } catch (err) {
                    console.error('Lỗi tải Quận/Huyện', err);
                }
            };
            fetchDistricts();
        }
    }, [selectedProvince]);

    // Fetch Wards when District changes
    useEffect(() => {
        if (selectedDistrict) {
            const fetchWards = async () => {
                try {
                    const res = await axios.get(`https://provinces.open-api.vn/api/d/${selectedDistrict.code}?depth=2`);
                    setWards(res.data.wards);
                    setSelectedWard(null);
                } catch (err) {
                    console.error('Lỗi tải Phường/Xã', err);
                }
            };
            fetchWards();
        }
    }, [selectedDistrict]);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleProvinceChange = (e) => {
        const pCode = e.target.value;
        const p = provinces.find(x => x.code == pCode);
        setSelectedProvince(p);
    };

    const handleDistrictChange = (e) => {
        const dCode = e.target.value;
        const d = districts.find(x => x.code == dCode);
        setSelectedDistrict(d);
    };

    const handleWardChange = (e) => {
        const wCode = e.target.value;
        const w = wards.find(x => x.code == wCode);
        setSelectedWard(w);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!selectedProvince || !selectedDistrict || !selectedWard || !formData.address_detail) {
            Swal.fire('Thiếu thông tin', 'Vui lòng nhập đầy đủ địa chỉ giao hàng.', 'warning');
            return;
        }

        const fullAddress = `${formData.address_detail}, ${selectedWard.name}, ${selectedDistrict.name}, ${selectedProvince.name}`;

        const orderData = {
            customer_name: formData.customer_name,
            customer_phone: formData.customer_phone,
            customer_email: formData.customer_email,
            shipping_address: fullAddress,
            notes: formData.notes,
            items: cart.map(item => ({
                product_id: item.product_id,
                quantity: item.quantity
            }))
        };

        try {
            setLoading(true);
            await orderService.createOrder(orderData);
            
            Swal.fire({
                title: 'Đặt hàng thành công!',
                text: 'Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ liên hệ lại với bạn sớm nhất.',
                icon: 'success',
                confirmButtonColor: '#ff9994'
            }).then(() => {
                clearCart();
                navigate('/');
            });
        } catch (error) {
            console.error('Lỗi khi đặt hàng:', error);
            Swal.fire('Lỗi!', 'Không thể tạo đơn hàng. Vui lòng thử lại sau.', 'error');
        } finally {
            setLoading(false);
        }
    };

    const formatPrice = (value) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
    };

    return (
        <div className="checkout-page">
            <Header />
            <main className="checkout-container">
                <h1 className="checkout-title">Thanh toán</h1>
                
                <form className="checkout-content" onSubmit={handleSubmit}>
                    <div className="checkout-form">
                        <h3>Thông tin liên hệ & Giao hàng</h3>
                        
                        <div className="form-group">
                            <label>Họ và tên *</label>
                            <input type="text" name="customer_name" required value={formData.customer_name} onChange={handleInputChange} placeholder="Nhập họ và tên..." />
                        </div>
                        
                        <div className="form-row">
                            <div className="form-group">
                                <label>Số điện thoại *</label>
                                <input type="tel" name="customer_phone" required value={formData.customer_phone} onChange={handleInputChange} placeholder="Nhập số điện thoại..." />
                            </div>
                            <div className="form-group">
                                <label>Email (Tùy chọn)</label>
                                <input type="email" name="customer_email" value={formData.customer_email} onChange={handleInputChange} placeholder="Nhập email..." />
                            </div>
                        </div>

                        <div className="address-section">
                            <h4>Địa chỉ giao hàng</h4>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Tỉnh / Thành phố *</label>
                                    <select required onChange={handleProvinceChange} value={selectedProvince?.code || ''}>
                                        <option value="" disabled>Chọn Tỉnh / Thành phố</option>
                                        {provinces.map(p => (
                                            <option key={p.code} value={p.code}>{p.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Quận / Huyện *</label>
                                    <select required onChange={handleDistrictChange} value={selectedDistrict?.code || ''} disabled={!selectedProvince}>
                                        <option value="" disabled>Chọn Quận / Huyện</option>
                                        {districts.map(d => (
                                            <option key={d.code} value={d.code}>{d.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Phường / Xã *</label>
                                    <select required onChange={handleWardChange} value={selectedWard?.code || ''} disabled={!selectedDistrict}>
                                        <option value="" disabled>Chọn Phường / Xã</option>
                                        {wards.map(w => (
                                            <option key={w.code} value={w.code}>{w.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Số nhà, Tên đường *</label>
                                    <input type="text" name="address_detail" required value={formData.address_detail} onChange={handleInputChange} placeholder="Ví dụ: 123 Đường Lê Lợi" />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Ghi chú đơn hàng (Tùy chọn)</label>
                            <textarea name="notes" rows="4" value={formData.notes} onChange={handleInputChange} placeholder="Ghi chú về đơn hàng, ví dụ: thời gian giao hàng..."></textarea>
                        </div>
                    </div>

                    <div className="checkout-summary">
                        <h3>Đơn hàng của bạn</h3>
                        <div className="summary-items">
                            {cart.map(item => (
                                <div key={item.product_id} className="summary-item">
                                    <div className="item-name">
                                        {item.name} <strong>x {item.quantity}</strong>
                                    </div>
                                    <div className="item-price">
                                        {formatPrice((item.sale_price || item.price) * item.quantity)}
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="summary-total">
                            <span>Tổng thanh toán:</span>
                            <strong>{formatPrice(getCartTotal())}</strong>
                        </div>
                        
                        <p className="payment-note">
                            * Hình thức thanh toán: <strong>Thanh toán khi nhận hàng (COD)</strong> hoặc <strong>Chuyển khoản sau khi tư vấn</strong>. Nhân viên sẽ liên hệ với bạn để xác nhận đơn.
                        </p>

                        <button type="submit" className="btn-submit-order" disabled={loading}>
                            {loading ? 'Đang xử lý...' : 'ĐẶT HÀNG NGAY'}
                        </button>
                    </div>
                </form>
            </main>
            <Footer />
        </div>
    );
};

export default CheckoutPage;

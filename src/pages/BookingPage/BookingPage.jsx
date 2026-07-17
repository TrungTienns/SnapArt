import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import './BookingPage.scss';

const BookingPage = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        full_name: '',
        phone: '',
        booking_date: '',
        painting_type: ''
    });

    const [status, setStatus] = useState({ loading: false, success: false, error: null });

    useEffect(() => {
        // Extract painting type from URL query string if present
        const searchParams = new URLSearchParams(location.search);
        const type = searchParams.get('type');
        if (type) {
            setFormData(prev => ({ ...prev, painting_type: type }));
        }
    }, [location]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: null });
        
        try {
            const response = await fetch('http://localhost:3000/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            
            if (response.ok && data.success) {
                setStatus({ loading: false, success: true, error: null });
                setFormData({ full_name: '', phone: '', booking_date: '', painting_type: '' });
                
                // Show success message and redirect
                setTimeout(() => {
                    navigate('/workshop');
                }, 3000);
            } else {
                setStatus({ loading: false, success: false, error: data.message || 'Error creating booking' });
            }
        } catch (error) {
            console.error('Booking error:', error);
            setStatus({ loading: false, success: false, error: 'Network error. Please try again later.' });
        }
    };

    return (
        <div className="booking-page">
            <Header />
            
            <div className="booking-container">
                <div className="booking-content">
                    <h1 className="booking-title">{t("booking.title") || "Đặt Lịch Workshop"}</h1>
                    <p className="booking-subtitle">
                        {t("booking.subtitle") || "Vui lòng điền thông tin để chúng tôi có thể chuẩn bị chu đáo nhất cho trải nghiệm của bạn."}
                    </p>

                    {status.success ? (
                        <div className="success-message">
                            <h3>{t("booking.successTitle") || "Đặt lịch thành công!"}</h3>
                            <p>{t("booking.successDesc") || "Cảm ơn bạn. Chúng tôi sẽ sớm liên hệ để xác nhận lại lịch hẹn."}</p>
                            <p className="redirect-text">Đang chuyển hướng về trang Workshop...</p>
                        </div>
                    ) : (
                        <form className="booking-form" onSubmit={handleSubmit}>
                            {status.error && <div className="error-message">{status.error}</div>}
                            
                            <div className="form-group">
                                <label htmlFor="full_name">{t("booking.fullName") || "Họ và tên"}</label>
                                <input 
                                    type="text" 
                                    id="full_name"
                                    name="full_name"
                                    value={formData.full_name}
                                    onChange={handleChange}
                                    placeholder={t("booking.fullNamePlaceholder") || "Nhập họ và tên của bạn"}
                                    required 
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">{t("booking.phone") || "Số điện thoại"}</label>
                                <input 
                                    type="tel" 
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder={t("booking.phonePlaceholder") || "Nhập số điện thoại"}
                                    required 
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="booking_date">{t("booking.date") || "Ngày đặt lịch"}</label>
                                <input 
                                    type="date" 
                                    id="booking_date"
                                    name="booking_date"
                                    value={formData.booking_date}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="painting_type">{t("booking.paintingType") || "Loại tranh"}</label>
                                <input 
                                    type="text" 
                                    id="painting_type"
                                    name="painting_type"
                                    value={formData.painting_type}
                                    onChange={handleChange}
                                    placeholder={t("booking.paintingTypePlaceholder") || "Ví dụ: Workshop Tranh Cát"}
                                    required 
                                />
                            </div>

                            <button type="submit" className="submit-btn" disabled={status.loading}>
                                {status.loading ? (t("booking.submitting") || "Đang gửi...") : (t("booking.submit") || "Xác nhận đặt lịch")}
                            </button>
                        </form>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default BookingPage;

import React from 'react';
import Header from '../../layout/Header/Header.jsx';
import Footer from '../../layout/Footer/Footer.jsx';
import { useForm, ValidationError } from '@formspree/react';
import './ContactPage.scss';

const ContactPage = () => {
  const [state, handleSubmit] = useForm("manaygwz"); // 👈 thay ID của bạn ở đây

  return (
    <>
      <Header />
      <div className="contact-page">
        <div className="contact-container">
          <h1>Liên Hệ</h1>

          {state.succeeded ? (
            <p className="success-message">🎉 Cảm ơn bạn! Tin nhắn đã được gửi thành công.</p>
          ) : (
            <div className="contact-content">
              <div className="contact-info">
                <h2>Thông Tin Liên Hệ</h2>
                <div className="info-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <p>Địa chỉ: 123 Đường ABC, Quận XYZ, TP.HCM</p>
                </div>
                <div className="info-item">
                  <i className="fas fa-phone"></i>
                  <p>Điện thoại: (028) 1234 5678</p>
                </div>
                <div className="info-item">
                  <i className="fas fa-envelope"></i>
                  <p>Email: contact@artsnap.com</p>
                </div>
              </div>

              <div className="contact-form">
                <h2>Gửi Tin Nhắn</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input type="text" name="name" placeholder="Họ và tên" required />
                  </div>
                  <div className="form-group">
                    <input type="email" name="email" placeholder="Email" required />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                  <div className="form-group">
                    <input type="text" name="subject" placeholder="Tiêu đề" required />
                  </div>
                  <div className="form-group">
                    <textarea name="message" placeholder="Nội dung tin nhắn" rows="5" required></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>
                  <button type="submit" className="submit-btn" disabled={state.submitting}>
                    {state.submitting ? "Đang gửi..." : "Gửi"}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
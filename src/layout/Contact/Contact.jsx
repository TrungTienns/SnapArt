import React from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Banner from '../Banner/Banner.jsx';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.scss';

const ContactPage = () => {
  const [state, handleSubmit] = useForm("manaygwz");

  return (
    <>
      {/* TIÊU ĐỀ LỚN Ở GIỮA */}
      <div className="contact-heading">
        <h1>Hãy liên hệ với chúng tôi</h1>
      </div>

      <div className="contact-page">
        <div className="contact-container">
          <div className="contact-left">
            <h2 className="slogan">
              Dù bạn đang tìm cách chữa lành tâm hồn, khơi dậy sáng tạo, hay chỉ muốn vẽ cùng những người bạn mới — hãy gửi lời nhắn, chúng tôi bắt đầu hành trình cùng bạn.
            </h2>
            <div className="contact-email">
              <a href="mailto:hello@terradactyl.xyz">hello@terradactyl.xyz</a>
            </div>
          </div>

          <div className="contact-right">
            {state.succeeded ? (
              <div className="success-message">
                <p>Cảm ơn bạn! Tin nhắn đã được gửi thành công.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                {/* HỌ TÊN */}
                <div className="form-group">
                  <label htmlFor="name">Họ và tên *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Vui lòng nhập họ và tên"
                    required
                  />
                </div>

                {/* EMAIL */}
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Vui lòng nhập email"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                {/* TIN NHẮN */}
                <div className="form-group">
                  <label htmlFor="message">Tin nhắn *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Vui lòng nhập tin nhắn"
                    required
                  ></textarea>
                </div>

                {/* NÚT GỬI CĂN GIỮA */}
                <div className="form-submit">
                  <button type="submit" className="send-btn" disabled={state.submitting}>
                    {state.submitting ? 'Đang gửi...' : 'Gửi'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
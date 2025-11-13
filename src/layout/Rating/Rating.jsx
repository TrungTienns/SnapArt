import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Rating.scss';

const Rating = () => {
  const [state, handleSubmit] = useForm("manaygwz");
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => setFadeOut(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <div className="rating-layout">
      {/* Heading ở giữa */}
      <h1 className="rating-heading">GỬI LỜI ĐÁNH GIÁ CỦA BẠN TẠI ĐÂY</h1>

      <div className={`rating-form-layout ${fadeOut ? 'fade-out' : ''}`}>
        <div className="rating-box">
          {/* Bên trái: thông điệp cảm ơn */}
          <div className="thank-you">
            <h2>Cảm ơn bạn!</h2>
            <p>
              Cám ơn bạn đã để lại một tin nhắn, dù ít hay nhiều thì nó cũng là lời nhắc nhở, khích lệ chúng mình ngày càng phát triển trong tương lai.
            </p>
          </div>

          {/* Bên phải: feedback form */}
          <div className="feedback-form">
            {state.succeeded ? (
              <div className="success-message">
                <p>Lời nhắn đã được gửi thành công!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Họ và tên *</label>
                  <input id="name" type="text" name="name" placeholder="Nhập họ và tên" required />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input id="email" type="email" name="email" placeholder="Nhập email" required />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Lời nhắn *</label>
                  <textarea id="message" name="message" rows="5" placeholder="Viết lời nhắn..." required></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <button type="submit" className="send-btn" disabled={state.submitting}>
                  {state.submitting ? "Đang gửi..." : "Gửi"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
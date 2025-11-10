import React from 'react';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import './AboutPage.scss';

function AboutPage() {
  return (
    <div>
      <Header />
      <main className="about-page page-container">
        <section className="about-hero">
          <h1>Về Workshop Thủ Công</h1>
          <p>
            Chúng tôi cung cấp các lớp học về các công việc thủ công đa dạng.  
            Bạn sẽ được học từ cơ bản đến nâng cao và thực hành trực tiếp.
          </p>
        </section>

        <section className="about-info">
          <h2>Tại sao chọn chúng tôi?</h2>
          <ul>
            <li>Giảng viên giàu kinh nghiệm</li>
            <li>Môi trường học tập thân thiện, sáng tạo</li>
            <li>Nguyên liệu chất lượng, đầy đủ dụng cụ</li>
            <li>Hỗ trợ sau lớp học nếu cần</li>
          </ul>
        </section>

        <section className="contact-section">
          <h2>Liên hệ</h2>
          <p>Hãy để lại tên và email để chúng tôi liên lạc với bạn!</p>
          <form className="contact-form">
            <input type="text" placeholder="Tên của bạn" required />
            <input type="email" placeholder="Email của bạn" required />
            <button type="submit">Gửi</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;

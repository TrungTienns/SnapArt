import React from "react";
import Header from "../../../layout/Header/Header";
import Footer from "../../../layout/Footer/Footer";
import BannerWorkshop from "../../../layout/BannerWorkShop/BannerWorkShop";
import "./Workshop1.scss";

import imgResin from "../../../assets/images/customer.jpg";

const Workshop1 = () => {
  const facebookLink = "https://www.facebook.com/"; // <-- thay link page của bạn

  return (
    <>
      <Header />
      <BannerWorkshop />

      <section className="workshop-intro">
        <div className="intro-card">
          <div className="intro-head">
            <h2 className="intro-title">🏖 Workshop Tranh Cát</h2>
            <p className="intro-subtitle">
              Một buổi workshop nhẹ nhàng, thư giãn, dành cho người mới bắt đầu —
              bạn sẽ tự tay tạo ra một bức tranh cát hoàn chỉnh mang dấu ấn riêng.
            </p>
          </div>

          <img src={imgResin} alt="Workshop Tranh Cát" className="intro-image" />

          <div className="intro-content">
            <h3 className="section-title">🌸 Giới thiệu</h3>
            <p className="intro-text">
              Tranh cát là một hình thức nghệ thuật sáng tạo từ các lớp cát màu,
              kết hợp bố cục và phối màu để tạo nên hiệu ứng chuyển sắc độc đáo.
              Workshop bên mình được thiết kế để bạn có thể trải nghiệm từ A–Z:
              chọn mẫu, phối màu, xử lý nền, đổ cát và hoàn thiện tác phẩm.
            </p>

            <p className="intro-text">
              Bạn không cần biết vẽ trước — giảng viên sẽ hướng dẫn từng bước,
              đồng thời nhân viên sẽ hỗ trợ lấy màu, chỉnh bố cục và hoàn thiện
              khung để bạn có sản phẩm đẹp mang về ngay.
            </p>

            <div className="highlight-box">
              <div className="highlight-item">
                ⏳ <b>Thời gian:</b> 60–90 phút
              </div>
              <div className="highlight-item">
                👩‍🎨 <b>Phù hợp:</b> Người mới / đi cùng bạn bè
              </div>
              <div className="highlight-item">
                🎁 <b>Thành phẩm:</b> Tranh hoàn thiện + đóng gói
              </div>
            </div>

            <h3 className="section-title">💰 Bảng giá</h3>

            <div className="price-table">
              <div className="price-block">
                <div className="price-head">
                  <h4>Tranh Cát / Tranh Đắp Nổi</h4>
                  <span className="badge">Phổ biến</span>
                </div>

                <div className="price-row">
                  <span>20x30</span>
                  <span>290k</span>
                </div>
                <div className="price-row">
                  <span>30x30</span>
                  <span>340k</span>
                </div>
                <div className="price-row">
                  <span>30x40</span>
                  <span>390k</span>
                </div>
              </div>

              <div className="price-block">
                <div className="price-head">
                  <h4>Tranh Cát Vỏ Sò (Khung gỗ)</h4>
                  <span className="badge badge-soft">Premium</span>
                </div>

                <div className="price-row">
                  <span>20x20</span>
                  <span>300k</span>
                </div>
                <div className="price-row">
                  <span>25x25</span>
                  <span>360k</span>
                </div>
                <div className="price-row">
                  <span>20x30</span>
                  <span>360k</span>
                </div>
              </div>
            </div>

            <div className="note-box">
              <h3 className="note-title">✨ Giá đã bao gồm</h3>
              <ul>
                <li>✔️ Cát màu + hoạ cụ dùng tại workshop</li>
                <li>✔️ Nước suối và snacks</li>
                <li>✔️ Tripod quay/chụp dùng chung</li>
                <li>✔️ Nhân viên hỗ trợ lấy màu & hướng dẫn</li>
              </ul>
            </div>

            <div className="note-box">
              <h3 className="note-title">🎁 Ưu đãi nhóm</h3>
              <ul>
                <li>• Nhóm 3 người 👉 giảm 10%</li>
                <li>• Nhóm 4 người 👉 giảm 15%</li>
                <li>• 2 người vẽ chung 1 tranh 👉 phụ thu +150k</li>
              </ul>
            </div>

            <div className="btn-wrap">
              <a
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="book-btn"
              >
                📩 Đặt lịch ngay
              </a>
              <p className="btn-note">
                Nhắn fanpage để được tư vấn khung, mẫu và thời gian trống.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Workshop1;
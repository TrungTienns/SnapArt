import React from "react";
import Header from "../../../layout/Header/Header";
import Footer from "../../../layout/Footer/Footer";
import BannerWorkshop from "../../../layout/BannerWorkShop/BannerWorkShop";
import "./Workshop1.scss";

import imgSand from "../../../assets/images/customer.jpg";

const Workshop1 = () => {
  const facebookLink = "https://www.facebook.com/profile.php?id=61583373132344"; // <-- thay link page của bạn

  return (
    <>
      <Header />
      <BannerWorkshop />

      <section className="workshop-page">
        <div className="workshop-container">
          {/* HERO */}
          <div className="workshop-hero">
            <div className="hero-left">
              <span className="hero-badge">Workshop • Handmade</span>

              <h2 className="hero-title">🏖 Workshop Tranh Cát</h2>

              <p className="hero-desc">
                Một buổi workshop nhẹ nhàng, thư giãn dành cho người mới bắt đầu —
                bạn sẽ tự tay tạo ra một bức tranh cát hoàn chỉnh mang dấu ấn riêng.
              </p>

              <div className="hero-highlights">
                <div className="highlight-item">
                  <span className="dot" />
                  <p>⏳ 60–90 phút</p>
                </div>
                <div className="highlight-item">
                  <span className="dot" />
                  <p>👩‍🎨 Phù hợp người mới</p>
                </div>
                <div className="highlight-item">
                  <span className="dot" />
                  <p>🎁 Thành phẩm mang về</p>
                </div>
              </div>

              <div className="hero-actions">
                <a
                  className="btn-primary"
                  href={facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📩 Đặt lịch ngay
                </a>
                <a className="btn-secondary" href="#pricing">
                  Xem giá
                </a>
              </div>
            </div>

            <div className="hero-right">
              <img src={imgSand} alt="Workshop Tranh Cát" />
            </div>
          </div>

          {/* CONTENT */}
          <div className="workshop-content">
            <div className="content-card">
              <h3>🌸 Giới thiệu</h3>
              <p>
                Tranh cát là một hình thức nghệ thuật sáng tạo từ các lớp cát màu,
                kết hợp bố cục và phối màu để tạo nên hiệu ứng chuyển sắc độc đáo.
                Workshop bên mình được thiết kế để bạn trải nghiệm từ A–Z: chọn mẫu,
                phối màu, xử lý nền, đổ cát và hoàn thiện tác phẩm.
              </p>
              <p>
                Bạn không cần biết vẽ trước — giảng viên sẽ hướng dẫn từng bước,
                đồng thời nhân viên hỗ trợ lấy màu, chỉnh bố cục và hoàn thiện khung
                để bạn có sản phẩm đẹp mang về ngay.
              </p>
            </div>

            <div className="content-card">
              <h3>📌 Phù hợp với ai?</h3>
              <ul>
                <li>Người mới bắt đầu muốn trải nghiệm nghệ thuật</li>
                <li>Đi cùng bạn bè, người yêu hoặc nhóm nhỏ</li>
                <li>Muốn có một món quà handmade tự làm</li>
                <li>Muốn thư giãn cuối tuần nhẹ nhàng</li>
              </ul>
            </div>
          </div>

          {/* PRICING */}
          <div className="pricing-card" id="pricing">
            <div className="pricing-header">
              <h3>💰 Bảng giá Workshop Tranh Cát</h3>
              <p>Giá đã bao gồm vật liệu và hỗ trợ trong suốt buổi workshop.</p>
            </div>

            <div className="pricing-grid">
              {/* block 1 */}
              <div className="pricing-box">
                <div className="pricing-box-head">
                  <h4>🏖 Tranh Đắp Nổi</h4>
                  <span className="tag">Phổ biến</span>
                </div>

                <div className="pricing-row">
                  <span>20x30</span>
                  <span>290K</span>
                </div>
                <div className="pricing-row">
                  <span>30x30</span>
                  <span>340K</span>
                </div>
                <div className="pricing-row">
                  <span>30x40</span>
                  <span>390K</span>
                </div>
              </div>

              {/* block 2 */}
              <div className="pricing-box">
                <div className="pricing-box-head">
                  <h4>🐚 Tranh cát Vỏ Sò (khung gỗ)</h4>
                  <span className="tag tag-soft">Premium</span>
                </div>

                <div className="pricing-row">
                  <span>20x20</span>
                  <span>300K</span>
                </div>
                <div className="pricing-row">
                  <span>25x25</span>
                  <span>360K</span>
                </div>
                <div className="pricing-row">
                  <span>20x30</span>
                  <span>360K</span>
                </div>
              </div>
            </div>

            <div className="included">
              <h4>✨ Giá đã bao gồm</h4>
              <ul>
                <li>✔️ Cát màu + hoạ cụ dùng tại workshop</li>
                <li>✔️ Nước suối và snacks</li>
                <li>✔️ Tripod quay/chụp dùng chung</li>
                <li>✔️ Nhân viên hỗ trợ lấy màu & hướng dẫn</li>
              </ul>
            </div>

            <div className="group-sale">
              <h4>🎁 Ưu đãi nhóm</h4>
              <ul>
                <li>• Nhóm 3 người 👉 giảm 10%</li>
                <li>• Nhóm 4 người 👉 giảm 15%</li>
                <li>• 2 người vẽ chung 1 tranh 👉 phụ thu +150K</li>
              </ul>
            </div>

            <div className="booking">
              <a
                className="btn-primary full"
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                📩 Đặt lịch ngay
              </a>

              <p className="note">
                * Nhắn fanpage để được tư vấn khung, mẫu và thời gian trống.
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
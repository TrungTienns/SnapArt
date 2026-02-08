import React from "react";
import Header from "../../../layout/Header/Header";
import Footer from "../../../layout/Footer/Footer";
import BannerWorkshop from "../../../layout/BannerWorkShop/BannerWorkShop";
import "./Workshop3.scss";

// hình demo (đổi ảnh túi tote thật của bạn)
import imgTote from "../../../assets/images/aboutus_image1.jpg";

const Workshop3 = () => {
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

              <h2 className="hero-title">Vẽ Túi Tote</h2>

              <p className="hero-desc">
                Workshop Vẽ Túi Tote là trải nghiệm sáng tạo nhẹ nhàng, phù hợp
                cho người mới bắt đầu. Bạn sẽ được hướng dẫn cách lên bố cục, phối
                màu và hoàn thiện một chiếc túi tote mang phong cách cá nhân.
              </p>

              <div className="hero-highlights">
                <div className="highlight-item">
                  <span className="dot" />
                  <p>Không cần kinh nghiệm</p>
                </div>
                <div className="highlight-item">
                  <span className="dot" />
                  <p>Hướng dẫn từng bước</p>
                </div>
                <div className="highlight-item">
                  <span className="dot" />
                  <p>Nhận sản phẩm mang về</p>
                </div>
              </div>

              <div className="hero-actions">
                <a className="btn-primary" href="#booking">
                  📩 Đặt lịch ngay
                </a>
                <a className="btn-secondary" href="#pricing">
                  Xem giá
                </a>
              </div>
            </div>

            <div className="hero-right">
              <img src={imgTote} alt="Workshop Vẽ Túi Tote" />
            </div>
          </div>

          {/* CONTENT */}
          <div className="workshop-content">
            <div className="content-card">
              <h3>🎨 Bạn sẽ học được gì?</h3>
              <ul>
                <li>Cách lên ý tưởng và chọn concept phù hợp</li>
                <li>Cách phối màu hài hòa trên nền vải tote</li>
                <li>Kỹ thuật vẽ cơ bản để hình vẽ rõ, đẹp và bền màu</li>
                <li>Cách bảo quản túi sau khi hoàn thiện</li>
              </ul>
            </div>

            <div className="content-card">
              <h3>📌 Phù hợp với ai?</h3>
              <p>
                Workshop phù hợp cho học sinh, sinh viên, người đi làm muốn thư
                giãn cuối tuần, đi cùng bạn bè hoặc tổ chức theo nhóm.
              </p>
            </div>
          </div>

          {/* PRICING */}
          <div className="pricing-card" id="pricing">
            <div className="pricing-header">
              <h3>👜 Giá Workshop Vẽ Túi Tote</h3>
              <p>Giá đã bao gồm toàn bộ vật liệu và hỗ trợ trong buổi học.</p>
            </div>

            <div className="price-box">
              <div className="price-main">
                <span className="price-label">Giá Workshop</span>
                <span className="price-value">280K</span>
              </div>

              <div className="included">
                <h4>✨ Giá đã bao gồm</h4>
                <ul>
                  <li>✔ Màu + hoạ cụ dùng tại workshop</li>
                  <li>✔ Nước suối và snacks</li>
                  <li>✔ Tripod quay/chụp dùng chung</li>
                  <li>✔ Nhân viên hỗ trợ lấy màu & hướng dẫn</li>
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
            </div>

            <div className="booking" id="booking">
              <a className="btn-primary full" href="#">
                📩 Đặt lịch ngay
              </a>
              <p className="note">
                * Bạn có thể inbox để được tư vấn concept & lịch học phù hợp.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Workshop3;
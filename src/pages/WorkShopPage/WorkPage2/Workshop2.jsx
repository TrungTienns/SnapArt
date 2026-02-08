import React from "react";
import Header from "../../../layout/Header/Header";
import Footer from "../../../layout/Footer/Footer";
import BannerWorkshop from "../../../layout/BannerWorkShop/BannerWorkShop";
import "./Workshop2.scss";

import imgAcrylicKid from "../../../assets/images/aboutus_image1.jpg";

const Workshop2 = () => {
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
              <span className="hero-badge">Workshop • Kid Friendly</span>

              <h2 className="hero-title">🖌 Workshop Tranh Acrylic - Kid</h2>

              <p className="hero-desc">
                Một buổi workshop vui – dễ – nhiều màu sắc dành cho các bạn nhỏ.
                Bé sẽ được hướng dẫn từng bước để tự hoàn thiện một bức tranh acrylic
                đáng yêu và mang về ngay sau buổi học.
              </p>

              <div className="hero-highlights">
                <div className="highlight-item">
                  <span className="dot" />
                  <p>⏳ 60–90 phút</p>
                </div>
                <div className="highlight-item">
                  <span className="dot" />
                  <p>👧 Độ tuổi phù hợp: 6+</p>
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
              <img src={imgAcrylicKid} alt="Workshop Tranh Acrylic - Kid" />
            </div>
          </div>

          {/* CONTENT */}
          <div className="workshop-content">
            <div className="content-card">
              <h3>🌈 Giới thiệu</h3>
              <p>
                Workshop Acrylic Kid được thiết kế nhẹ nhàng, dễ tiếp cận và an toàn
                cho trẻ. Bé sẽ được làm quen với màu acrylic, cọ vẽ, cách phối màu cơ
                bản và các bước vẽ từ nền đến chi tiết.
              </p>
              <p>
                Giảng viên và nhân viên sẽ hướng dẫn sát từng bước, giúp bé hoàn thiện
                tranh đẹp, rõ bố cục và có điểm nhấn. Phù hợp để bé trải nghiệm nghệ
                thuật, tăng khả năng tập trung và phát triển sáng tạo.
              </p>
            </div>

            <div className="content-card">
              <h3>📌 Phù hợp với ai?</h3>
              <ul>
                <li>Trẻ từ 6 tuổi trở lên</li>
                <li>Phụ huynh muốn bé thử hoạt động nghệ thuật</li>
                <li>Nhóm bạn nhỏ đi cùng nhau cuối tuần</li>
                <li>Hoạt động vui – nhẹ – không áp lực</li>
              </ul>
            </div>
          </div>

          {/* PRICING */}
          <div className="pricing-card" id="pricing">
            <div className="pricing-header">
              <h3>💰 Bảng giá Tranh Acrylic</h3>
              <p>Giá đã bao gồm vật liệu và hỗ trợ trong buổi workshop.</p>
            </div>

            <div className="pricing-grid one">
              <div className="pricing-box">
                <div className="pricing-box-head">
                  <h4>🖌 Tranh Acrylic</h4>
                  <span className="tag">Hot</span>
                </div>

                <div className="pricing-row">
                  <span>20x30</span>
                  <span>260K</span>
                </div>
                <div className="pricing-row">
                  <span>30x30</span>
                  <span>310K</span>
                </div>
                <div className="pricing-row">
                  <span>30x40</span>
                  <span>360K</span>
                </div>
              </div>
            </div>

            <div className="included">
              <h4>✨ Giá đã bao gồm</h4>
              <ul>
                <li>✔️ Màu + hoạ cụ dùng tại workshop</li>
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
                href="https://www.facebook.com/profile.php?id=61583373132344"
                target="_blank"
                rel="noopener noreferrer"
              >
                📩 Đặt lịch ngay
              </a>

              <p className="note">
                * Nhắn fanpage để chọn khung, mẫu và thời gian phù hợp cho bé.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Workshop2;
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../../layout/Footer/Footer";
import "./CustomPaintingsPage.scss";

import heroBg from "../../assets/images/customPainting/custom1.webp";
import step1Icon from "../../assets/images/customPainting/custom2.webp";
import step2Icon from "../../assets/images/customPainting/custom3.webp";
import step3Icon from "../../assets/images/customPainting/custom4.webp";
import step4Icon from "../../assets/images/customPainting/custom5.webp";

import img1 from "../../assets/images/customPainting/custom6.webp";
import img2 from "../../assets/images/customPainting/custom7.webp";
import img3 from "../../assets/images/customPainting/custom8.webp";
import img4 from "../../assets/images/customPainting/custom9.webp";
import img5 from "../../assets/images/customPainting/custom10.webp";
import img6 from "../../assets/images/customPainting/custom11.webp";
import img7 from "../../assets/images/customPainting/custom12.webp";
import img8 from "../../assets/images/customPainting/custom13.webp";

export default function CustomPaintingsPage() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const facebookLink = "https://www.facebook.com/messages/t/808296592375259";

  const galleryImages = [img1, img2, img3, img4, img5, img6, ];

  const processSteps = [
    {
      img: step1Icon,
      title: t("customPaintingPage.step1Title") || "1. Gửi Yêu Cầu & Hình Ảnh",
      desc: t("customPaintingPage.step1Desc") || "Chia sẻ ý tưởng, hình ảnh tham khảo và kích thước bạn mong muốn với chúng tôi."
    },
    {
      img: step2Icon,
      title: t("customPaintingPage.step2Title") || "2. Tư Vấn & Báo Giá",
      desc: t("customPaintingPage.step2Desc") || "SnapArt sẽ tư vấn chất liệu, phong cách và báo giá chi tiết cùng thời gian hoàn thành."
    },
    {
      img: step3Icon,
      title: t("customPaintingPage.step3Title") || "3. Phác Thảo & Thực Hiện",
      desc: t("customPaintingPage.step3Desc") || "Họa sĩ tiến hành lên phác thảo, duyệt bố cục và bắt tay vào thực hiện tác phẩm."
    },
    {
      img: step4Icon,
      title: t("customPaintingPage.step4Title") || "4. Hoàn Thiện & Giao Tranh",
      desc: t("customPaintingPage.step4Desc") || "Bức tranh được hoàn thiện tỉ mỉ, đóng gói cẩn thận và giao tận tay bạn."
    }
  ];

  return (
    <div className="custom-paintings-page">
      {/* Hero Section */}
      <section className="cp-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="cp-hero-overlay"></div>
        <div className="cp-hero-content">
          <h1>{t("customPaintingPage.heroTitle") || "Vẽ Tranh Theo Yêu Cầu"}</h1>
          <p>{t("customPaintingPage.heroDesc") || "Biến ý tưởng, kỷ niệm và câu chuyện của bạn thành những tác phẩm nghệ thuật độc bản mang đậm dấu ấn cá nhân."}</p>
          <button className="cp-btn-primary" onClick={() => window.open(facebookLink, "_blank")}>
            {t("customPaintingPage.heroButton") || "Nhận Tư Vấn Ngay"}
          </button>
        </div>
      </section>

      {/* Process Section */}
      <section className="cp-process">
        <h2>{t("customPaintingPage.processTitle") || "Quy Trình Đặt Tranh"}</h2>
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <div className="process-card" key={index}>
              <div className="process-img-wrapper">
                <img src={step.img} alt={step.title} />
              </div>
              <div className="process-info">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section - Editorial Design */}
      <section className="cp-pricing-editorial">
        <div className="pricing-header">
          <h2>{t("customPaintingPage.pricingTitle") || "Bảng Giá Tham Khảo"}</h2>
          <p className="pricing-subtitle">{t("customPaintingPage.pricingSubtitle") || "Đầu tư cho một tác phẩm nghệ thuật mang đậm dấu ấn của riêng bạn."}</p>
        </div>
        
        <div className="pricing-container">
          {/* Item 1: Vẽ Pet */}
          <div className="pricing-row">
            <div className="pricing-image">
              <div className="image-wrapper">
                <img src={img8} alt={t("customPaintingPage.petBadge") || "Vẽ Pet"} />
                <div className="floating-badge">{t("customPaintingPage.petBadge") || "Vẽ Pet"}</div>
              </div>
            </div>
            <div className="pricing-details">
              <h3>{t("customPaintingPage.petPricingTitle") || "Dịch vụ vẽ thú cưng"}</h3>
              <p className="desc">{t("customPaintingPage.petPricingDesc") || "Lưu giữ khoảnh khắc đáng yêu của những người bạn nhỏ bằng những nét cọ sinh động."}</p>
              <ul className="elegant-price-list">
                <li>
                  <span className="size">{t("customPaintingPage.size") || "Size"} 30x30 cm</span>
                  <span className="line"></span>
                  <span className="price">750.000đ</span>
                </li>
                <li>
                  <span className="size">{t("customPaintingPage.size") || "Size"} 30x40 cm</span>
                  <span className="line"></span>
                  <span className="price">1.000.000đ</span>
                </li>
                <li>
                  <span className="size">{t("customPaintingPage.size") || "Size"} 40x50 cm</span>
                  <span className="line"></span>
                  <span className="price">1.300.000đ</span>
                </li>
              </ul>
              <div className="special-note">
                <span className="icon">🎁</span> {t("customPaintingPage.specialNotePetPrefix") || "Từ 3 pet trở lên phụ thu"} <strong>100.000đ{t("customPaintingPage.specialNotePetSuffix") || "/pet"}</strong>
              </div>
            </div>
          </div>

          {/* Item 2: Tranh Phong Cảnh */}
          <div className="pricing-row reverse">
            <div className="pricing-image">
              <div className="image-wrapper">
                <img src={img2} alt={t("customPaintingPage.landscapeBadge") || "Tranh Phong Cảnh"} />
                <div className="floating-badge landscape">{t("customPaintingPage.landscapeBadge") || "Phong Cảnh"}</div>
              </div>
            </div>
            <div className="pricing-details">
              <h3>{t("customPaintingPage.landscapePricingTitle") || "Tranh phong cảnh"}</h3>
              <p className="desc">{t("customPaintingPage.landscapePricingDesc") || "Mang cả thiên nhiên hùng vĩ và bình yên vào không gian sống của bạn."}</p>
              <ul className="elegant-price-list">
                <li>
                  <span className="size">{t("customPaintingPage.size") || "Size"} 30x30 cm</span>
                  <span className="line"></span>
                  <span className="price">1.000.000đ</span>
                </li>
                <li>
                  <span className="size">{t("customPaintingPage.size") || "Size"} 30x40 cm</span>
                  <span className="line"></span>
                  <span className="price">1.200.000đ</span>
                </li>
                <li>
                  <span className="size">{t("customPaintingPage.size") || "Size"} 40x50 cm</span>
                  <span className="line"></span>
                  <span className="price">1.600.000đ</span>
                </li>
                <li>
                  <span className="size">{t("customPaintingPage.size") || "Size"} 40x60 cm</span>
                  <span className="line"></span>
                  <span className="price">1.800.000đ</span>
                </li>
                <li>
                  <span className="size">{t("customPaintingPage.size") || "Size"} 50x70 cm</span>
                  <span className="line"></span>
                  <span className="price">2.300.000đ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="cp-gallery">
        <div className="gallery-header">
          <h2>{t("customPaintingPage.galleryTitle") || "Tác Phẩm Tiêu Biểu"}</h2>
          <p>{t("customPaintingPage.galleryDesc") || "Cùng chiêm ngưỡng những tác phẩm vẽ theo yêu cầu đã được SnapArt thực hiện cho khách hàng."}</p>
        </div>
        <div className="gallery-masonry">
          {galleryImages.map((imgSrc, idx) => (
            <div className="gallery-item" key={idx}>
              <img src={imgSrc} alt={`Artwork ${idx + 1}`} />
              <div className="gallery-overlay">
                <span>✨ SnapArt Custom Piece</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cp-cta">
        <h2>{t("customPaintingPage.ctaTitle") || "Sẵn Sàng Tạo Nên Bức Tranh Của Riêng Bạn?"}</h2>
        <p>{t("customPaintingPage.ctaDesc") || "Hãy để SnapArt đồng hành cùng bạn trong việc lưu giữ những khoảnh khắc tuyệt vời nhất qua ngôn ngữ hội họa."}</p>
        <button className="cp-btn-secondary" onClick={() => window.open(facebookLink, "_blank")}>
          {t("customPaintingPage.ctaButton") || "Liên Hệ Đặt Tranh"}
        </button>
      </section>

      <Footer />
    </div>
  );
}
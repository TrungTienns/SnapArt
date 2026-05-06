import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../../layout/Footer/Footer";
import "./CustomPaintingsPage.scss";

import heroBg from "../../assets/images/customPainting/custom1.jpg";
import step1Icon from "../../assets/images/customPainting/custom2.jpg";
import step2Icon from "../../assets/images/customPainting/custom3.jpg";
import step3Icon from "../../assets/images/customPainting/custom4.jpg";
import step4Icon from "../../assets/images/customPainting/custom5.jpg";

import img1 from "../../assets/images/customPainting/custom6.jpg";
import img2 from "../../assets/images/customPainting/custom7.jpg";
import img3 from "../../assets/images/customPainting/custom8.jpg";
import img4 from "../../assets/images/customPainting/custom9.jpg";
import img5 from "../../assets/images/customPainting/custom10.jpg";
import img6 from "../../assets/images/customPainting/custom11.jpg";


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
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import heroBg from "../../assets/images/customPainting/custom1.jpg";
import starIcon from "../../assets/icons/star.png";
import paintBrushIcon from "../../assets/icons/paint-brush.png";
import "./CustomPainting.scss";

export default function CustomPainting() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="hp-custom-painting">
      <div className="hp-cp-container">
        
        {/* Cột trái: Nội dung */}
        <div className="hp-cp-left">
          <div className="badge">{t("customPaintingPage.badge") || "Dịch Vụ Độc Quyền"}</div>
          <h2>
            {t("customPaintingPage.titlePart1") || "Vẽ Tranh"}{" "}
            <span className="highlight">{t("customPaintingPage.titlePart2") || "Theo Yêu Cầu"}</span>
          </h2>
          <p>
            {t("customPaintingPage.heroDesc") || 
            "Biến ý tưởng, kỷ niệm và câu chuyện của bạn thành những tác phẩm nghệ thuật độc bản mang đậm dấu ấn cá nhân. Một món quà vô giá dành cho chính bạn hoặc người thân yêu."}
          </p>
          <button 
            className="hp-cp-btn" 
            onClick={() => navigate("/custom-painting")}
          >
            {t("customPaintingPage.homepageCta") || "Tìm Hiểu Thêm"}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>

        {/* Cột phải: Hình ảnh 3D */}
        <div className="hp-cp-right">
          <div className="image-3d-wrapper">
            <div className="backdrop-shape"></div>
            <img src={heroBg} alt="Custom Art" className="main-img" />
            <div className="floating-element el-1">
              <img src={starIcon} alt="star" style={{ width: '60%', height: '60%', objectFit: 'contain' }} />
            </div>
            <div className="floating-element el-2">
              <img src={paintBrushIcon} alt="brush" style={{ width: '60%', height: '60%', objectFit: 'contain' }} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
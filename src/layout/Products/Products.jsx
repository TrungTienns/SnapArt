// src/layout/Products/Products.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Products.scss";

// hình demo – lấy trong assets của bạn
import img1 from "../../assets/images/totepaiting.webp";
import img2 from "../../assets/images/product2.webp";
import img3 from "../../assets/images/aboutus_image1.webp";
import img4 from "../../assets/images/sand_pictures.webp";
import img5 from "../../assets/images/customforsaleImg.webp";
import img6 from "../../assets/images/customPainting/custom2.webp";
export default function Products() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // helper: format 260 -> 260k
  const formatK = (value) => `${value}k`;

  // helper: tạo text "260k - 360k"
  const priceRangeText = (arr) => {
    if (!arr || arr.length === 0) return "";
    if (arr.length === 1) return formatK(arr[0]);

    const min = Math.min(...arr);
    const max = Math.max(...arr);

    if (min === max) return formatK(min);
    return `${formatK(min)} - ${formatK(max)}`;
  };

  // ======= BẢNG GIÁ TỪ BẠN =======
  const acrylicPrices = [260, 310, 360];
  const sandShellPrices = [300, 360, 360];
  const resinShellPrices = [320, 380, 380];
  const toteBagPrice = [280];

  const data = [
    {
      id: 1,
      title: t("products.items.sandPainting.title"),
      sub: "",
      img: img4,
      workshopLink: "/product1",
      facebookLink: "https://www.facebook.com/profile.php?id=61583373132344",
      priceText: priceRangeText(sandShellPrices),
    },
    {
      id: 2,
      title: t("products.items.acrylicPainting.title"),
      sub: "",
      img: img2,
      workshopLink: "/product2",
      facebookLink: "https://www.facebook.com/profile.php?id=61583373132344",
      priceText: priceRangeText(acrylicPrices),
    },
    {
      id: 3,
      title: t("products.items.toteBagPainting.title"),
      sub: "",
      img: img1,
      workshopLink: "/product3",
      facebookLink: "https://www.facebook.com/profile.php?id=61583373132344",
      priceText: priceRangeText(toteBagPrice),
    },
    {
      id: 4,
      title: t("products.items.resinPainting.title"),
      sub: "",
      img: img3,
      workshopLink: "/product4",
      facebookLink: "https://www.facebook.com/profile.php?id=61583373132344",
      priceText: priceRangeText(resinShellPrices),
    },
    {
      id: 5,
      title: t("products.items.availablePainting.title"),
      sub: "",
      img: img6,
      workshopLink: "/available-paintings",
      facebookLink: "https://www.facebook.com/profile.php?id=61583373132344",
      priceText: t("products.items.priceAvailable"),
    },
    {
      id: 6,
      title: t("products.items.customPainting.title"),
      sub: "",
      img: img5,
      workshopLink: "/custom-painting",
      facebookLink: "https://www.facebook.com/profile.php?id=61583373132344",
      priceText: t("products.items.priceCustom"),
    }
  ];

  return (
    <section className="products-section">
      <h2 className="products-title">{t("products.title")}</h2>

      <div className="products-grid">
        {data.map((item) => (
          <div
            className="product-card"
            key={item.id}
            onClick={() => navigate(item.workshopLink)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") navigate(item.workshopLink);
            }}
          >
            {/* Title */}
            <h3 className="product-name">{item.title}</h3>

            {/* Ảnh + overlay */}
            <div className="product-image">
              <img src={item.img} alt={item.title} loading="lazy" />

              <div className="product-image-overlay">
                <div className="overlay-pill">
                  <span className="overlay-icon">🔍</span>
                  <span className="overlay-text">
                    {t("products.clickToView")}
                  </span>
                </div>
              </div>
            </div>

            {/* Giá nằm dưới ảnh - góc phải */}
            {item.priceText && (
              <div className="product-price-wrap">
                <span className="product-price">{item.priceText}</span>
              </div>
            )}

            {item.sub && <p className="product-sub">{item.sub}</p>}

            <button
              className="product-btn"
              onClick={(e) => {
                e.stopPropagation();
                window.open(item.facebookLink, "_blank");
              }}
            >
              {t("products.bookButton")}
            </button>
          </div>
        ))}
      </div>

      {/* Ghi chú nhỏ */}
      <p className="products-note">
        ✨ Giá đã bao gồm hoạ cụ, nước + snacks, tripod dùng chung và nhân viên hỗ
        trợ.
      </p>
    </section>
  );
}
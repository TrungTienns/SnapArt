// src/layout/Products/Products.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Products.scss";

// hình demo – lấy trong assets của bạn
import img1 from "../../assets/images/totepaiting.jpg";
import img2 from "../../assets/images/product2.jpg";
import img3 from "../../assets/images/aboutus_image1.jpg";
import img4 from "../../assets/images/sand_pictures.jpg";

export default function Products() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const data = [
    {
      id: 1,
      title: t("products.items.sandPainting.title"),
      sub: "",
      img: img4,
      workshopLink: "/product1",
      facebookLink: "https://www.facebook.com/profile.php?id=61583373132344",
    },
    {
      id: 2,
      title: t("products.items.acrylicPainting.title"),
      sub: "",
      img: img2,
      workshopLink: "/product2",
      facebookLink: "https://www.facebook.com/profile.php?id=61583373132344",
    },
    {
      id: 3,
      title: t("products.items.toteBagPainting.title"),
      sub: "",
      img: img1,
      workshopLink: "/product3",
      facebookLink: "https://www.facebook.com/profile.php?id=61583373132344",
    },
    {
      id: 4,
      title: t("products.items.resinPainting.title"),
      sub: "",
      img: img3,
      workshopLink: "/product4",
      facebookLink: "https://www.facebook.com/profile.php?id=61583373132344",
    },
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
            <h3 className="product-name">{item.title}</h3>

            {/* Ảnh + overlay */}
            <div className="product-image">
              <img src={item.img} alt={item.title} />

              <div className="product-image-overlay">
                <div className="overlay-pill">
                  <span className="overlay-icon">🔍</span>
                  <span className="overlay-text">
                    {t("products.clickToView")}
                  </span>
                </div>
              </div>
            </div>

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
    </section>
  );
}
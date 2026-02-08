// src/layout/Products/Products.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Products.scss";

// hình demo – lấy trong assets của bạn
import img1 from "../../assets/images/products/product_image9.jpeg";
import img2 from "../../assets/images/sand_pictures.jpg";
import img3 from "../../assets/images/aboutus_image1.jpg";

const data = [
  {
    id: 1,
    title: "Vẽ Tranh Cát",
    sub: "",
    img: img2,
    workshopLink: "/product1",
    facebookLink: "https://www.facebook.com/profile.php?id=61583373132344",
  },
  {
    id: 2,
    title: "Vẽ Tranh Acrylic",
    sub: "",
    img: img1,
    workshopLink: "/product2",
    facebookLink: "https://www.facebook.com/profile.php?id=61583373132344",
  },
  {
    id: 3,
    title: "Vẽ Túi Tote",
    sub: "",
    img: img3,
    workshopLink: "/product3",
    facebookLink: "https://www.facebook.com/profile.php?id=61583373132344",
  },
];

export default function Products() {
  const navigate = useNavigate();

  return (
    <section className="products-section">
      <h2 className="products-title">Danh sách các loại sản phẩm</h2>

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
                    Nhấn vào để xem thêm chi tiết
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
              Đặt lịch
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
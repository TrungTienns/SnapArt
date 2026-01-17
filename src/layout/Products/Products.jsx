// src/layout/Products/Products.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Products.scss";

// hình demo – lấy trong assets của bạn
import img1 from "../../assets/images/products/product_image9.jpeg";
import img2 from "../../assets/images/aboutus_image1.jpg";
import img3 from "../../assets/images/aboutus_image1.jpg";
import img4 from "../../assets/images/aboutus_image1.jpg";
import img5 from "../../assets/images/aboutus_image1.jpg";
import img6 from "../../assets/images/aboutus_image1.jpg";
import img7 from "../../assets/images/aboutus_image1.jpg";
import img8 from "../../assets/images/aboutus_image1.jpg";

const data = [
  {
    id: 1,
    title: "Vẽ Tranh Cát ",
    sub: "",
    img: img1,
    workshopLink: "/product1",
  },
  {
    id: 2,
    title: "Vẽ Tranh Acrylic",
    sub: "",
    img: img2,
    workshopLink: "/product2",
  },
  {
    id: 3,
    title: "Vẽ Túi Tote",
    sub: "",
    img: img3,
    workshopLink: "/product3",
  },
];

export default function Products() {
  const navigate = useNavigate();

  return (
    <section className="products-section">
      <h2 className="products-title">Danh sách các loại sản phẩm</h2>

      <div className="products-grid">
        {data.map((item) => (
          <div className="product-card" key={item.id}>
            <h3 className="product-name">{item.title}</h3>

            <div className="product-image">
              <img src={item.img} alt={item.title} />
            </div>

            <p className="product-sub">{item.sub}</p>

            <h5
              className="product-learn-more"
              onClick={() => navigate(item.workshopLink)}
            >
              Tìm hiểu thêm
            </h5>

            <button
              className="product-btn"
              onClick={() =>
                window.open("https://www.facebook.com/", "_blank")
              }
            >
              Đặt lịch
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
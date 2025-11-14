// src/layout/Products/Products.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Products.scss";

// hình demo – lấy trong assets của bạn
import img1 from "../../assets/images/aboutus_image1.jpg";
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
    title: "Khóa học Resin Epoxy",
    sub: "Dành cho người không chuyên",
    img: img1,
    workshopLink: "/product1",
  },
  {
    id: 2,
    title: "Khóa màu Acrylic - Kid",
    sub: "Cho trẻ 4-12 tuổi",
    img: img2,
    workshopLink: "/product2",
  },
  {
    id: 3,
    title: "Khóa học màu Acrylic",
    sub: "Cơ bản - nâng cao",
    img: img3,
    workshopLink: "/product3",
  },
  {
    id: 4,
    title: "Khóa Sketch cơ bản",
    sub: "Dành cho người mới",
    img: img4,
    workshopLink: "/product4",
  },
  {
    id: 5,
    title: "Khóa Pastel nâng cao",
    sub: "Vào màu chuyên sâu",
    img: img5,
    workshopLink: "/product5",
  },
  {
    id: 6,
    title: "Khóa vẽ Watercolor",
    sub: "Dành cho người mới bắt đầu",
    img: img6,
    workshopLink: "/product6",
  },
  {
    id: 7,
    title: "Khóa vẽ Trừu tượng",
    sub: "Nâng cao kỹ thuật sáng tạo",
    img: img7,
    workshopLink: "/product7",
  },
  {
    id: 8,
    title: "Khóa vẽ Manga",
    sub: "Cho người yêu truyện tranh",
    img: img8,
    workshopLink: "/product8",
  },
];

export default function Products() {
  const navigate = useNavigate();

  return (
    <section className="products-section">
      <h2 className="products-title">Danh sách khóa học</h2>

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
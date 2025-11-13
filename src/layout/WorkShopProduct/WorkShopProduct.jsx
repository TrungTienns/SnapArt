// src/layout/WorkShopProduct/WorkShopProduct.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./WorkShopProduct.scss";

// Import ảnh từ assets (React sẽ tự xử lý khi dùng Vite/CRA)
import product1 from "../../assets/images/products/product_image7.jpg";
import product2 from "../../assets/images/products/product_image2.jpg";
import product3 from "../../assets/images/products/product_image6.jpg";
import product4 from "../../assets/images/products/product_image3.jpg";
import product5 from "../../assets/images/products/product_image5.jpg";
import product6 from "../../assets/images/products/product_image4.jpg";
import product7 from "../../assets/images/products/product_image1.jpg";
import product8 from "../../assets/images/products/product_image8.jpg";

const workshops = [
  {
    id: 1,
    title: "SẢN PHẨM HỌA CỤ SỈ VÀ LẺ",
    date: "19 thg 12. 2023",
    image: product1,
    path: "/workshop1",
  },
  {
    id: 2,
    title: "Workshop Doanh nghiệp",
    date: "21 thg 11. 2023",
    image: product2,
    path: "/workshop2",
  },
  {
    id: 3,
    title: "Texture Art Workshop",
    date: "13 thg 4. 2023",
    image: product3,
    path: "/workshop3",
  },
  {
    id: 4,
    title: "Workshop Vẽ Tranh Tâm Tình",
    date: "21 thg 12. 2022",
    image: product4,
    path: "/workshop4",
  },
  {
    id: 5,
    title: "Họa Cụ Cao Cấp & Lớp Học",
    date: "5 thg 10. 2023",
    image: product5,
    path: "/workshop5",
  },
  {
    id: 6,
    title: "Workshop Sáng Tạo Cùng Trẻ",
    date: "15 thg 9. 2023",
    image: product6,
    path: "/workshop6",
  },
  {
    id: 7,
    title: "Vẽ Tranh Trừu Tượng",
    date: "28 thg 8. 2023",
    image: product7,
    path: "/workshop7",
  },
  {
    id: 8,
    title: "Lớp Học Vẽ Nâng Cao",
    date: "10 thg 7. 2023",
    image: product8,
    path: "/workshop8",
  },
];

const WorkShopProduct = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="workshop-container">
      <h2 className="section-title">Tớ có những cái này hay lắm nè...</h2>
      <div className="workshop-grid">
        {workshops.map((workshop) => (
          <div
            key={workshop.id}
            className="workshop-card"
            onClick={() => handleClick(workshop.path)}
          >
            <div className="card-image">
              <img src={workshop.image} alt={workshop.title} />
            </div>
            <div className="card-content">
              <div className="card-meta">
                {workshop.date} • {workshop.readTime}
              </div>
              <h3 className="card-title">{workshop.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkShopProduct;
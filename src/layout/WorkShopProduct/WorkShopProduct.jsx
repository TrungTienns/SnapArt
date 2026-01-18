// src/layout/WorkShopProduct/WorkShopProduct.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./WorkShopProduct.scss";

import product1 from "../../assets/images/products/product_image7.jpg";
import product2 from "../../assets/images/products/product_image2.jpg";
import product3 from "../../assets/images/products/product_image6.jpg";
import product4 from "../../assets/images/products/product_image3.jpg";
import product5 from "../../assets/images/products/product_image5.jpg";
import product6 from "../../assets/images/products/product_image4.jpg";
import product7 from "../../assets/images/products/product_image1.jpg";
import product8 from "../../assets/images/products/product_image8.jpg";

const workshops = [
  { id: 1, titleKey: "workshop.item1", date: "19 Dec 2023", image: product1, path: "/workshop1" },
  { id: 2, titleKey: "workshop.item2", date: "21 Nov 2023", image: product2, path: "/workshop2" },
  { id: 5, titleKey: "workshop.item5", date: "5 Oct 2023", image: product5, path: "/workshop5" },
  { id: 6, titleKey: "workshop.item6", date: "15 Sep 2023", image: product6, path: "/workshop6" },
  { id: 8, titleKey: "workshop.item8", date: "10 Jul 2023", image: product8, path: "/workshop8" }
];

const WorkShopProduct = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="workshop-container">
      <h2 className="section-title">
        {t("workshop.title")}
      </h2>

      <div className="workshop-grid">
        {workshops.map((workshop) => (
          <div
            key={workshop.id}
            className="workshop-card"
            onClick={() => handleClick(workshop.path)}
          >
            <div className="card-image">
              <img src={workshop.image} alt={t(workshop.titleKey)} />
            </div>
            <div className="card-content">
              <div className="card-meta">{workshop.date}</div>
              <h3 className="card-title">
                {t(workshop.titleKey)}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkShopProduct;
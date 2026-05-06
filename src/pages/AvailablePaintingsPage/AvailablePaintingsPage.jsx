import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../../layout/Footer/Footer";
import "./AvailablePaintingsPage.scss";

import img1 from "../../assets/images/customPainting/custom1.jpg";
import img2 from "../../assets/images/customPainting/custom2.jpg";
import img3 from "../../assets/images/customPainting/custom3.jpg";
import img4 from "../../assets/images/customPainting/custom4.jpg";
import img5 from "../../assets/images/customPainting/custom5.jpg";
import img6 from "../../assets/images/customPainting/custom6.jpg";
import img7 from "../../assets/images/customPainting/custom7.jpg";
import img8 from "../../assets/images/customPainting/custom8.jpg";
import img9 from "../../assets/images/customPainting/custom9.jpg";
import img10 from "../../assets/images/customPainting/custom10.jpg";
import img11 from "../../assets/images/customPainting/custom11.jpg";

export default function AvailablePaintingsPage() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const facebookLink = "https://www.facebook.com/profile.php?id=61583373132344";

  const data = [
    { id: 1,  title: "001", type: { vi: "Tranh Acrylic",      en: "Acrylic Painting" }, size: "40 x 50 cm",      price: "700.000đ",   img: img1,  facebookLink },
    { id: 2,  title: "002", type: { vi: "Tranh Acrylic",      en: "Acrylic Painting" }, size: "40 x 50 cm",      price: "700.000đ",   img: img2,  facebookLink },
    { id: 3,  title: "003", type: { vi: "Tranh Acrylic",      en: "Acrylic Painting" }, size: "40 x 50 cm",      price: "600.000đ",   img: img3,  facebookLink },
    { id: 4,  title: "004", type: { vi: "Tranh Acrylic",      en: "Acrylic Painting" }, size: "40cm",            price: "600.000đ",   img: img4,  facebookLink },
    { id: 5,  title: "005", type: { vi: "Tranh Acrylic",      en: "Acrylic Painting" }, size: "20 x 25 cm",      price: "250.000đ",   img: img5,  facebookLink },
    { id: 6,  title: "006", type: { vi: "Tranh Acrylic",      en: "Acrylic Painting" }, size: "40cm",            price: "600.000đ",   img: img6,  facebookLink },
    { id: 7,  title: "007", type: { vi: "Tranh Cát Đắp Nổi", en: "Sand Painting"    }, size: "40 x 50 cm",      price: "800.000đ",   img: img8,  facebookLink },
    { id: 8,  title: "008", type: { vi: "Tranh Acrylic",      en: "Acrylic Painting" }, size: "30 x 40 cm",      price: "600.000đ",   img: img9,  facebookLink },
    { id: 9,  title: "009", type: { vi: "Tranh Cát Đắp Nổi", en: "Sand Painting"    }, size: "(30 x 40 cm) x 3", price: "1.500.000đ", img: img10, facebookLink },
    { id: 10, title: "010", type: { vi: "Tranh Acrylic",      en: "Acrylic Painting" }, size: "40 x 60 cm",      price: "1.000.000đ", img: img11, facebookLink },
  ];

  return (
    <div className="available-paintings-page">
      <div style={{ paddingTop: "100px", minHeight: "80vh" }}>
        <section className="products-section">
          <h2 className="products-title">
            {t("products.items.availablePainting.title") || "Tranh Có Sẵn"}
          </h2>

          <div className="products-grid">
            {data.map((item) => (
              <div
                className="product-card"
                key={`custom-${item.id}`}
                onClick={() => window.open(item.facebookLink, "_blank")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") window.open(item.facebookLink, "_blank");
                }}
              >
                <div className="product-image">
                  <img src={item.img} alt={item.title} />
                  <div className="product-image-overlay">
                    <div className="overlay-pill">
                      <span className="overlay-icon">🛒</span>
                      <span className="overlay-text">
                        {t("products.orderButton") || "Đặt mua"}
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="product-name">#{item.title}</h3>

                {item.type && (item.type[i18n.language] || item.type.vi) && (
                  <span className="product-type">
                    {item.type[i18n.language] || item.type.vi}
                  </span>
                )}

                <p className="product-size">{item.size}</p>

                <p className="product-price">{item.price}</p>

                <button
                  className="product-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(item.facebookLink, "_blank");
                  }}
                >
                  {t("products.orderButton") || "Đặt mua"}
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
import React, { useEffect } from 'react'
import Header from '../../layout/Header/Header.jsx'
import Footer from '../../layout/Footer/Footer.jsx'
import { useTranslation } from 'react-i18next';
import './AvailableToteBagPage.scss';

import imgTote1 from "../../assets/images/AvailableToteBags/avImage1.jpg";
import imgTote2 from "../../assets/images/AvailableToteBags/avImage2.jpg";
import imgTote3 from "../../assets/images/AvailableToteBags/avImage3.jpg";
import imgTote4 from "../../assets/images/AvailableToteBags/avImage4.jpg";
import imgTote5 from "../../assets/images/AvailableToteBags/avImage5.jpg";
import imgTote6 from "../../assets/images/AvailableToteBags/avImage6.jpg";
import imgTote7 from "../../assets/images/AvailableToteBags/avImage7.jpg";
import imgTote8 from "../../assets/images/AvailableToteBags/avImage8.jpg";
import imgTote9 from "../../assets/images/AvailableToteBags/avImage9.jpg";
import imgTote10 from "../../assets/images/AvailableToteBags/avImage10.jpg";
import imgTote11 from "../../assets/images/AvailableToteBags/avImage11.jpg";
import imgTote12 from "../../assets/images/AvailableToteBags/avImage12.jpg";
import imgTote13 from "../../assets/images/AvailableToteBags/avImage13.jpg";
import imgTote14 from "../../assets/images/AvailableToteBags/avImage14.jpg";
import imgTote15 from "../../assets/images/AvailableToteBags/avImage15.jpg";
import imgTote16 from "../../assets/images/AvailableToteBags/avImage16.jpg";
import imgTote17 from "../../assets/images/AvailableToteBags/avImage17.jpg";
import imgTote18 from "../../assets/images/AvailableToteBags/avImage18.jpg";
import imgTote19 from "../../assets/images/AvailableToteBags/avImage19.jpg";
import imgTote20 from "../../assets/images/AvailableToteBags/avImage20.jpg";
import imgTote21 from "../../assets/images/AvailableToteBags/avImage21.jpg";
import imgTote22 from "../../assets/images/AvailableToteBags/avImage22.jpg";

const AvailableToteBagPage = () => {

    const { t, i18n } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const facebookLink = "https://www.facebook.com/profile.php?id=61583373132344";

    const data = [
        { id: 1,  title: "TOTE-001", type: { vi: "Túi Tote", en: "Tote Bag" }, size: "35 x 40 cm", price: "250.000đ", img: imgTote1, facebookLink },
        { id: 2,  title: "TOTE-002", type: { vi: "Túi Tote", en: "Tote Bag" }, size: "35 x 40 cm", price: "250.000đ", img: imgTote2, facebookLink },
        { id: 3,  title: "TOTE-003", type: { vi: "Túi Tote", en: "Tote Bag" }, size: "35 x 40 cm", price: "250.000đ", img: imgTote3, facebookLink },
        { id: 4,  title: "TOTE-004", type: { vi: "Túi Tote", en: "Tote Bag" }, size: "35 x 40 cm", price: "250.000đ", img: imgTote4, facebookLink },
        { id: 5,  title: "TOTE-005", type: { vi: "Túi Tote", en: "Tote Bag" }, size: "35 x 40 cm", price: "250.000đ", img: imgTote5, facebookLink },
        { id: 6,  title: "TOTE-006", type: { vi: "Túi Tote", en: "Tote Bag" }, size: "35 x 40 cm", price: "250.000đ", img: imgTote6, facebookLink },
        { id: 7,  title: "TOTE-007", type: { vi: "Túi Tote", en: "Tote Bag" }, size: "35 x 40 cm", price: "250.000đ", img: imgTote7, facebookLink },
        { id: 8,  title: "TOTE-008", type: { vi: "Túi Tote", en: "Tote Bag" }, size: "35 x 40 cm", price: "250.000đ", img: imgTote8, facebookLink },
        { id: 9,  title: "TOTE-009", type: { vi: "Túi Tote", en: "Tote Bag" }, size: "35 x 40 cm", price: "250.000đ", img: imgTote9, facebookLink },
        { id: 10, title: "TOTE-010", type: { vi: "Túi Tote", en: "Tote Bag" }, size: "35 x 40 cm", price: "250.000đ", img: imgTote10, facebookLink },
        { id: 11, title: "TOTE-011", type: { vi: "Túi Tote", en: "Tote Bag" }, size: "35 x 40 cm", price: "250.000đ", img: imgTote11, facebookLink },
        { id: 12, title: "TOTE-012", type: { vi: "Túi Tote", en: "Tote Bag" }, size: "35 x 40 cm", price: "250.000đ", img: imgTote12, facebookLink },
        { id: 13, title: "TOTE-013", type: { vi: "Túi Tote", en: "Tote Bag" }, size: "35 x 40 cm", price: "250.000đ", img: imgTote13, facebookLink },
        { id: 14, title: "TOTE-014", type: { vi: "Túi Tote", en: "Tote Bag" }, size: "35 x 40 cm", price: "250.000đ", img: imgTote14, facebookLink },
        { id: 15, title: "TOTE-015", type: { vi: "Túi Tote", en: "Tote Bag" }, size: "35 x 40 cm", price: "250.000đ", img: imgTote15, facebookLink },
        { id: 16, title: "TOTE-016", type: { vi: "Túi Tote", en: "Tote Bag" }, size: "35 x 40 cm", price: "250.000đ", img: imgTote16, facebookLink },
        { id: 17, title: "TOTE-017", type: { vi: "Túi Tote", en: "Tote Bag" }, size: "35 x 40 cm", price: "250.000đ", img: imgTote17, facebookLink },
        { id: 18, title: "TOTE-018", type: { vi: "Túi Tote", en: "Tote Bag" }, size: "35 x 40 cm", price: "250.000đ", img: imgTote18, facebookLink },
        { id: 19, title: "TOTE-019", type: { vi: "Túi Tote", en: "Tote Bag" }, size: "35 x 40 cm", price: "250.000đ", img: imgTote19, facebookLink },
        { id: 20, title: "TOTE-020", type: { vi: "Túi Tote", en: "Tote Bag" }, size: "35 x 40 cm", price: "250.000đ", img: imgTote20, facebookLink },
        { id: 21, title: "TOTE-021", type: { vi: "Túi Tote", en: "Tote Bag" }, size: "35 x 40 cm", price: "250.000đ", img: imgTote21, facebookLink },
        { id: 22, title: "TOTE-022", type: { vi: "Túi Tote", en: "Tote Bag" }, size: "35 x 40 cm", price: "250.000đ", img: imgTote22, facebookLink },
    ];

    return (
        <div className="available-tote-bag-page">
            <Header />
            
            <div style={{ paddingTop: "100px", paddingBottom: "40px", minHeight: "80vh" }}>
                <section className="products-section">
                    <h2 className="products-title">
                        {t("products.items.availableToteBag.title") || "Các túi tote có sẵn"}
                    </h2>

                    <div className="products-grid">
                        {data.map((item) => (
                            <div
                                className="product-card"
                                key={`tote-${item.id}`}
                                onClick={() => window.open(item.facebookLink, "_blank")}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") window.open(item.facebookLink, "_blank");
                                }}
                            >
                                <div className="product-image">
                                    <img src={item.img} alt={item.title} loading="lazy" decoding="async" />
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
    )
}

export default AvailableToteBagPage;
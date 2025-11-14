import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import "./GalleryPage.scss";

// hình demo
import adultImg from "../../assets/images/aboutus_image1.jpg";
import kidsImg from "../../assets/images/aboutus_image2.jpg";

const collections = [
  {
    id: 1,
    title: "Bộ sưu tập dành cho người lớn",
    img: adultImg,
    link: "/adult-collection",
  },
  {
    id: 2,
    title: "Bộ sưu tập dành cho trẻ em",
    img: kidsImg,
    link: "/kids-collection",
  },
];

const GalleryPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <section className="gallery-page">
        <h2 className="gallery-title">Chọn bộ sưu tập</h2>
        <div className="gallery-collections">
          {collections.map((col) => (
            <div
              className="collection-card"
              key={col.id}
              onClick={() => navigate(col.link)}
            >
              <img src={col.img} alt={col.title} />
              <div className="collection-overlay">
                <h3>{col.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GalleryPage;
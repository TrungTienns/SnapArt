import React, { useEffect } from "react";
import Header from "../../../layout/Header/Header";
import Footer from "../../../layout/Footer/Footer";
import "./KidsCollection.scss";

// ảnh demo
import img1 from "../../../assets/images/kids/kids1.jpg";
import img2 from "../../../assets/images/kids/kids2.jpg";
import img3 from "../../../assets/images/kids/kids3.jpg";
import img4 from "../../../assets/images/kids/kids4.jpg";
import img5 from "../../../assets/images/kids/kids5.jpg";

const kidsImages = [img1, img2, img3, img4, img5, img1, img2, img3, img4, img5];

const KidsCollection = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".collection-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <>
      <Header />
      <section className="collection-page">
        <h2 className="collection-title">Bộ sưu tập dành cho trẻ em</h2>
        <div className="collection-grid">
          {kidsImages.map((img, idx) => (
            <div className="collection-card" key={idx}>
              <img src={img} alt={`Kids ${idx}`} />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default KidsCollection;
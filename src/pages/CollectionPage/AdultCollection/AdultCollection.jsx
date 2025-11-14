import React, { useEffect } from "react";
import Header from "../../../layout/Header/Header";
import Footer from "../../../layout/Footer/Footer";
import "./AdultCollection.scss";

// ảnh demo
import img1 from "../../../assets/images/adults/adult1.jpg";
import img2 from "../../../assets/images/adults/adult2.jpg";
import img3 from "../../../assets/images/adults/adult3.jpg";
import img4 from "../../../assets/images/adults/adult4.jpg";
import img5 from "../../../assets/images/adults/adult5.jpg";

const adultImages = [img1, img2, img3, img4, img5, img1, img2, img3, img4, img5];

const AdultCollection = () => {
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
        <h2 className="collection-title">Bộ sưu tập dành cho người lớn</h2>
        <div className="collection-grid">
          {adultImages.map((img, idx) => (
            <div className="collection-card" key={idx}>
              <img src={img} alt={`Adult ${idx}`} />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AdultCollection;
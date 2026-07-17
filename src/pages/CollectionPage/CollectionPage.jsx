import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import photoService from "../../services/photoService";
import "./CollectionPage.scss";

const CollectionPage = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "vi";

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  // modal state
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const loadPhotos = async () => {
      try {
        const data = await photoService.getAllPhotos();
        setPhotos(data);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách ảnh:", error);
      } finally {
        setLoading(false);
      }
    };
    loadPhotos();
  }, []);

  useEffect(() => {
    if (loading) return;
    
    const cards = document.querySelectorAll(".collection-card");
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [loading, photos]);

  // mở modal
  const openModal = (idx) => {
    setActiveIndex(idx);
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // khóa scroll
  };

  // đóng modal
  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  // next/prev (loop)
  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % photos.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? photos.length - 1 : prev - 1
    );
  };

  // keyboard support
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const pageTitle = currentLang === "vi" ? "Ảnh Khách Hàng (Customer Feedbacks)" : "Customer Collection";

  return (
    <>
      <Header />

      <section className="collection-page">
        <h2 className="collection-title">{pageTitle}</h2>

        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Đang tải dữ liệu...</p>
          </div>
        ) : photos.length === 0 ? (
          <p className="no-photos-msg">Hiện tại chưa có hình ảnh nào.</p>
        ) : (
          <div className="collection-grid">
            {photos.map((photo, idx) => {
              const desc = currentLang === "vi" ? photo.description : (photo.description_en || photo.description);
              return (
                <div className="collection-card" key={photo.photo_id}>
                  <img
                    src={photo.image_url}
                    alt={desc || `Customer photo ${idx + 1}`}
                  />

                  {/* overlay hover */}
                  <div className="card-overlay">
                    <button
                      className="view-btn"
                      onClick={() => openModal(idx)}
                    >
                      {currentLang === "vi" ? "Xem ảnh" : "View"}
                    </button>
                    {desc && <p className="card-desc">{desc}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* MODAL */}
      {isOpen && photos.length > 0 && (
        <div className="image-modal" onClick={closeModal}>
          <button className="close-modal-btn" onClick={closeModal}>✕</button>

          <button className="nav-btn prev" onClick={(e) => { e.stopPropagation(); goPrev(); }}>
            ‹
          </button>

          <div
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()} 
          >
            <img
              className="modal-img"
              src={photos[activeIndex]?.image_url}
              alt={`Full ${activeIndex + 1}`}
            />
            
            {/* Modal Description if available */}
            {(() => {
              const desc = currentLang === "vi" 
                ? photos[activeIndex]?.description 
                : (photos[activeIndex]?.description_en || photos[activeIndex]?.description);
              return desc ? (
                <div className="modal-caption">{desc}</div>
              ) : null;
            })()}
          </div>

          <button className="nav-btn next" onClick={(e) => { e.stopPropagation(); goNext(); }}>
            ›
          </button>
        </div>
      )}

      <Footer />
    </>
  );
};

export default CollectionPage;

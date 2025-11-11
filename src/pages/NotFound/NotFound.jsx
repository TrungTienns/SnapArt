import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import { path } from "../../common/path";
import { useTranslation } from 'react-i18next';
import './NotFound.scss'; // <-- Thêm dòng này

const NotFound = () => {
  const [animationData, setAnimationData] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    import("../../assets/animation/404CatPink.json")
      .then((data) => setAnimationData(data.default || data))
      .catch(() => {
        setAnimationData({
          v: "5.7.1",
          layers: [],
        });
      });
  }, []);

  const handleClick = () => navigate(path.homepage);

  if (!animationData) return <div>Loading...</div>;

  return (
    <div className="notfound-container">
      
      {/* Wrapper để căn giữa text */}
      <div className="notfound-text-wrapper">
        <h1 className="notfound-title">{t('notfound.title')}</h1>
        <p className="notfound-subtitle">{t('notfound.subtitle')}</p>
      </div>

      {/* Wrapper cho animation */}
      <div className="notfound-animation-wrapper">
        <Lottie animationData={animationData} loop={true} />
      </div>

      {/* Wrapper cho nút */}
      <div className="notfound-button-wrapper">
        <button
          type="button"
          className="notfound-btn" // <-- Chỉ dùng class
          onClick={handleClick}
          aria-label="Go back to homepage"
        >
          {t('notfound.button')}
        </button>
      </div>
    </div>
  );
};

export default NotFound;
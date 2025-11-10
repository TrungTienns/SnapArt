import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import { path } from "../../common/path";

const NotFound = () => {
  const [animationData, setAnimationData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    import("../../assets/animation/Animation404.json")
      .then((data) => setAnimationData(data.default || data))
      .catch(() => {
        // Fallback nếu file lỗi
        setAnimationData({
          v: "5.7.1",
          layers: [],
          // ... fallback đơn giản
        });
      });
  }, []);

  const handleClick = () => navigate(path.homepage);

  if (!animationData) return <div>Loading...</div>;

  return (
    <div className="notfound-container" onClick={handleClick} style={{ cursor: "pointer" }}>
      <div style={{ width: 400, height: 400, margin: "0 auto" }}>
        <Lottie animationData={animationData} loop={true} />
      </div>
      <h1 className="notfound-title">Page Not Found</h1>
      <p className="notfound-subtitle">Click anywhere to return to homepage</p>
    </div>
  );
};

export default NotFound;
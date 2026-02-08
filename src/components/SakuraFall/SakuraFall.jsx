import React, { useEffect, useState } from "react";
import Snowfall from "react-snowfall";

import sakuraImg from "../../assets/icons/sakurafall.png";

export default function SakuraFall() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const img = new Image();
    img.src = sakuraImg;

    img.onload = () => {
      setImages([img]);
    };
  }, []);

  if (images.length === 0) return null;

  return (
    <Snowfall
      images={images}
      snowflakeCount={90}          // tăng số lượng cho rõ
      radius={[18, 40]}            // tăng kích thước hoa (QUAN TRỌNG)
      speed={[1.2, 3.2]}           // rơi rõ hơn
      wind={[-0.4, 1.6]}           // gió bay nhẹ
      rotationSpeed={[-2, 2]}      // xoay rõ hơn 1 chút
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
        pointerEvents: "none",

        // làm hoa rõ hơn (đây là cái bạn cần nhất)
        filter: "contrast(1.35) saturate(1.5)",
      }}
    />
  );
}



import React, { useEffect, useState } from 'react';
import './Banner.scss';

const loopWords = ['Vẽ Tranh', 'Đan Len', 'Thêu Thùa', 'Đính Đá'];

function Banner() {
  const [loopIdx, setLoopIdx] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
      setTimeout(() => {
        setLoopIdx((prev) => (prev + 1) % loopWords.length);
        setShow(true);
      }, 350);
    }, 1800);
    return () => clearTimeout(timeout);
  }, [loopIdx, show]);

  return (
    <section className="hero-artworkshop">
      <div className="hero-artworkshop-left">
        <div className="hero-snapart-name">SnapArt</div>
        <h1 className="hero-artworkshop-title">
          <span className="hero-title-group">
            Workshop <span className={`hero-loop-word-art${show ? ' show' : ''}`}>{loopWords[loopIdx]}</span>
          </span>
        </h1>
        <p className="hero-artworkshop-desc">
          Khơi nguồn sáng tạo, cùng nhau <b>{loopWords[loopIdx]}</b> nên những tác phẩm dễ thương và đầy cảm hứng!<br/>
          Tham gia ngay để trải nghiệm không gian nghệ thuật vui nhộn, thân thiện và đầy màu sắc.
        </p>
        <a href="#dang-ky" className="hero-artworkshop-btn">Tham gia Workshop</a>
      </div>
      <div className="hero-artworkshop-right">
        <div className="art-illustration">
          <div className="art-palette"></div>
          <div className="art-brush"></div>
          <div className="art-splatter art-splatter1"></div>
          <div className="art-splatter art-splatter2"></div>
          <div className="art-splatter art-splatter3"></div>
        </div>
      </div>
    </section>
  );
}

export default Banner;

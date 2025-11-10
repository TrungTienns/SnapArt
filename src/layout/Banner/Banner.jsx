// src/components/Banner/Banner.jsx
import React, { useEffect, useState } from 'react';
import './Banner.scss';
import logo from '../../assets/images/banner.png';
import flower from '../../assets/icons/flower.png';
import sun from '../../assets/icons/sun.png';
import brush from '../../assets/icons/paint-brush.png';

const loopWords = ['Vẽ Tranh', 'Đan Len', 'Thêu Thùa', 'Đính Đá'];

function Banner() {
  const [loopIdx, setLoopIdx] = useState(0);
  const [show, setShow] = useState(true);
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setLoopIdx((prev) => (prev + 1) % loopWords.length);
        setShow(true);
      }, 350);
    }, 2150);

    const logoTimer = setTimeout(() => {
      setLogoVisible(true);
    }, 500);

    return () => {
      clearInterval(interval);
      clearTimeout(logoTimer);
    };
  }, []);

  return (
    <section className="hero-artworkshop fullscreen">
      <div className="hero-artworkshop-left">
        <div className="hero-snapart-name">SnapArt</div>
        <h1 className="hero-artworkshop-title">
          Workshop{' '}
          <span className="hero-loop-wrapper">
            <span
              className={`hero-loop-word-art${show ? ' show' : ''}`}
              style={{ fontSize: loopWords[loopIdx].length > 7 ? '0.85em' : '1em' }}
            >
              {loopWords[loopIdx]}
            </span>
          </span>
        </h1>
        <p className="hero-artworkshop-desc">
          Khơi nguồn sáng tạo, cùng nhau <b>{loopWords[loopIdx]}</b> tạo ra tác phẩm dễ thương!
        </p>
        <a href="#dang-ky" className="hero-artworkshop-btn">
          Tham gia Workshop
        </a>
      </div>

      <div className="hero-artworkshop-right">
        {/* Logo lớn */}
        <img
          src={logo}
          alt="Logo SnapArt"
          className={`hero-logo${logoVisible ? ' show-logo' : ''}`}
        />

        {/* Icon nhỏ bay trên đầu */}
        <img src={flower} alt="flower" className="icon-small icon1" />
        <img src={sun} alt="sun" className="icon-small icon2" />
        <img src={brush} alt="brush" className="icon-small icon3" />
      </div>
    </section>
  );
}

export default Banner;
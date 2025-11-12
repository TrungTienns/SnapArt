// src/components/Banner/Banner.jsx
import React, { useEffect, useState } from 'react';
import './Banner.scss';
import logo from '../../assets/images/banner.png';
import flower from '../../assets/icons/flower.png';
import sun from '../../assets/icons/sun.png';
import brush from '../../assets/icons/paint-brush.png';

const loopWords = [
  'Vẽ acrylic',
  'Vẽ trên ly',
  'Vẽ túi tote',
  'Làm tranh resin'
];

function Banner() {
  const [loopIdx, setLoopIdx] = useState(0);
  const [show, setShow] = useState(true);
  const [logoVisible, setLogoVisible] = useState(false);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Loop words animation
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setLoopIdx((prev) => (prev + 1) % loopWords.length);
        setShow(true);
      }, 350);
    }, 2150);

    // Show logo animation
    const logoTimer = setTimeout(() => {
      setLogoVisible(true);
    }, 500);

    // Scroll to fade
    const handleScroll = () => {
      const aboutSection = document.querySelector('#about-us-section');
      if (!aboutSection) return;

      const scrollY = window.scrollY;
      const aboutOffsetTop = aboutSection.offsetTop;
      const fadeStart = aboutOffsetTop - window.innerHeight / 1.5;
      let newOpacity = 1 - (scrollY - fadeStart) / 200;
      newOpacity = Math.max(Math.min(newOpacity, 1), 0);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      clearTimeout(logoTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      className="hero-artworkshop fullscreen"
      style={{ opacity: opacity }}
    >
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
        <a href="/contact" className="hero-artworkshop-btn">
          Tham gia Workshop
        </a>
      </div>

      <div className="hero-artworkshop-right">
        <img
          src={logo}
          alt="Logo SnapArt"
          className={`hero-logo${logoVisible ? ' show-logo' : ''}`}
        />
        <img src={flower} alt="flower" className="icon-small icon1" />
        <img src={sun} alt="sun" className="icon-small icon2" />
        <img src={brush} alt="brush" className="icon-small icon3" />
      </div>
    </section>
  );
}

export default Banner;
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/logo.png';
import Lottie from 'lottie-react';
import cuteCatWork from '../../assets/animation/CuteCatWorks.json';

function Header({ footerRef }) {
  const navigate = useNavigate(); // <-- dùng navigate
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  const links = [
    { to: '/', label: 'TRANG CHỦ' },
    { to: '/about', label: 'VỀ CHÚNG TÔI' },
    { to: '/product', label: 'TÁC PHẨM' },
    { to: '/works', label: 'KHÓA HỌC' },
    { to: '/blog', label: 'BLOG' },
    { to: '/contact', label: 'LIÊN HỆ' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 50);

      if (currentScroll > lastScroll && currentScroll > 100) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  // Scroll xuống Footer (nếu muốn)
  const scrollToFooter = (e) => {
    e?.preventDefault();
    if (footerRef && footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <header
      className={`site-header ${scrolled ? 'scrolled' : ''} ${hideHeader ? 'hide' : ''}`}
      role="banner"
    >
      <div className="header-inner">
        {/* Logo */}
        <div className="header-left">
          <Link to="/" className="brand" aria-label="SnapArt Homepage">
            <img src={logo} alt="SnapArt logo" className="brand-logo" />
          </Link>
        </div>

        {/* Navigation */}
        <nav className={`main-nav ${open ? 'open' : ''}`} aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to === '/contact' ? '#' : link.to}
              className="nav-link"
              onClick={(e) => {
                if (link.to === '/contact') {
                  scrollToFooter(e); // Scroll xuống Footer khi bấm LIÊN HỆ
                } else {
                  setOpen(false);
                }
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Animation + Mobile Toggle */}
        <div className="header-right">
          {/* Nút CTA chuyển sang /workshop */}
          <button
            onClick={() => navigate('/works')}
            className="cta"
            aria-label="Đi tới workshop"
          >
            Đi với tôi nào!
          </button>

          <button
            className={`menu-toggle ${open ? 'open' : ''}`}
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Cute Cat Animation */}
        <div className="header-animation">
          <Lottie animationData={cuteCatWork} loop={true} />
        </div>
      </div>

      {open && (
        <div className="mobile-backdrop" onClick={() => setOpen(false)} aria-hidden="true" />
      )}
    </header>
  );
}

export default Header;
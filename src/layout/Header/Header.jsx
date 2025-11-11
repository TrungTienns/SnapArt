// src/layout/Header/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'; // Đã sửa đường dẫn
import logo from '../../assets/logo.png';

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  const links = [
    { to: '/', label: 'HOME' },
    { to: '/about', label: 'ABOUT US' },
    { to: '/works', label: 'WORKS' },
    { to: '/services', label: 'SERVICES' },
    { to: '/blog', label: 'BLOG' },
    { to: '/contact', label: 'CONTACT' },
  ];

  // Scroll effects: Ẩn header khi cuộn xuống, hiện khi cuộn lên
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 50);

      // Ẩn header khi cuộn xuống quá 100px
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

  // Hàm scroll mượt xuống Footer
  const scrollToFooter = (e) => {
    e.preventDefault();
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false); // Đóng menu mobile nếu đang mở
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
            <span className="brand-name">SnapArt</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav
          className={`main-nav ${open ? 'open' : ''}`}
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="header-right">
          <button
            onClick={scrollToFooter}
            className="cta"
            aria-label="Scroll to contact section"
          >
            Let's Go!
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
      </div>

      {/* Mobile Menu Backdrop */}
      {open && (
        <div
          className="mobile-backdrop"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}

export default Header;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../layout/Header/Header.scss';
import logo from '../../assets/logo.png';

function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: '/', label: 'HOME' },
    { to: '/about', label: 'ABOUT' },
    { to: '/works', label: 'WORKS' },
    { to: '/services', label: 'SERVICES' },
    { to: '/testimonial', label: 'TESTIMONIAL' },
    { to: '/blog', label: 'BLOG' },
    { to: '/contact', label: 'CONTACT' },
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-left">
          <Link to="/" className="brand">
            <img src={logo} alt="SnapArt logo" className="brand-logo" />
            <span className="brand-name">SnapArt</span>
          </Link>
        </div>

        <nav className={`main-nav ${open ? 'open' : ''}`} aria-label="Main navigation">
          {links.map((l) => (
            <Link key={l.label} to={l.to} className="nav-link" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="header-right">
          <Link to="/contact" className="cta" onClick={() => setOpen(false)}>
            Let's Talk
          </Link>

          <button
            className={`menu-toggle ${open ? 'open' : ''}`}
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* backdrop for mobile when menu is open */}
      {open && <div className="mobile-backdrop" onClick={() => setOpen(false)} />}
    </header>
  );
}

export default Header;

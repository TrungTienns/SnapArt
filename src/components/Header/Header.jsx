import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../layout/Header/Header.scss';
import logo from '../../assets/logo.png';

function Header() {
  const [open, setOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const links = [
    { to: '/', key: 'nav.home' },
    { to: '/about', key: 'nav.about' },
    { to: '/works', key: 'nav.works' },
    { to: '/services', key: 'nav.services' },
    { to: '/testimonial', key: 'nav.testimonial' },
    { to: '/blog', key: 'nav.blog' },
    { to: '/contact', key: 'nav.contact' },
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-left">
          <Link to="/" className="brand">
            <img src={logo} alt="Matias logo" className="brand-logo" />
            <span className="brand-name">Matias</span>
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
            {t('cta')}
          </Link>

          {/* language switcher */}
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginRight: 8 }}>
            <button
              onClick={() => i18n.changeLanguage('vi')}
              aria-label="Tiếng Việt"
              style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.12)', padding: '6px 10px', borderRadius: 6 }}
            >
              VI
            </button>
            <button
              onClick={() => i18n.changeLanguage('en')}
              aria-label="English"
              style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.12)', padding: '6px 10px', borderRadius: 6 }}
            >
              EN
            </button>
          </div>

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

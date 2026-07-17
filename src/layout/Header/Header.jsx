import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo.png";
import Lottie from "lottie-react";
import cuteCatWork from "../../assets/animation/CuteCatWorks.json";
import sunFlowerAnimation from "../../assets/animation/sunflowerAnimation.json";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const { getCartCount } = useContext(CartContext);
  const cartCount = getCartCount();

  const [open, setOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  const currentLang = i18n.language || "vi";

  const links = [
    { to: "/", label: t("menu.home") },
    { to: "/about", label: t("menu.about") },
    { to: "/collection", label: t("menu.artwork") },
    { to: "/workshop", label: t("menu.workshop") },
    { to: "/categories", label: t("menu.course") },
    { to: "/blog", label: t("menu.blog") },
    { to: "/contact", label: t("menu.contact") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 50);

      if (current > lastScroll && current > 100) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <header
      className={`site-header ${scrolled ? "scrolled" : ""} ${
        hideHeader ? "hide" : ""
      }`}
    >
      <div className="header-inner">
        {/* LEFT */}
        <div className="header-left">
          <Link to="/" className="brand">
            <img src={logo} alt="SnapArt logo" className="brand-logo" />
          </Link>
        </div>

        {/* NAV */}
        <nav className={`main-nav ${open ? "open" : ""}`}>
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="header-right">
          <div className="lang-switch">
            <button
              className={`flag-btn ${currentLang === "vi" ? "active" : ""}`}
              onClick={() => changeLanguage("vi")}
              title="Tiếng Việt"
              aria-label="Switch to Vietnamese"
            >
              🇻🇳
            </button>
            <button
              className={`flag-btn ${currentLang === "en" ? "active" : ""}`}
              onClick={() => changeLanguage("en")}
              title="English"
              aria-label="Switch to English"
            >
              🇺🇸
            </button>
          </div>

          <div className="user-action">
            <Link to="/cart" className="cart-icon-btn" title="Giỏ Hàng">
              <FontAwesomeIcon icon={faShoppingCart} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>

            {user ? (
              <div className="user-dropdown-container">
                <button 
                  className="user-icon-btn" 
                  onClick={() => setShowUserMenu(!showUserMenu)}
                >
                  <FontAwesomeIcon icon={faUser} />
                </button>
                {showUserMenu && (
                  <div className="user-dropdown">
                    <div className="user-info">
                      <strong>{user.full_name}</strong>
                      <span>{user.email}</span>
                    </div>
                    {user.role === 'admin' && (
                      <Link to="/admin" className="dropdown-item" onClick={() => setShowUserMenu(false)}>
                        Admin Dashboard
                      </Link>
                    )}
                    <button className="dropdown-item logout-btn" onClick={() => { logout(); setShowUserMenu(false); }}>
                      {currentLang === 'en' ? 'Log Out' : 'Đăng xuất'}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="user-icon-btn" title="Login / Register">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            )}
          </div>
          <button
            className={`menu-toggle ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {open && <div className="mobile-backdrop" onClick={() => setOpen(false)} />}
    </header>
  );
}

export default Header;
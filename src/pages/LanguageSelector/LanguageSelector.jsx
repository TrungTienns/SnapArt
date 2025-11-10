import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.scss';

export default function LanguageSelector({ onSelect }) {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const select = (lng) => {
    i18n.changeLanguage(lng);
    try {
      localStorage.setItem('lang', lng);
      localStorage.setItem('langChosen', '1');
    } catch (e) {
      // ignore storage errors
    }
    if (onSelect) {
      onSelect(lng);
    } else {
      // close the selector and go back to homepage
      navigate('/');
    }
  };

  return (
    <div className="lang-overlay" role="dialog" aria-modal="true">
      <div className="lang-card">
        <h2 className="lang-title">Chọn ngôn ngữ</h2>
        <div className="lang-actions">
          <button className="lang-btn lang-btn--primary" onClick={() => select('en')}>
            English
          </button>
          <button className="lang-btn" onClick={() => select('vi')}>
            Tiếng Việt
          </button>
        </div>
      </div>
    </div>
  );
}

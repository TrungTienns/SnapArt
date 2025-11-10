import React, { useEffect, useState } from 'react';
import LanguageSelector from '../../pages/LanguageSelector/LanguageSelector';

export default function LanguageGate({ children }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const chosen = localStorage.getItem('langChosen');
      if (!chosen) setOpen(true);
    } catch (e) {
      // if storage not available, still show selector
      setOpen(true);
    }
  }, []);

  const handleSelect = (lng) => {
    setOpen(false);
    // language already saved by selector; keep rendering children
  };

  return (
    <>
      {open && <LanguageSelector onSelect={handleSelect} />}
      {children}
    </>
  );
}

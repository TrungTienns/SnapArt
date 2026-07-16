import React, { useEffect, useState } from 'react';
import AppRoutes from './routes/AppRoutes';
import AboutUsSection from './components/AboutUsSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // khởi tạo AOS
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });

    // giả lập loading
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="loading-cat-container">
          <h1>🐱 Loading...</h1>
        </div>
      )}
      <AppRoutes />
    </>
  );
}
export default App;
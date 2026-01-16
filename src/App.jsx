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
          {/* Bạn có thể chèn animation Lottie ở đây */}
          <h1>🐱 Loading...</h1>
        </div>
      )}

      {/* Banner */}
      <section className="banner" data-aos="fade">
        <h1>Welcome to Besnik Consultancy</h1>
      </section>

      {/* About Us */}
      <AboutUsSection />

      {/* App Routes */}
      <AppRoutes />
    </>
  );
}
export default App;
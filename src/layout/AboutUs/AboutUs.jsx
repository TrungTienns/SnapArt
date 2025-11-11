import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutUs.scss';

import img1 from '../../assets/images/aboutus_image1.jpg';
import img2 from '../../assets/images/aboutus_image2.jpg';
import img3 from '../../assets/images/aboutus_image3.jpg';
import img4 from '../../assets/images/aboutus_image4.jpg';

const infoItems = [
  { number: '1.', title: 'Who We Are', description: 'Chúng tôi là một xưởng nghệ thuật sáng tạo, nơi đam mê hội họa được thắp lửa và mọi ý tưởng đều được trân trọng..' },
  { number: '2.', title: 'What Do We Do', description: 'Chúng tôi cung cấp các khóa học và workshop (từ cơ bản đến nâng cao), giúp bạn nắm vững các kỹ thuật từ màu nước, sơn dầu đến vẽ kỹ thuật số.' },
  { number: '3.', title: 'How Do We Help', description: 'Thông qua không gian ấm cúng, âm nhạc chữa lành và sự hướng dẫn tận tình, chúng tôi giúp bạn giải tỏa căng thẳng và kết nối lại với bản thân.' },
  { number: '4.', title: 'Create Success Story', description: 'Chúng tôi giúp bạn tìm thấy một niềm vui mới, một sở thích lành mạnh sau giờ làm việc, và tự tay mang về một tác phẩm "chữa lành" do chính bạn tạo ra.' },
];

const images = [img1, img2, img3, img4];

const AboutUs = () => {
  useEffect(() => { AOS.init({ duration: 800, easing: 'ease-in-out', once: true }); }, []);

  return (
    <section className="about-us-section">
      <div className="about-us__container">
        {/* Header */}
        <div className="about-us__header" data-aos="fade-down">
          <div className="header__text">
            <h2>Về Chúng Tôi</h2>
            <p>
              Chào mừng đến workshop, nơi chúng tôi trân trọng từng khoảnh khắc. Chúng tôi ở đây vì<br/>
              <span className="values-highlight">— sự thư giãn, thể hiện bản thân, và năng lượng tích cực.</span>
            </p>
          </div>
          <a href="about" className="learn-more-btn">Tìm hiểu thêm</a>
        </div>

        {/* Main Content */}
        <div className="about-us__main-content">
          {/* Info Grid */}
          <div className="about-us__info-grid" data-aos="fade-right">
            {infoItems.map((item) => (
              <div className="info-item" key={item.number}>
                <div className="info-item__number">{item.number}</div>
                <div className="info-item__content">
                  <h3 className="info-item__title">{item.title}</h3>
                  <p className="info-item__description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image Grid */}
          <div className="about-us__image-grid" data-aos="fade-left">
            {images.map((img, index) => (
              <div className={`image-wrapper size-${index + 1}`} key={index}>
                <img src={img} alt={`About us ${index + 1}`} className="image-grid__item"/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
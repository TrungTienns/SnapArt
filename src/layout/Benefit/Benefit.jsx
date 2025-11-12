// src/components/Benefit/Benefit.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Benefit.scss';

import aboutus1 from '../../assets/images/aboutus_image1.jpg';
import aboutus2 from '../../assets/images/aboutus_image2.jpg';
import aboutus3 from '../../assets/images/aboutus_image3.jpg';
import aboutus4 from '../../assets/images/aboutus_image4.jpg';

const Benefit = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const benefits = [
    {
      title: 'Kết nối, lắng nghe và chữa lành cùng nhau.',
      desc: 'Vẽ tranh giúp tâm hồn bạn được nghỉ ngơi, tạm quên đi mọi áp lực, và cảm nhận từng nhịp thở dịu dàng. Mỗi nét cọ là một khoảng lặng để chữa lành và tìm lại sự bình yên.',
      img: aboutus1,
      aos: 'fade-right',
    },
    {
      title: 'Phát triển khả năng sáng tạo',
      desc: 'Hội họa mở ra không gian vô tận cho trí tưởng tượng, nơi bạn thỏa sức sáng tạo và thể hiện bản thân. Mỗi màu sắc, mỗi đường nét là một phần của hành trình tự do và chữa lành tâm hồn.',
      img: aboutus2,
      aos: 'fade-up',
    },
    {
      title: 'Tăng khả năng quan sát và tập trung',
      desc: 'Khi vẽ, bạn học cách quan sát chi tiết và chú ý đến từng ánh sáng, màu sắc và đường nét. Điều này giúp tâm trí tĩnh lặng, nâng cao sự kiên nhẫn, và rèn luyện khả năng tập trung sâu để chữa lành bên trong.',
      img: aboutus3,
      aos: 'fade-left',
    },
    {
      title: 'Làm đẹp cho không gian sống',
      desc: 'Một bức tranh tự tay bạn tạo ra không chỉ làm đẹp căn phòng, mà còn lan tỏa cảm giác ấm áp và bình yên. Mỗi tác phẩm là dấu ấn riêng, khiến không gian sống trở nên sinh động và chữa lành tâm hồn.',
      img: aboutus4,
      aos: 'fade-up',
    },
  ];

  return (
    <section className="benefit-section">
      <div className="benefit-header" data-aos="zoom-in">
        <h2>Lợi Ích Của Việc Vẽ Tranh & Nghệ Thuật</h2>
        <p>Vẽ không đơn giản là những những nét màu đơn giản, mà nó là câu chuyện của những người nhiều suy tư</p>
      </div>

      <div className="benefit-grid">
        {benefits.map((b, index) => (
          <div
            className={`benefit-card card-${index + 1}`}
            key={index}
            data-aos={b.aos}
          >
            <img src={b.img} alt={b.title} />
            <div className="benefit-content">
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefit;
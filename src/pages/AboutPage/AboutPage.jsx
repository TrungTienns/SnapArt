import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../layout/BannerAboutUs/BannerAboutUs.scss';
import '../../layout/AboutUs/AboutUs.jsx'

import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import './AboutPage.scss';

import img1 from '../../assets/images/aboutus_image1.jpg';
import img2 from '../../assets/images/aboutus_image2.jpg';
import img3 from '../../assets/images/aboutus_image3.jpg';
import img4 from '../../assets/images/aboutus_image4.jpg';
import BannerAboutUs from '../../layout/BannerAboutUs/BannerAboutUs';

const infoItems = [
  {
    number: '1.',
    title: 'Who We Are',
    description:
      'Chúng tôi là một xưởng nghệ thuật sáng tạo – nơi mỗi nét vẽ đều mang một câu chuyện riêng. Với đội ngũ nghệ sĩ và giảng viên đam mê, SnapArt được thành lập nhằm lan tỏa tình yêu hội họa đến mọi người. Tại đây, chúng tôi tin rằng mỗi người đều có một nguồn năng lượng nghệ thuật tiềm ẩn, chỉ cần một chút khơi gợi và môi trường thích hợp để tỏa sáng.',
  },
  {
    number: '2.',
    title: 'What Do We Do',
    description:
      'Chúng tôi tổ chức các lớp học, workshop và sự kiện nghệ thuật đa dạng – từ màu nước, acrylic, sơn dầu đến vẽ kỹ thuật số. Học viên không chỉ học kỹ năng, mà còn được trải nghiệm niềm vui sáng tạo, được dẫn dắt bởi những nghệ sĩ tâm huyết và tận tâm.',
  },
  {
    number: '3.',
    title: 'How Do We Help',
    description:
      'Không chỉ là nơi học vẽ, SnapArt là không gian chữa lành. Trong tiếng nhạc nhẹ, hương thơm tinh dầu và ánh sáng ấm áp, học viên được thả hồn vào từng gam màu. Chúng tôi tin rằng nghệ thuật giúp cân bằng tâm hồn, giải tỏa căng thẳng và mang lại năng lượng tích cực cho cuộc sống.',
  },
  {
    number: '4.',
    title: 'Create Success Story',
    description:
      'Từ những nét vẽ đầu tiên đến những tác phẩm tự tay hoàn thiện, mỗi học viên đều mang về cho mình một câu chuyện nhỏ. Đó có thể là sự tự tin mới, niềm vui giản dị, hoặc đơn giản là cảm giác được sống chậm lại và tận hưởng từng khoảnh khắc sáng tạo.',
  },
];

const images = [img1, img2, img3, img4];

function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 900, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div>
      <Header />
      <BannerAboutUs />
      <main className="about-page">
        {/* Hero */}
        <section className="about-hero" data-aos="fade-down">
          <div className="hero-content">
            <h1>Về Chúng Tôi</h1>
            <p>
              SnapArt không chỉ là một workshop — mà là hành trình nghệ thuật, nơi bạn tìm lại
              sự cân bằng giữa nhịp sống hiện đại. Mỗi buổi học là một khoảng lặng để lắng nghe
              bản thân và thả hồn vào sắc màu.
            </p>
          </div>
        </section>

        {/* Blog Content */}
        <section className="about-article">
          {infoItems.map((item, index) => (
            <div
              className={`article-block ${index % 2 === 0 ? 'left-image' : 'right-image'}`}
              key={index}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <div className="article-image">
                <img src={images[index]} alt={item.title} />
              </div>
              <div className="article-text">
                <span className="article-number">{item.number}</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Ending Section */}
        <section className="about-ending" data-aos="fade-up">
          <h2>Hành Trình Của Bạn Bắt Đầu Từ Đây</h2>
          <p>
            Hãy để SnapArt đồng hành cùng bạn trong hành trình khám phá nghệ thuật và chính bản thân mình.
            Chúng tôi không chỉ dạy vẽ – chúng tôi truyền cảm hứng để bạn tạo nên thế giới sắc màu của riêng mình.
          </p>
          <a href="/workshops" className="cta-button">Khám Phá Workshop</a>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
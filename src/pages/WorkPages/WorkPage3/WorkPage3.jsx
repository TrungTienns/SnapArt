// src/pages/WorkShop/WorkPage3/WorkPage3.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../../layout/Header/Header";
import Footer from "../../../layout/Footer/Footer";
import "./WorkPage3.scss";
import textureImage from "../../../assets/images/products/product_image3.jpg"; // đổi đường dẫn đúng với ảnh của bạn

const WorkPage3 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="workpage3">
      <Header />
      <section className="article-section">
        <div className="article-container" data-aos="fade-up">
          <h1 className="article-title" data-aos="zoom-in">
            Texture Art Workshop
          </h1>

          <p className="article-intro" data-aos="fade-up">
            Khám phá nghệ thuật tạo texture – nơi bạn có thể tự tay sáng tạo nên
            những bức tranh trừu tượng độc đáo với hiệu ứng bề mặt và chất liệu
            phong phú. Dù bạn là người mới bắt đầu hay đã có kinh nghiệm, buổi
            workshop này vẫn mang đến trải nghiệm đầy cảm hứng.
          </p>

          <div className="article-image" data-aos="zoom-in-up">
            <img src={textureImage} alt="Texture Art Workshop" />
            <p className="caption">Tác phẩm texture art của học viên lớp trước</p>
          </div>

          <p data-aos="fade-up">
            Trong <strong>Texture Art Workshop</strong>, học viên được hướng dẫn
            kỹ thuật pha trộn màu, tạo độ dày mỏng và sử dụng nhiều công cụ như
            bay, cọ, bọt biển, cùng các vật liệu tự nhiên để làm nổi bật chiều
            sâu của tranh.
          </p>

          <p data-aos="fade-up" data-aos-delay="100">
            Không chỉ là một hoạt động nghệ thuật, đây còn là cơ hội để bạn thư
            giãn tâm trí, kết nối cảm xúc và thể hiện bản thân qua từng lớp màu.
          </p>

          <p data-aos="fade-up" data-aos-delay="200">
            Không gian sáng tạo của workshop được thiết kế mở, thoải mái, giúp
            học viên dễ dàng tập trung và hòa mình vào quá trình sáng tác. Sau
            buổi học, bạn có thể mang về tác phẩm riêng để trưng bày tại nhà.
          </p>

          <p className="closing-text" data-aos="fade-up" data-aos-delay="300">
            🎨 Hãy đến và cùng chúng tôi tạo nên những bức tranh mang đậm dấu ấn
            cá nhân của bạn!
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default WorkPage3;
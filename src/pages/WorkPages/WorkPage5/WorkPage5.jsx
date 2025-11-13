// src/pages/WorkShop/WorkPage5/WorkPage5.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./WorkPage5.scss";
import Header from "../../../layout/Header/Header";
import Footer from "../../../layout/Footer/Footer";
import toolsImage from "../../../assets/images/products/product_image5.jpg"; // đổi hình ảnh tương ứng

const WorkPage5 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="workpage">
        <Header />
        <div className="workshop-article">
          <h1 data-aos="fade-up">Họa Cụ Cao Cấp & Lớp Học</h1>
          <img
            src={toolsImage}
            alt="Họa Cụ Cao Cấp & Lớp Học"
            data-aos="zoom-in"
            className="article-image"
          />
          <div className="article-content" data-aos="fade-up">
            <p>
              Chúng tôi cung cấp <strong>họa cụ cao cấp</strong> cho mọi đối tượng, từ người mới bắt đầu đến các họa sĩ chuyên nghiệp. Mỗi dụng cụ đều được chọn lọc kỹ lưỡng, đảm bảo mang lại trải nghiệm vẽ mượt mà và sống động.
            </p>
            <p>
              Lớp học của chúng tôi được thiết kế để phù hợp với mọi trình độ. Bạn sẽ học từ những kỹ thuật cơ bản đến những phương pháp nâng cao, giúp phát triển phong cách cá nhân và kỹ năng hội họa.
            </p>
            <p>
              Không gian lớp học rộng rãi, đầy đủ ánh sáng và tiện nghi, kết hợp với đội ngũ giảng viên nhiệt tình và giàu kinh nghiệm, tạo điều kiện tốt nhất để bạn thỏa sức sáng tạo.
            </p>
            <p>
              Hãy tham gia cùng chúng tôi để trải nghiệm <strong>hội họa từ những dụng cụ chất lượng nhất</strong> và nâng cao kỹ năng của bạn trong môi trường học tập thân thiện và đầy cảm hứng.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default WorkPage5;
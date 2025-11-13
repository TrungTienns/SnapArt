// src/pages/WorkShop/WorkPage8/WorkPage8.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./WorkPage8.scss";
import Header from "../../../layout/Header/Header";
import Footer from "../../../layout/Footer/Footer";
import advancedClassImage from "../../../assets/images/products/product_image8.jpg"; // ảnh lớp nâng cao

const WorkPage8 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="workpage">
        <Header />
        <div className="workshop-article">
          <h1 data-aos="fade-up">Lớp Học Vẽ Nâng Cao</h1>

          <div className="article-content" data-aos="fade-up">
            <p>
              Đây là lớp học dành cho những ai đã có nền tảng cơ bản và muốn nâng cao kỹ năng hội họa. Bạn sẽ được hướng dẫn các kỹ thuật phức tạp, từ phối màu, ánh sáng, bố cục đến vẽ chi tiết tinh xảo.
            </p>

            <h2>Phát Triển Kỹ Năng Chuyên Sâu</h2>
            <p>
              Học viên sẽ thực hành với các chất liệu đa dạng: sơn dầu, màu nước, acrylic… cùng với sự hướng dẫn trực tiếp từ giảng viên giàu kinh nghiệm. Mỗi buổi học là một cơ hội để cải thiện kỹ năng cá nhân và tạo ra những tác phẩm ấn tượng.
            </p>

            <img
              src={advancedClassImage}
              alt="Lớp Học Vẽ Nâng Cao"
              data-aos="zoom-in"
              className="article-image-center"
            />

            <h2>Tạo Dấu Ấn Cá Nhân</h2>
            <p>
              Lớp học chú trọng phát triển phong cách cá nhân, giúp học viên tìm thấy giọng điệu và dấu ấn riêng trong tác phẩm. Không chỉ học kỹ thuật, bạn còn được truyền cảm hứng để sáng tạo tự do.
            </p>

            <p>
              Tham gia <strong>Lớp Học Vẽ Nâng Cao</strong> để nâng tầm kỹ năng hội họa, khám phá tiềm năng sáng tạo và trải nghiệm nghệ thuật một cách chuyên nghiệp.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default WorkPage8;
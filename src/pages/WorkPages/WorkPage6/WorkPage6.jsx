// src/pages/WorkShop/WorkPage6/WorkPage6.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./WorkPage6.scss";
import Header from "../../../layout/Header/Header";
import Footer from "../../../layout/Footer/Footer";
import kidsWorkshopImage from "../../../assets/images/products/product_image6.jpg"; // đổi hình ảnh

const WorkPage6 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="workpage">
        <Header />
        <div className="workshop-article">
          <h1 data-aos="fade-up">Workshop Sáng Tạo Cùng Trẻ</h1>
          <div className="article-content" data-aos="fade-up">
            <p>
              Workshop này được thiết kế đặc biệt cho các bé, giúp các em phát huy sự sáng tạo và khám phá thế giới qua màu sắc, hình khối và chất liệu. 
            </p>

            <h2>Trải Nghiệm Thú Vị</h2>
            <p>
              Tại lớp học, các bé được hướng dẫn cách kết hợp màu sắc, tạo hình và kể chuyện qua từng bức tranh. Không chỉ vui chơi, các em còn học được kỹ năng tư duy sáng tạo và biểu đạt cảm xúc.
            </p>

            <img
              src={kidsWorkshopImage}
              alt="Workshop Sáng Tạo Cùng Trẻ"
              data-aos="zoom-in"
              className="article-image-center"
            />

            <h2>Không Gian Thân Thiện</h2>
            <p>
              Không gian lớp học an toàn, thân thiện, đầy màu sắc và âm nhạc nhẹ nhàng, tạo cảm giác thoải mái để các bé tự do sáng tạo. Đội ngũ giảng viên nhiệt tình sẽ đồng hành cùng các em trong suốt buổi học.
            </p>

            <p>
              Hãy đưa bé đến trải nghiệm <strong>Workshop Sáng Tạo Cùng Trẻ</strong> để khám phá niềm vui, phát triển khả năng sáng tạo và tự tin thể hiện bản thân.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default WorkPage6;
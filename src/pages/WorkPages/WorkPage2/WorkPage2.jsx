// src/pages/WorkShop/WorkPage2/WorkPage2.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../../layout/Header/Header";
import Footer from "../../../layout/Footer/Footer";
import productImage from "../../../assets/images/products/product_image2.jpg"; // đổi ảnh phù hợp
import "./WorkPage2.scss";

const WorkPage2 = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="workpage2">
      <Header />

      <section className="article-section">
        <div className="article-container" data-aos="fade-up">
          <h1 className="article-title">WORKSHOP DOANH NGHIỆP</h1>

          <p className="article-intro">
            Workshop Doanh Nghiệp được thiết kế dành riêng cho các công ty, tổ
            chức và tập thể muốn xây dựng môi trường làm việc sáng tạo, kết nối
            và đầy cảm hứng. Thông qua các hoạt động thủ công – nghệ thuật, 
            khóa học giúp nhân viên thư giãn, tăng khả năng giao tiếp và tinh
            thần hợp tác nhóm trong bầu không khí thoải mái.
          </p>

          <div className="article-image" data-aos="zoom-in">
            <img src={productImage} alt="Workshop Doanh Nghiệp" />
            <p className="caption">
              Hình ảnh minh họa: Buổi workshop kết nối đội nhóm doanh nghiệp
            </p>
          </div>

          <p>
            Chương trình Workshop Doanh Nghiệp không chỉ tập trung vào việc học
            làm sản phẩm nghệ thuật, mà còn chú trọng vào phát triển kỹ năng
            mềm như làm việc nhóm, tư duy sáng tạo và giải quyết vấn đề. Mỗi
            hoạt động được thiết kế để tạo nên sự tương tác giữa các thành viên,
            giúp họ hiểu nhau hơn và cùng hướng đến mục tiêu chung.
          </p>

          <p>
            Tùy theo nhu cầu của từng doanh nghiệp, chương trình có thể được
            tùy chỉnh về thời lượng, nội dung, loại hình sản phẩm thủ công hoặc
            chủ đề sáng tạo. Các buổi workshop có thể được tổ chức tại văn phòng,
            không gian nghệ thuật hoặc địa điểm riêng biệt phù hợp với văn hóa
            doanh nghiệp.
          </p>

          <p>
            Workshop giúp nhân viên tái tạo năng lượng, khơi dậy cảm hứng và
            giảm bớt căng thẳng sau giờ làm việc. Đây cũng là dịp tuyệt vời để
            các phòng ban tương tác ngoài khuôn khổ công việc, tạo sự gắn kết
            bền chặt hơn giữa các thành viên trong công ty.
          </p>

          <p>
            Nhiều doanh nghiệp sau khi tham gia đã ghi nhận sự thay đổi tích cực
            trong tinh thần làm việc, khả năng sáng tạo và văn hóa nội bộ. Workshop
            Doanh Nghiệp trở thành một trong những hoạt động được yêu thích nhất
            trong chương trình đào tạo nội bộ hàng năm.
          </p>

          <p className="closing-text">
            <strong>
              Hãy để nghệ thuật trở thành cầu nối giúp đội ngũ của bạn gắn kết
              hơn, sáng tạo hơn và làm việc hạnh phúc hơn mỗi ngày!
            </strong>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkPage2;
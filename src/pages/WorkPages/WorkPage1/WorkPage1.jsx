// src/pages/WorkShop/WorkPage1/WorkPage1.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../../layout/Header/Header";
import Footer from "../../../layout/Footer/Footer";
import productImage from "../../../assets/images/products/product_image1.jpg";
import "./WorkPage1.scss";

const WorkPage1 = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="workpage1">
      <Header />

      <section className="article-section">
        <div className="article-container" data-aos="fade-up">
          <h1 className="article-title">
            KHÓA HỌC WORKSHOP: SẢN PHẨM HỌA CỤ SỈ VÀ LẺ
          </h1>

          <p className="article-intro">
            Nghệ thuật không chỉ là sáng tạo — mà còn là hành trình tìm hiểu,
            cảm nhận và kết nối. Workshop “Sản phẩm họa cụ sỉ và lẻ” được tổ
            chức nhằm mang đến cho học viên cơ hội khám phá thế giới của chất
            liệu, màu sắc, và quy trình sản xuất các sản phẩm mỹ thuật thủ công
            độc đáo. Đây là khóa học dành cho những ai yêu thích nghệ thuật,
            muốn tự tay tạo ra những sản phẩm mang dấu ấn cá nhân và thấu hiểu
            giá trị thật của từng họa cụ.
          </p>

          <div className="article-image" data-aos="zoom-in">
            <img src={productImage} alt="Workshop Họa cụ" />
            <p className="caption">Hình ảnh minh họa: Sản phẩm họa cụ do học viên thực hiện</p>
          </div>

          <p>
            Trong suốt khóa học, học viên sẽ được hướng dẫn chi tiết về quy
            trình chọn nguyên liệu, cách phối màu, và các kỹ thuật chế tạo
            họa cụ thủ công. Dưới sự hướng dẫn tận tình của các giảng viên có
            kinh nghiệm, mỗi buổi học không chỉ là thời gian thực hành mà còn
            là cơ hội để khám phá bản thân thông qua nghệ thuật.
          </p>

          <p>
            Một điểm đặc biệt của khóa học là tính ứng dụng cao. Sau khi hoàn
            thành chương trình, học viên không chỉ có thể tự làm ra sản phẩm
            cho riêng mình, mà còn được trang bị kiến thức để hợp tác hoặc mở
            rộng mô hình kinh doanh họa cụ sỉ và lẻ. Mỗi sản phẩm được tạo ra
            đều mang tính độc bản, phản ánh phong cách và cảm xúc của chính
            người sáng tạo.
          </p>

          <p>
            Ngoài ra, chương trình Workshop còn mở rộng với các buổi chia sẻ
            chuyên sâu về xu hướng nghệ thuật, quy trình thương mại hóa sản
            phẩm thủ công, và cơ hội giao lưu với cộng đồng sáng tạo. Đây là
            nơi những ý tưởng nhỏ bé có thể được nuôi dưỡng và phát triển
            thành những dự án lớn đầy cảm hứng.
          </p>

          <p>
            Workshop “Sản phẩm họa cụ sỉ và lẻ” không chỉ là một khóa học,
            mà còn là một hành trình nghệ thuật nơi bạn được khơi dậy đam mê,
            rèn luyện kỹ năng, và tìm thấy tiếng nói riêng của mình trong thế
            giới sáng tạo không giới hạn.
          </p>

          <p className="closing-text">
            <strong>
              Hãy tham gia cùng chúng tôi và tạo nên những dấu ấn nghệ thuật
              mang đậm phong cách cá nhân của bạn!
            </strong>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkPage1;
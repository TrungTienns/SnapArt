import React from "react";
import Header from "../../../layout/Header/Header";
import Footer from "../../../layout/Footer/Footer";
import BannerWorkshop from "../../../layout/BannerWorkShop/BannerWorkShop";
import "./Workshop1.scss";

// hình demo
import imgResin from "../../../assets/images/customer.jpg";

const Workshop1 = () => {
  return (
    <>
      <Header />
      <BannerWorkshop />

      <section className="workshop-intro">
        <div className="intro-card">
          <h2 className="intro-title">Vẽ Tranh Cát</h2>
          <img src={imgResin} alt="Vẽ Tranh Cát" className="intro-image" />
          <p className="intro-text">
            Khóa học Vẽ Tranh Cát được thiết kế dành cho cả những người mới bắt đầu lẫn những ai đã có nền tảng cơ bản trong lĩnh vực nghệ thuật sáng tạo. Trong khóa học này, bạn sẽ được làm quen với các loại cát màu, dụng cụ vẽ tranh cát, cũng như cách bố cục và sắp xếp màu sắc để tạo nên những bức tranh độc đáo, giàu tính thẩm mỹ. 
          </p>
          <p className="intro-text">
            Giảng viên sẽ hướng dẫn chi tiết từng bước, từ kiến thức cơ bản về chất liệu cát, cách xử lý bề mặt, các nguyên tắc phối màu và tạo hình, cho đến những kỹ thuật nâng cao nhằm tạo chiều sâu, hiệu ứng chuyển màu và điểm nhấn tinh tế cho tác phẩm. Học viên sẽ được thực hành trực tiếp trên sản phẩm cá nhân, nhận góp ý từ giảng viên và từng bước hoàn thiện kỹ năng của mình.

          </p>
          <p className="intro-text">
            Giảng viên sẽ hướng dẫn chi tiết từng bước, từ kiến thức cơ bản về chất liệu cát, cách xử lý bề mặt, các nguyên tắc phối màu và tạo hình, cho đến những kỹ thuật nâng cao nhằm tạo chiều sâu, hiệu ứng chuyển màu và điểm nhấn tinh tế cho tác phẩm. Học viên sẽ được thực hành trực tiếp trên sản phẩm cá nhân, nhận góp ý từ giảng viên và từng bước hoàn thiện kỹ năng của mình.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Workshop1;
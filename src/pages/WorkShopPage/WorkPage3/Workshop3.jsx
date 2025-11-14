import React from "react";
import Header from "../../../layout/Header/Header";
import Footer from "../../../layout/Footer/Footer";
import BannerWorkshop from "../../../layout/BannerWorkShop/BannerWorkShop";
import "./Workshop3.scss";

// hình demo
import imgResin from "../../../assets/images/aboutus_image1.jpg";

const Workshop3 = () => {
  return (
    <>
      <Header />
      <BannerWorkshop />

      <section className="workshop-intro">
        <div className="intro-card">
          <h2 className="intro-title">Khóa học màu Acrylic</h2>
          <img src={imgResin} alt="Khóa học màu Acrylic" className="intro-image" />
          <p className="intro-text">
            Khóa học màu Acrylic được thiết kế dành cho cả những người mới bắt đầu lẫn những ai đã có kinh nghiệm cơ bản trong việc tạo sản phẩm từ nhựa epoxy. 
            Trong khóa học này, bạn sẽ được học cách lựa chọn vật liệu, pha trộn nhựa và màu sắc, cũng như kỹ thuật đổ khuôn để tạo ra các sản phẩm như khay, móc khóa, trang sức hay đồ trang trí độc đáo. 
          </p>
          <p className="intro-text">
            Giảng viên sẽ hướng dẫn chi tiết từng bước, từ lý thuyết cơ bản về nhựa epoxy, các nguyên tắc an toàn khi làm việc với vật liệu, đến các kỹ thuật nâng cao để tạo hiệu ứng màu sắc, lớp phủ bóng và các chi tiết tinh xảo. 
            Bạn sẽ được thực hành trực tiếp trên dự án cá nhân, nhận feedback từ giảng viên và cải thiện kỹ năng từng bước.
          </p>
          <p className="intro-text">
            Sau khóa học, học viên sẽ tự tin tạo ra những sản phẩm hoàn chỉnh, hiểu rõ về kỹ thuật pha chế màu và cách kết hợp các vật liệu khác nhau để đạt hiệu quả thẩm mỹ tối ưu. 
            Đồng thời, khóa học cũng cung cấp các mẹo và hướng dẫn bảo quản sản phẩm, giúp bạn có thể tiếp tục sáng tạo tại nhà hoặc phát triển ý tưởng kinh doanh từ các sản phẩm Acrylic của mình.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Workshop3;
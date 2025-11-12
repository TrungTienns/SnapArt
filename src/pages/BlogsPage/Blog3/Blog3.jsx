import React from "react";
import Header from "../../../layout/Header/Header.jsx";
import Banner from "../../../layout/Banner/Banner.jsx";
import Footer from "../../../layout/Footer/Footer.jsx";
import blogImage from "../../../assets/images/blog_image3.jpg"; 

import "./Blog3.scss"; // tạo file scss riêng

function Blog3() {
  return (
    <div className="blog3-page">
      {/* Header */}
      <Header />
      {/* Nội dung blog */}
      <div className="blog3-container">
        <h1 className="blog-title">Vẽ Cùng Những Người Bạn Mới</h1>

        <p className="blog-intro">
          Vẽ cùng bạn bè không chỉ giúp bạn giải tỏa căng thẳng mà còn tạo ra những tác phẩm thú vị và đầy sáng tạo. Qua hoạt động nhóm, mỗi người có thể học hỏi kỹ năng, phong cách và ý tưởng của nhau.
        </p>

        <h2>1. Lợi ích khi vẽ cùng bạn bè</h2>
        <ul>
          <li>Phát triển khả năng sáng tạo và tư duy nghệ thuật.</li>
          <li>Tăng tính kết nối và giao tiếp xã hội.</li>
          <li>Khám phá các kỹ thuật và màu sắc mới từ bạn bè.</li>
        </ul>

        <h2>2. Cách tổ chức buổi vẽ nhóm</h2>
        <ul>
          <li>Chọn không gian thoáng, đủ ánh sáng để mọi người thoải mái vẽ.</li>
          <li>Mỗi người mang dụng cụ riêng như cọ, màu, giấy hoặc canvas.</li>
          <li>Thảo luận ý tưởng trước khi bắt đầu để có chủ đề chung.</li>
        </ul>

        <h2>3. Bảo quản tác phẩm sau khi vẽ</h2>
        <ul>
          <li>Để tranh khô hoàn toàn trước khi cất giữ.</li>
          <li>Dùng khung hoặc túi nhựa bảo vệ tranh khỏi bụi và ánh sáng trực tiếp.</li>
          <li>Đặt tác phẩm nơi thoáng mát và tránh ẩm ướt để giữ màu lâu bền.</li>
        </ul>

        <div className="blog-image">
          <img src={blogImage} alt="Minh họa vẽ nhóm" />
        </div>
      </div>
    </div>
  );
}

export default Blog3;
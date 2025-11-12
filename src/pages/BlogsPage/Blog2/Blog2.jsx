import React from "react";
import Header from "../../../layout/Header/Header.jsx";
import Banner from "../../../layout/Banner/Banner.jsx";
import Footer from "../../../layout/Footer/Footer.jsx";
import blogImage from "../../../assets/images/blog_image2.jpg"; // đặt ảnh ở src/assets

import "./Blog2.scss"; // tạo file scss riêng

function Blog2() {
  return (
    <div className="blog2-page">
      {/* Header */}
      <Header />
      {/* Nội dung blog */}
      <div className="blog2-container">
        <h1 className="blog-title">Màu Acrylic: Nó là gì, cách sử dụng và bảo quản</h1>

        <p className="blog-intro">
          Màu acrylic là một loại sơn nước tổng hợp, nhanh khô, bền màu và linh hoạt, được sử dụng rộng rãi trong hội họa hiện đại. Với đặc tính dễ pha trộn, không độc hại và có thể sử dụng trên nhiều bề mặt, acrylic trở thành lựa chọn phổ biến cho cả người mới bắt đầu và các họa sĩ chuyên nghiệp.
        </p>

        <h2>1. Màu acrylic là gì?</h2>
        <ul>
          <li>Màu acrylic là sơn tổng hợp gốc nước, nhanh khô, có thể pha loãng với nước để tạo hiệu ứng trong suốt.</li>
          <li>Có thể sử dụng trên giấy, canvas, gỗ, vải và nhiều chất liệu khác.</li>
          <li>Bền màu, không bị phai theo thời gian nếu được bảo quản đúng cách.</li>
        </ul>

        <h2>2. Cách sử dụng màu acrylic</h2>
        <ul>
          <li>Sử dụng cọ, bút vẽ hoặc palette knife để tạo các hiệu ứng khác nhau.</li>
          <li>Để màu khô nhanh, có thể pha loãng bằng nước hoặc dùng medium để điều chỉnh độ dày.</li>
          <li>Trộn các màu với nhau trên palette để tạo sắc độ mong muốn.</li>
        </ul>

        <h2>3. Bảo quản màu acrylic</h2>
        <ul>
          <li>Đậy kín nắp sau khi sử dụng để tránh màu bị khô.</li>
          <li>Lưu trữ ở nơi thoáng mát, tránh ánh nắng trực tiếp.</li>
          <li>Rửa cọ ngay sau khi sử dụng để cọ không bị hỏng.</li>
        </ul>

        <div className="blog-image">
          <img src={blogImage} alt="Minh họa màu acrylic" />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Blog2;
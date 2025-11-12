import React from "react";
import Header from "../../../layout/Header/Header.jsx";
import Banner from "../../../layout/Banner/Banner.jsx";
import blogImage from "../../../assets/images/blog_image1.jpg"; // đặt ảnh ở src/assets

import "./Blog1.scss"; // tạo file scss kèm theo

function Blog1() {
  return (
    <div className="blog1-page">
      {/* Header */}
      <Header />

      {/* Nội dung blog */}
      <div className="blog1-container">
        <h1 className="blog-title">Cách Sử Dụng Cọ Vẽ An Toàn và Giữ Gìn Chúng</h1>

        <p className="blog-intro">
          Cọ vẽ là công cụ quan trọng để hiện thực hóa ý tưởng sáng tạo, từ tranh sơn dầu, acrylic đến màu nước. Tuy nhiên, việc sử dụng và bảo quản cọ không đúng cách có thể làm giảm tuổi thọ của cọ và ảnh hưởng đến chất lượng tác phẩm. Dưới đây là một số hướng dẫn giúp bạn sử dụng cọ hiệu quả và an toàn.
        </p>

        <h2>1. Chọn cọ phù hợp với loại sơn</h2>
        <ul>
          <li><strong>Cọ lông tự nhiên:</strong> Phù hợp với sơn dầu và acrylic, mềm mại, giữ sơn tốt.</li>
          <li><strong>Cọ tổng hợp:</strong> Thích hợp với màu nước và acrylic, dễ vệ sinh và bền hơn.</li>
          <li>Chọn <strong>kích thước và hình dạng cọ</strong> dựa trên kỹ thuật bạn muốn thực hiện: cọ tròn, cọ dẹt, cọ quét rộng…</li>
        </ul>

        <h2>2. Sử dụng cọ đúng cách</h2>
        <ul>
          <li>Không nhúng cọ quá sâu vào sơn, tránh sơn dính vào phần kim loại và tay cầm.</li>
          <li>Khi vẽ, giữ cọ nhẹ nhàng, không ép mạnh để lông cọ không bị biến dạng.</li>
          <li>Sau khi vẽ, rửa cọ ngay để tránh sơn khô cứng làm hỏng lông cọ.</li>
        </ul>

        <h2>3. Bảo quản cọ</h2>
        <ul>
          <li>Đặt cọ theo chiều thẳng đứng với lông hướng lên hoặc treo ngang để lông cọ không bị cong.</li>
          <li>Tránh ánh nắng trực tiếp và nơi ẩm ướt.</li>
          <li>Sử dụng dung dịch vệ sinh cọ chuyên dụng để làm sạch sâu khi cần.</li>
        </ul>

        <div className="blog-image">
          <img src={blogImage} alt="Minh họa cọ vẽ" />
        </div>
      </div>
    </div>
  );
}

export default Blog1;
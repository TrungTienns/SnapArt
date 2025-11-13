import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.scss';

import image1 from '../../assets/images/blog_image1.jpg';
import image2 from '../../assets/images/blog_image2.jpg';
import image3 from '../../assets/images/blog_image3.jpg';
import image4 from '../../assets/images/blog_image4.jpg';

const blogPosts = [
  { id: 1, title: "Cách Sử Dụng Cọ Vẽ An Toàn và Giữ Gìn Chúng", description: "Học cách dùng bảo vệ cọ đúng cách để giữ cho công cụ của bạn luôn bền đẹp và hiệu quả.", image: image1, link: "/blog1" },
  { id: 2, title: "Màu Acrylic: Nó là gì, cách sử dụng và bảo quản", description: "Màu acrylic là một loại sơn nước tổng hợp, nhanh khô, bền màu và linh hoạt, được sử dụng rộng rãi trong hội họa hiện đại.", image: image2, link: "/blog2" },
  { id: 3, title: "Vẽ Cùng Những Người Bạn Mới,Tại Sao Không?", description: "Vẽ cùng bạn bè không chỉ giúp bạn giải tỏa căng thẳng mà còn tạo ra những tác phẩm thú vị và đầy sáng tạo.", image: image3, link: "/blog3" },
  { id: 4, title: "Vẽ Để Chữa Lành – Hành Trình Từ Bóng Tối Đến Ánh Sáng", description: "Hành trình chữa lành không diễn ra trong một ngày, nhưng từng nét vẽ, từng màu sắc đã dần giúp tôi lấy lại năng lượng, sự tự tin và hy vọng.", image: image4, link: "/blog4" }
];

function Blog() {
  const navigate = useNavigate();

  const handleReadMore = (link) => {
    navigate(link);
  };

  return (
    <section className="blog-workshop">
      <h2 className="blog-heading">Cùng ngồi lại để nói chuyện nhé!</h2>
      <div className="blog-container">
        {blogPosts.map(post => (
          <div key={post.id} className="blog-card">
            <div className="card-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="card-content">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <button className="read-more" onClick={() => handleReadMore(post.link)}>Đọc tiếp</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
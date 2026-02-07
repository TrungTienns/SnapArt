import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Blog.scss';

import image1 from '../../assets/images/blog_image1.jpg';
import image2 from '../../assets/images/blog_image2.jpg';
import image3 from '../../assets/images/blog_image3.jpg';
import image4 from '../../assets/images/blog_image4.jpg';

function Blog() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const blogPosts = [
    {
      id: 1,
      title: t("blog.post1.title"),
      description: t("blog.post1.desc"),
      image: image1,
      link: "/blog1",
    },
    {
      id: 2,
      title: t("blog.post2.title"),
      description: t("blog.post2.desc"),
      image: image2,
      link: "/blog2",
    },
    {
      id: 3,
      title: t("blog.post3.title"),
      description: t("blog.post3.desc"),
      image: image3,
      link: "/blog3",
    }
    // {
    //   id: 4,
    //   title: t("blog.post4.title"),
    //   description: t("blog.post4.desc"),
    //   image: image4,
    //   link: "/blog4",
    // },
  ];

  const handleReadMore = (link) => {
    navigate(link);
  };

  return (
    <section className="blog-workshop">
      <h2 className="blog-heading">{t("blog.heading")}</h2>

      <div className="blog-container">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <div className="card-image">
              <img src={post.image} alt={post.title} />
            </div>

            <div className="card-content">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <button
                className="read-more"
                onClick={() => handleReadMore(post.link)}
              >
                {t("blog.readMore")}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
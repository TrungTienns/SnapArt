import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Blog.scss';
import blogService from '../../services/blogService';

function Blog() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Helper to strip HTML tags for preview
  const stripHtml = (html) => {
    if (!html) return '';
    return html.replace(/<[^>]+>/g, '');
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await blogService.getAll();
        setBlogPosts(data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const handleReadMore = (link) => {
    navigate(link);
  };

  return (
    <section className="blog-workshop">
      <h2 className="blog-heading">{t("blog.heading") || "Latest Blogs"}</h2>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '20px' }}>Loading blogs...</div>
      ) : (
        <div className="blog-container">
          {blogPosts.map((post) => (
            <div key={post.blog_id} className="blog-card">
              <div className="card-image">
                <img 
                  src={post.image_url || 'https://source.unsplash.com/random/400x300/?art,blog'} 
                  alt={post.title} 
                />
              </div>

              <div className="card-content">
                <h3>{i18n.language === 'en' && post.title_en ? post.title_en : post.title}</h3>
                <p>
                  {i18n.language === 'en' && post.content_en 
                    ? stripHtml(post.content_en).substring(0, 100) + '...' 
                    : (post.content ? stripHtml(post.content).substring(0, 100) + '...' : '')}
                </p>
                <button
                  className="read-more"
                  onClick={() => handleReadMore(`/blog/${post.slug}`)}
                >
                  {t("blog.readMore") || "Read More"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Blog;
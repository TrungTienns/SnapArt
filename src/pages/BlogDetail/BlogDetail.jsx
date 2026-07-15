import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import blogService from '../../services/blogService';
import './BlogDetail.scss';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const [blog, setBlog] = useState(null);
  const [recommendedBlogs, setRecommendedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        // Fetch current blog and all blogs simultaneously
        const [currentBlog, allBlogs] = await Promise.all([
          blogService.getBySlug(slug),
          blogService.getAll()
        ]);
        
        setBlog(currentBlog);
        
        // Filter out the current blog and keep max 3 for recommendations
        const others = allBlogs.filter(b => b.slug !== slug).slice(0, 3);
        setRecommendedBlogs(others);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return <div className="loading-container">Loading amazing content...</div>;
  }

  if (error || !blog) {
    return <div className="error-container">{error || 'Blog not found!'}</div>;
  }

  const title = i18n.language === 'en' && blog.title_en ? blog.title_en : blog.title;
  const content = i18n.language === 'en' && blog.content_en ? blog.content_en : blog.content;

  return (
    <div className="blog-detail-layout">
      {/* Cột trái: Bài đọc chính */}
      <div className="blog-main-content">
        {blog.image_url ? (
          <img src={blog.image_url} alt={title} className="blog-hero-image" />
        ) : (
          <img src={`https://source.unsplash.com/random/900x400/?art&sig=${blog.blog_id}`} alt={title} className="blog-hero-image" />
        )}

        <div className="blog-header">
          <h1>{title}</h1>
          <div className="blog-meta">
            <span>By Admin</span>
            <span>|</span>
            <span>{new Date(blog.created_at).toLocaleDateString(i18n.language === 'en' ? 'en-US' : 'vi-VN')}</span>
          </div>
        </div>

        <div 
          className="blog-body" 
          dangerouslySetInnerHTML={{ __html: content }} 
        />
      </div>

      {/* Cột phải: Có thể bạn sẽ thích */}
      <div className="blog-sidebar">
        <h2>{i18n.language === 'en' ? 'You might also like' : 'Có thể bạn sẽ thích'}</h2>
        
        <div className="recommended-list">
          {recommendedBlogs.map(item => {
            const itemTitle = i18n.language === 'en' && item.title_en ? item.title_en : item.title;
            const itemContent = i18n.language === 'en' && item.content_en ? item.content_en : item.content;
            
            return (
              <div 
                key={item.blog_id} 
                className="recommended-card"
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate(`/blog/${item.slug}`);
                }}
              >
                <img 
                  src={item.image_url || `https://source.unsplash.com/random/200x150/?art&sig=${item.blog_id}`} 
                  alt={itemTitle} 
                />
                <div className="recommended-info">
                  <h4>{itemTitle}</h4>
                  <p>{itemContent ? itemContent.substring(0, 50) + '...' : ''}</p>
                  <span className="date">{new Date(item.created_at).toLocaleDateString(i18n.language === 'en' ? 'en-US' : 'vi-VN')}</span>
                </div>
              </div>
            );
          })}
          
          {recommendedBlogs.length === 0 && (
            <p className="no-blogs">{i18n.language === 'en' ? 'No other blogs found.' : 'Không có bài viết nào khác.'}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;

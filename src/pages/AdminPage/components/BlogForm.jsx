import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import blogService from '../../../services/blogService';

const BlogForm = ({ editingBlogId, initialBlogData, setMessage, onClearEdit, refreshBlogs }) => {
  const [blogData, setBlogData] = useState({ title: '', title_en: '', content: '', content_en: '', image_url: '' });
  const [blogImage, setBlogImage] = useState(null);
  const [blogImagePreview, setBlogImagePreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialBlogData) {
      setBlogData(initialBlogData);
    } else {
      setBlogData({ title: '', title_en: '', content: '', content_en: '', image_url: '' });
    }
    setBlogImage(null);
    setBlogImagePreview(null);
  }, [initialBlogData, editingBlogId]);

  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });
    
    try {
      const formData = new FormData();
      formData.append('title', blogData.title);
      formData.append('title_en', blogData.title_en);
      formData.append('content', blogData.content);
      formData.append('content_en', blogData.content_en);
      if (blogImage) formData.append('image', blogImage);

      if (editingBlogId) {
        await blogService.update(editingBlogId, formData);
        setMessage({ type: 'success', text: 'Blog updated successfully!' });
      } else {
        await blogService.create(formData);
        setMessage({ type: 'success', text: 'Blog created successfully!' });
      }
      
      setBlogData({ title: '', title_en: '', content: '', content_en: '', image_url: '' });
      setBlogImage(null);
      setBlogImagePreview(null);
      onClearEdit();
      if (refreshBlogs) refreshBlogs();
    } catch (error) {
      setMessage({ type: 'error', text: error.response?.data?.message || 'Failed to process blog' });
    } finally {
      setLoading(false);
    }
  };

  const handleBlogImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBlogImage(file);
      setBlogImagePreview(URL.createObjectURL(file));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setBlogImage(file);
      setBlogImagePreview(URL.createObjectURL(file));
    }
  };

  const removeBlogImage = () => {
    setBlogImage(null);
    setBlogImagePreview(null);
    if (editingBlogId) {
      setBlogData({ ...blogData, image_url: '' });
    }
  };

  return (
    <form onSubmit={handleBlogSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label>Title (VI) *</label>
          <input type="text" value={blogData.title} onChange={e => setBlogData({...blogData, title: e.target.value})} required />
        </div>
        <div className="form-group">
          <label>Title (EN)</label>
          <input type="text" value={blogData.title_en} onChange={e => setBlogData({...blogData, title_en: e.target.value})} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group quill-container">
          <label>Content (VI) *</label>
          <ReactQuill 
            theme="snow" 
            value={blogData.content} 
            onChange={content => setBlogData({...blogData, content})} 
            placeholder="Viết nội dung bài blog tiếng Việt ở đây..."
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group quill-container">
          <label>Content (EN)</label>
          <ReactQuill 
            theme="snow" 
            value={blogData.content_en} 
            onChange={content => setBlogData({...blogData, content_en: content})} 
            placeholder="Write English blog content here..."
          />
        </div>
      </div>
      <div className="form-group image-uploader-group">
        <label>Blog Image {editingBlogId && '(Leave blank to keep current image)'}</label>
        <div 
          className={`image-drop-zone ${isDragging ? 'dragging' : ''}`}
          onDrop={handleDrop}
          onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
        >
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleBlogImageChange} 
            id="blog-image-input" 
            style={{display: 'none'}} 
          />
          {(blogImagePreview || blogData.image_url) ? (
            <div className="single-image-preview">
              <img src={blogImagePreview || blogData.image_url} alt="Blog Preview" />
              <button type="button" className="btn-remove-img" onClick={removeBlogImage}>
                <FontAwesomeIcon icon={faTimes} /> Xóa ảnh
              </button>
            </div>
          ) : (
            <label htmlFor="blog-image-input" className="drop-zone-content">
              <FontAwesomeIcon icon={faCloudUploadAlt} className="upload-icon" />
              <p className="drop-zone-title">Chọn ảnh bài viết</p>
              <p className="drop-zone-sub">Kéo & thả hoặc <span>bấm để chọn</span> từ máy tính</p>
              <p className="drop-zone-hint">Hỗ trợ JPG, PNG, WEBP</p>
            </label>
          )}
        </div>
      </div>
      <button type="submit" className="submit-btn" disabled={loading}>
        {loading ? 'Processing...' : (editingBlogId ? 'Update Blog' : 'Create Blog')}
      </button>
    </form>
  );
};

export default BlogForm;

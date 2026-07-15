import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import blogService from '../../../services/blogService';

const BlogList = ({ handleEditBlogClick, handleAddNew, setMessage, fetchKey }) => {
  const [blogsList, setBlogsList] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchKey]); // Re-fetch when fetchKey changes

  const fetchBlogs = async () => {
    try {
      const data = await blogService.getAll();
      setBlogsList(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleDeleteBlog = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    try {
      await blogService.delete(id);
      setMessage({ type: 'success', text: 'Blog deleted successfully!' });
      fetchBlogs();
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to delete blog' });
    }
  };

  return (
    <div className="manage-list-container">
      <div className="list-header">
        <h2 className="list-title">Tất cả bài viết</h2>
        <div className="list-actions">
          <div className="search-bar">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input type="text" placeholder="Tìm kiếm bài viết..." />
          </div>
          <button className="btn-add-new" onClick={handleAddNew}>
            <FontAwesomeIcon icon={faPlus} /> Thêm Bài Viết Mới
          </button>
        </div>
      </div>

      <div className="manage-list">
        <table>
          <thead>
            <tr>
              <th>ẢNH</th>
              <th>TÊN BÀI VIẾT</th>
              <th>NGÀY TẠO</th>
              <th>HÀNH ĐỘNG</th>
            </tr>
          </thead>
        <tbody>
          {blogsList.map(blog => (
            <tr key={blog.blog_id}>
              <td>
                <img src={blog.image_url || `https://source.unsplash.com/random/100x100/?art&sig=${blog.blog_id}`} alt="blog" />
              </td>
              <td>{blog.title}</td>
              <td>{new Date(blog.created_at).toLocaleDateString()}</td>
              <td>
                <div className="action-buttons">
                  <button className="action-btn edit" onClick={() => handleEditBlogClick(blog)} title="Chỉnh sửa">
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                  <button className="action-btn delete" onClick={() => handleDeleteBlog(blog.blog_id)} title="Xóa">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
          {blogsList.length === 0 && (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center', padding: '20px' }}>No blogs found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default BlogList;

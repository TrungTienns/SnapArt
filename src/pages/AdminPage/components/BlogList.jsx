import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
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
    const result = await Swal.fire({
      title: 'Bạn có chắc chắn muốn xóa?',
      text: 'Bài viết sẽ bị xóa vĩnh viễn!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#9ca3af',
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy'
    });

    if (result.isConfirmed) {
      try {
        await blogService.delete(id);
        await Swal.fire({
          title: 'Đã xóa!',
          text: 'Bài viết đã được xóa.',
          icon: 'success',
          confirmButtonColor: '#4f46e5'
        });
        fetchBlogs();
      } catch (error) {
        Swal.fire({
          title: 'Lỗi!',
          text: 'Không thể xóa bài viết.',
          icon: 'error',
          confirmButtonColor: '#4f46e5'
        });
      }
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

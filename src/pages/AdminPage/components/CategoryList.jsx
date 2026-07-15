import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import categoryService from '../../../services/categoryService';

const CategoryList = ({ handleEditCategoryClick, handleAddNew, setMessage, fetchKey }) => {
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, [fetchKey]);

  const fetchCategories = async () => {
    try {
      const data = await categoryService.getAll();
      setCategoriesList(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleDeleteCategory = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?")) return;
    try {
      await categoryService.delete(id);
      setMessage({ type: 'success', text: 'Category deleted successfully!' });
      fetchCategories();
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to delete category' });
    }
  };

  const renderCategoryRow = (cat, level = 0) => {
    const rows = [];
    rows.push(
      <tr key={cat.category_id}>
        <td style={{ paddingLeft: `${level * 20 + 16}px` }}>
          {level > 0 && <span style={{ color: '#9ca3af', marginRight: '8px' }}>↳</span>}
          {cat.name}
        </td>
        <td>{cat.name_en || '-'}</td>
        <td>{cat.slug}</td>
        <td>
          <div className="action-buttons">
            <button className="action-btn edit" onClick={() => handleEditCategoryClick(cat)} title="Chỉnh sửa">
              <FontAwesomeIcon icon={faPen} />
            </button>
            <button className="action-btn delete" onClick={() => handleDeleteCategory(cat.category_id)} title="Xóa">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </td>
      </tr>
    );
    if (cat.subcategories && cat.subcategories.length > 0) {
      cat.subcategories.forEach(sub => {
        rows.push(...renderCategoryRow(sub, level + 1));
      });
    }
    return rows;
  };

  return (
    <div className="manage-list-container">
      <div className="list-header">
        <h2 className="list-title">Tất cả danh mục</h2>
        <div className="list-actions">
          <div className="search-bar">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input type="text" placeholder="Tìm kiếm danh mục..." />
          </div>
          <button className="btn-add-new" onClick={handleAddNew}>
            <FontAwesomeIcon icon={faPlus} /> Thêm Danh Mục
          </button>
        </div>
      </div>

      <div className="manage-list">
        <table>
          <thead>
            <tr>
              <th>TÊN DANH MỤC</th>
              <th>TÊN (EN)</th>
              <th>ĐƯỜNG DẪN (SLUG)</th>
              <th>HÀNH ĐỘNG</th>
            </tr>
          </thead>
          <tbody>
            {categoriesList.map(cat => renderCategoryRow(cat))}
            {categoriesList.length === 0 && (
              <tr>
                <td colSpan="4" style={{ textAlign: 'center', padding: '20px' }}>No categories found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryList;

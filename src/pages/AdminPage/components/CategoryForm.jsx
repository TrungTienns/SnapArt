import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import categoryService from '../../../services/categoryService';

const CategoryForm = ({ editingCategoryId, initialCategoryData, setMessage, onClearEdit, refreshCategories, onSuccess }) => {
  const [categoryData, setCategoryData] = useState({ name: '', name_en: '', parent_id: '' });
  const [categoriesList, setCategoriesList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (initialCategoryData) {
      setCategoryData({
        name: initialCategoryData.name || '',
        name_en: initialCategoryData.name_en || '',
        parent_id: initialCategoryData.parent_id || ''
      });
    } else {
      setCategoryData({ name: '', name_en: '', parent_id: '' });
    }
  }, [initialCategoryData, editingCategoryId]);

  const fetchCategories = async () => {
    try {
      const data = await categoryService.getAll();
      setCategoriesList(data);
    } catch (error) {
      console.error("Error fetching categories for dropdown:", error);
    }
  };

  const handleCategorySubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });
    
    try {
      const dataToSend = {
        name: categoryData.name,
        name_en: categoryData.name_en,
        parent_id: categoryData.parent_id ? parseInt(categoryData.parent_id) : null
      };

      if (editingCategoryId) {
        await categoryService.update(editingCategoryId, dataToSend);
        await Swal.fire({
          title: 'Thành công!',
          text: 'Cập nhật danh mục thành công!',
          icon: 'success',
          confirmButtonColor: '#4f46e5'
        });
      } else {
        await categoryService.create(dataToSend);
        await Swal.fire({
          title: 'Thành công!',
          text: 'Thêm danh mục thành công!',
          icon: 'success',
          confirmButtonColor: '#4f46e5'
        });
      }
      
      setCategoryData({ name: '', name_en: '', parent_id: '' });
      onClearEdit();
      if (refreshCategories) refreshCategories();
      fetchCategories(); // Refresh dropdown
      if (onSuccess) onSuccess();
    } catch (error) {
      setMessage({ type: 'error', text: error.response?.data?.message || 'Failed to process category' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleCategorySubmit}>
      <div className="form-row">
        <div className="form-group">
          <label>Category Name (VI) *</label>
          <input type="text" value={categoryData.name} onChange={e => setCategoryData({...categoryData, name: e.target.value})} required />
        </div>
        <div className="form-group">
          <label>Category Name (EN)</label>
          <input type="text" value={categoryData.name_en} onChange={e => setCategoryData({...categoryData, name_en: e.target.value})} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Parent Category (Leave blank if Main Category)</label>
          <select 
            value={categoryData.parent_id} 
            onChange={e => setCategoryData({...categoryData, parent_id: e.target.value})}
            style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #d1d5db' }}
          >
            <option value="">-- None (Main Category) --</option>
            {categoriesList.map(cat => (
              <option key={cat.category_id} value={cat.category_id}>{cat.name}</option>
            ))}
          </select>
        </div>
      </div>
      
      <button type="submit" className="submit-btn" disabled={loading}>
        {loading ? 'Processing...' : (editingCategoryId ? 'Update Category' : 'Create Category')}
      </button>
    </form>
  );
};

export default CategoryForm;

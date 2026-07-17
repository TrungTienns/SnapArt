import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import categoryService from '../../../services/categoryService';

const CategoryForm = ({ editingCategoryId, initialCategoryData, setMessage, onClearEdit, refreshCategories, onSuccess }) => {
  const [categoryData, setCategoryData] = useState({ name: '', name_en: '', parent_id: '', image_url: '' });
  const [categoryImage, setCategoryImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
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
        parent_id: initialCategoryData.parent_id || '',
        image_url: initialCategoryData.image_url || ''
      });
    } else {
      setCategoryData({ name: '', name_en: '', parent_id: '', image_url: '' });
    }
    setCategoryImage(null);
    setImagePreview(null);
  }, [initialCategoryData, editingCategoryId]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCategoryImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setCategoryImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setCategoryImage(null);
    setImagePreview(null);
    setCategoryData(prev => ({...prev, image_url: ''}));
  };

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
      const formData = new FormData();
      formData.append('name', categoryData.name);
      formData.append('name_en', categoryData.name_en);
      if (categoryData.parent_id) {
          formData.append('parent_id', parseInt(categoryData.parent_id));
      }
      if (categoryImage) {
          formData.append('image', categoryImage);
      }

      if (editingCategoryId) {
        await categoryService.update(editingCategoryId, formData);
        await Swal.fire({
          title: 'Thành công!',
          text: 'Cập nhật danh mục thành công!',
          icon: 'success',
          confirmButtonColor: '#4f46e5'
        });
      } else {
        await categoryService.create(formData);
        await Swal.fire({
          title: 'Thành công!',
          text: 'Thêm danh mục thành công!',
          icon: 'success',
          confirmButtonColor: '#4f46e5'
        });
      }
      
      setCategoryData({ name: '', name_en: '', parent_id: '', image_url: '' });
      setCategoryImage(null);
      setImagePreview(null);
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
      
      <div className="form-group image-uploader-group">
        <label>Category Image {editingCategoryId && '(Leave blank to keep current image)'}</label>
        <div 
          className={`image-drop-zone ${isDragging ? 'dragging' : ''}`}
          onDrop={handleDrop}
          onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
        >
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
            id="cat-image-input" 
            style={{display: 'none'}} 
          />
          {(imagePreview || categoryData.image_url) ? (
            <div className="single-image-preview">
              <img src={imagePreview || categoryData.image_url} alt="Category Preview" />
              <button type="button" className="btn-remove-img" onClick={removeImage}>
                <FontAwesomeIcon icon={faTimes} /> Xóa ảnh
              </button>
            </div>
          ) : (
            <label htmlFor="cat-image-input" className="drop-zone-content">
              <FontAwesomeIcon icon={faCloudUploadAlt} className="upload-icon" />
              <p className="drop-zone-title">Click or drag image to upload</p>
              <p className="drop-zone-subtitle">Supported formats: JPG, PNG, GIF</p>
            </label>
          )}
        </div>
      </div>
      
      <button type="submit" className="submit-btn" disabled={loading}>
        {loading ? 'Processing...' : (editingCategoryId ? 'Update Category' : 'Create Category')}
      </button>
    </form>
  );
};

export default CategoryForm;

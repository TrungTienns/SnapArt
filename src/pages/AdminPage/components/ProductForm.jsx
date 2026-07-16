import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import productService from '../../../services/productService';

const ProductForm = ({ editingProductId, initialProductData, setMessage, onClearEdit, refreshProducts, onSuccess }) => {
  const [productData, setProductData] = useState({ 
    category_id: 1, name: '', name_en: '', description: '', description_en: '', 
    size: '', material: '', material_en: '', price: '', stock_quantity: 10,
    product_type: 'physical', duration: '', target_audience: '', takeaway: '', image_url: ''
  });
  const [productImage, setProductImage] = useState(null);
  const [productImagePreview, setProductImagePreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [categoriesList, setCategoriesList] = useState([]);
  
  useEffect(() => {
    if (initialProductData) {
      setProductData({
        ...initialProductData
      });
    } else {
      setProductData({ 
        category_id: categoriesList.length > 0 ? categoriesList[0].category_id : 1, 
        name: '', name_en: '', description: '', description_en: '', 
        size: '', material: '', material_en: '', price: '', stock_quantity: 10,
        product_type: 'physical', duration: '', target_audience: '', takeaway: '', image_url: ''
      });
    }
    setProductImage(null);
    setProductImagePreview(null);
  }, [initialProductData, editingProductId]);
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { default: categoryService } = await import('../../../services/categoryService');
        const data = await categoryService.getAll();
        setCategoriesList(data);
        if (data.length > 0) {
          setProductData(prev => {
            if (!prev.category_id || prev.category_id === 1) return {...prev, category_id: data[0].category_id};
            return prev;
          });
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleProductImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProductImage(file);
      setProductImagePreview(URL.createObjectURL(file));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setProductImage(file);
      setProductImagePreview(URL.createObjectURL(file));
    }
  };

  const removeProductImage = () => {
    setProductImage(null);
    setProductImagePreview(null);
    if (editingProductId) {
      setProductData(prev => ({ ...prev, image_url: '' }));
    }
  };

  const formatPrice = (value) => {
    if (!value) return '';
    const numericValue = value.toString().replace(/\D/g, '');
    if (!numericValue) return '';
    return new Intl.NumberFormat('vi-VN').format(numericValue);
  };

  const handlePriceChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, '');
    setProductData(prev => ({...prev, price: rawValue}));
  };

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const formData = new FormData();
      Object.keys(productData).forEach(key => {
        // Skip metadata fields here, we'll bundle them
        if (!['duration', 'target_audience', 'target_audience_en', 'takeaway', 'takeaway_en'].includes(key)) {
          formData.append(key, productData[key]);
        }
      });
      
      if (productData.product_type === 'workshop') {
        const metadataObj = {
          duration: productData.duration,
          target_audience: productData.target_audience,
          target_audience_en: productData.target_audience_en,
          takeaway: productData.takeaway,
          takeaway_en: productData.takeaway_en
        };
        formData.append('metadata', JSON.stringify(metadataObj));
      }
      if (productImage) formData.append('image', productImage);

      if (editingProductId) {
        await productService.update(editingProductId, formData);
        await Swal.fire({
          title: 'Thành công!',
          text: 'Cập nhật sản phẩm thành công!',
          icon: 'success',
          confirmButtonColor: '#ff8fa3'
        });
      } else {
        await productService.create(formData);
        await Swal.fire({
          title: 'Thành công!',
          text: 'Thêm sản phẩm thành công!',
          icon: 'success',
          confirmButtonColor: '#ff8fa3'
        });
      }
      
      setProductData({ 
        category_id: categoriesList.length > 0 ? categoriesList[0].category_id : 1, 
        name: '', name_en: '', description: '', description_en: '', 
        size: '', material: '', material_en: '', price: '', stock_quantity: 10,
        product_type: 'physical', duration: '', target_audience: '', target_audience_en: '', takeaway: '', takeaway_en: '', image_url: ''
      });
      setProductImage(null);
      setProductImagePreview(null);
      if (onClearEdit) onClearEdit();
      if (refreshProducts) refreshProducts();
      
      if (onSuccess) onSuccess();
    } catch (error) {
      Swal.fire({
        title: 'Lỗi!',
        text: error.response?.data?.message || 'Có lỗi xảy ra',
        icon: 'error',
        confirmButtonColor: '#ef4444'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleProductSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label>Product Type *</label>
          <select 
            value={productData.product_type} 
            onChange={e => setProductData(prev => ({...prev, product_type: e.target.value}))}
            style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #d1d5db' }}
          >
            <option value="physical">Physical Product (Tranh)</option>
            <option value="workshop">Workshop (Dịch vụ)</option>
          </select>
        </div>
        <div className="form-group">
          <label>Category *</label>
          <select 
            value={productData.category_id} 
            onChange={e => setProductData(prev => ({...prev, category_id: e.target.value}))}
            style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #d1d5db' }}
          >
            {categoriesList.map(cat => (
              <React.Fragment key={cat.category_id}>
                <option value={cat.category_id}>{cat.name}</option>
                {cat.subcategories && cat.subcategories.map(sub => (
                  <option key={sub.category_id} value={sub.category_id}>-- {sub.name}</option>
                ))}
              </React.Fragment>
            ))}
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Name (VI) *</label>
          <input type="text" value={productData.name} onChange={e => setProductData(prev => ({...prev, name: e.target.value}))} required />
        </div>
        <div className="form-group">
          <label>Name (EN)</label>
          <input type="text" value={productData.name_en} onChange={e => setProductData(prev => ({...prev, name_en: e.target.value}))} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Description (VI)</label>
          <textarea value={productData.description} onChange={e => setProductData(prev => ({...prev, description: e.target.value}))} />
        </div>
        <div className="form-group">
          <label>Description (EN)</label>
          <textarea value={productData.description_en} onChange={e => setProductData(prev => ({...prev, description_en: e.target.value}))} />
        </div>
      </div>
      {productData.product_type === 'physical' && (
        <div className="form-row">
          <div className="form-group">
            <label>Material (VI)</label>
            <input type="text" value={productData.material} onChange={e => setProductData(prev => ({...prev, material: e.target.value}))} />
          </div>
          <div className="form-group">
            <label>Material (EN)</label>
            <input type="text" value={productData.material_en} onChange={e => setProductData(prev => ({...prev, material_en: e.target.value}))} />
          </div>
        </div>
      )}

      {productData.product_type === 'workshop' && (
        <>
          <div className="form-row">
            <div className="form-group">
              <label>Duration (Thời lượng) *</label>
              <input type="text" placeholder="VD: 4-5 tiếng" value={productData.duration} onChange={e => setProductData(prev => ({...prev, duration: e.target.value}))} required={productData.product_type === 'workshop'} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Target Audience (Phù hợp với ai - VI) *</label>
              <input type="text" placeholder="VD: Người mới bắt đầu" value={productData.target_audience} onChange={e => setProductData(prev => ({...prev, target_audience: e.target.value}))} required={productData.product_type === 'workshop'} />
            </div>
            <div className="form-group">
              <label>Target Audience (EN)</label>
              <input type="text" placeholder="VD: Beginners" value={productData.target_audience_en} onChange={e => setProductData(prev => ({...prev, target_audience_en: e.target.value}))} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Takeaway (Thành phẩm - VI) *</label>
              <input type="text" placeholder="VD: Tranh mang về" value={productData.takeaway} onChange={e => setProductData(prev => ({...prev, takeaway: e.target.value}))} required={productData.product_type === 'workshop'} />
            </div>
            <div className="form-group">
              <label>Takeaway (EN)</label>
              <input type="text" placeholder="VD: Painting to take home" value={productData.takeaway_en} onChange={e => setProductData(prev => ({...prev, takeaway_en: e.target.value}))} />
            </div>
          </div>
        </>
      )}
      <div className="form-row">
        <div className="form-group">
          <label>Price (VND) *</label>
          <input 
            type="text" 
            value={formatPrice(productData.price)} 
            onChange={handlePriceChange} 
            required 
            placeholder="VD: 1500000"
          />
        </div>
        {productData.product_type === 'physical' && (
          <div className="form-group">
            <label>Size</label>
            <input type="text" value={productData.size} onChange={e => setProductData(prev => ({...prev, size: e.target.value}))} placeholder="e.g. 60x90cm" />
          </div>
        )}
      </div>
      <div className="form-group image-uploader-group">
        <label>Product Image {editingProductId && '(Leave blank to keep current image)'}</label>
        <div 
          className={`image-drop-zone ${isDragging ? 'dragging' : ''}`}
          onDrop={handleDrop}
          onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
        >
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleProductImageChange} 
            id="product-image-input" 
            style={{display: 'none'}} 
          />
          {(productImagePreview || productData.image_url) ? (
            <div className="single-image-preview">
              <img src={productImagePreview || productData.image_url} alt="Product Preview" />
              <button type="button" className="btn-remove-img" onClick={removeProductImage}>
                <FontAwesomeIcon icon={faTimes} /> Xóa ảnh
              </button>
            </div>
          ) : (
            <label htmlFor="product-image-input" className="drop-zone-content">
              <FontAwesomeIcon icon={faCloudUploadAlt} className="upload-icon" />
              <p className="drop-zone-title">Chọn ảnh sản phẩm</p>
              <p className="drop-zone-sub">Kéo & thả hoặc <span>bấm để chọn</span> từ máy tính</p>
              <p className="drop-zone-hint">Hỗ trợ JPG, PNG, WEBP</p>
            </label>
          )}
        </div>
      </div>
      <button type="submit" className="submit-btn" disabled={loading}>
        {loading ? 'Processing...' : (editingProductId ? 'Update Product' : 'Save Product')}
      </button>
    </form>
  );
};

export default ProductForm;

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import productService from '../../../services/productService';

const ProductList = ({ handleEditProductClick, handleAddNew, setMessage, fetchKey }) => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [fetchKey]);

  const fetchProducts = async () => {
    try {
      const data = await productService.getAll();
      setProductsList(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleDeleteProduct = async (id) => {
    const result = await Swal.fire({
      title: 'Bạn có chắc chắn muốn xóa?',
      text: 'Hành động này không thể hoàn tác!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#9ca3af',
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy'
    });

    if (result.isConfirmed) {
      try {
        await productService.delete(id);
        await Swal.fire({
          title: 'Đã xóa!',
          text: 'Sản phẩm đã được xóa.',
          icon: 'success',
          confirmButtonColor: '#4f46e5'
        });
        fetchProducts();
      } catch (error) {
        Swal.fire({
          title: 'Lỗi!',
          text: 'Không thể xóa sản phẩm.',
          icon: 'error',
          confirmButtonColor: '#4f46e5'
        });
      }
    }
  };

  return (
    <div className="manage-list-container">
      <div className="list-header">
        <h2 className="list-title">Tất cả sản phẩm</h2>
        <div className="list-actions">
          <div className="search-bar">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input type="text" placeholder="Tìm kiếm sản phẩm..." />
          </div>
          <button className="btn-add-new" onClick={handleAddNew}>
            <FontAwesomeIcon icon={faPlus} /> Thêm Sản Phẩm Mới
          </button>
        </div>
      </div>

      <div className="manage-list">
        <table>
          <thead>
            <tr>
              <th>ẢNH</th>
              <th>TÊN SẢN PHẨM</th>
              <th>LOẠI</th>
              <th>GIÁ (VND)</th>
              <th>HÀNH ĐỘNG</th>
            </tr>
          </thead>
          <tbody>
            {productsList.map(product => (
              <tr key={product.product_id}>
                <td>
                  <img src={product.image_url || `https://picsum.photos/seed/${product.product_id}/400/400`} alt={product.name} />
                </td>
                <td>{product.name}</td>
                <td>{product.product_type === 'workshop' ? 'Workshop' : 'Physical'}</td>
                <td>{product.sale_price ? new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.sale_price) : new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}</td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn edit" onClick={() => handleEditProductClick(product)} title="Chỉnh sửa">
                      <FontAwesomeIcon icon={faPen} />
                    </button>
                    <button className="action-btn delete" onClick={() => handleDeleteProduct(product.product_id)} title="Xóa">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {productsList.length === 0 && (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center', padding: '20px' }}>No products found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import AdminSidebar from './components/AdminSidebar';
import DashboardView from './components/DashboardView';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';
import CategoryList from './components/CategoryList';
import CategoryForm from './components/CategoryForm';
import UserList from './components/UserList';
import PhotoManager from './components/PhotoManager';
import OrderManager from './components/OrderManager';
import { AuthContext } from '../../context/AuthContext';
import './AdminPage.scss';

const AdminPage = () => {
  const navigate = useNavigate();
  const { user } = React.useContext(AuthContext);

  React.useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/login');
    }
  }, [user, navigate]);

  const [activeMenu, setActiveMenu] = useState('dashboard');
  
  // Shared state between ProductList and ProductForm
  const [editingProductId, setEditingProductId] = useState(null);
  const [productDataToEdit, setProductDataToEdit] = useState(null);

  // Shared state between BlogList (edit) and BlogForm
  const [editingBlogId, setEditingBlogId] = useState(null);
  const [blogDataToEdit, setBlogDataToEdit] = useState(null);
  
  // Shared state between CategoryList (edit) and CategoryForm
  const [editingCategoryId, setEditingCategoryId] = useState(null);
  const [categoryDataToEdit, setCategoryDataToEdit] = useState(null);
  
  // Global message
  const [message, setMessage] = useState({ type: '', text: '' });
  
  // Force re-fetch when returning to lists
  const [fetchKey, setFetchKey] = useState(0);

  const handleMenuChange = (menu) => {
    setActiveMenu(menu);
    setMessage({});
    if (menu !== 'add-product' && menu !== 'manage-products' && menu !== 'manage-workshops' && menu !== 'add-workshop') {
      setEditingProductId(null);
      setProductDataToEdit(null);
    }
    if (menu !== 'add-blog' && menu !== 'manage-blogs') {
      setEditingBlogId(null);
      setBlogDataToEdit(null);
    }
    if (menu !== 'add-category' && menu !== 'manage-categories') {
      setEditingCategoryId(null);
      setCategoryDataToEdit(null);
    }
    if (menu === 'manage-products' || menu === 'manage-workshops' || menu === 'manage-blogs' || menu === 'manage-categories') {
      setFetchKey(prev => prev + 1);
    }
  };

  const handleEditBlogClick = (blog) => {
    setEditingBlogId(blog.blog_id);
    setBlogDataToEdit({
      title: blog.title || '',
      title_en: blog.title_en || '',
      content: blog.content || '',
      content_en: blog.content_en || '',
      image_url: blog.image_url || ''
    });
    setActiveMenu('add-blog');
  };

  const handleClearBlogEdit = () => {
    setEditingBlogId(null);
    setBlogDataToEdit(null);
  };

  const handleEditProductClick = (product) => {
    setEditingProductId(product.product_id);
    
    let parsedMetadata = {};
    if (typeof product.metadata === 'string') {
      try { parsedMetadata = JSON.parse(product.metadata); } catch(e) {}
    } else if (product.metadata) {
      parsedMetadata = product.metadata;
    }

    setProductDataToEdit({
      category_id: product.category_id || 1,
      name: product.name || '',
      name_en: product.name_en || '',
      description: product.description || '',
      description_en: product.description_en || '',
      size: product.size || '',
      material: product.material || '',
      material_en: product.material_en || '',
      price: product.price || '',
      sale_price: product.sale_price || '',
      stock_quantity: product.stock_quantity || 10,
      product_type: product.product_type || 'physical',
      duration: parsedMetadata.duration || '',
      target_audience: parsedMetadata.target_audience || '',
      target_audience_en: parsedMetadata.target_audience_en || '',
      takeaway: parsedMetadata.takeaway || '',
      takeaway_en: parsedMetadata.takeaway_en || '',
      image_url: product.image_url || ''
    });
    setActiveMenu('add-product');
  };

  const handleClearProductEdit = () => {
    setEditingProductId(null);
    setProductDataToEdit(null);
  };

  const handleEditCategoryClick = (category) => {
    setEditingCategoryId(category.category_id);
    setCategoryDataToEdit({
      name: category.name || '',
      name_en: category.name_en || '',
      parent_id: category.parent_id || ''
    });
    setActiveMenu('add-category');
  };

  const handleClearCategoryEdit = () => {
    setEditingCategoryId(null);
    setCategoryDataToEdit(null);
  };

  return (
    <div className="admin-layout">
      {/* LEFT SIDEBAR */}
      <AdminSidebar 
        activeMenu={activeMenu} 
        handleMenuChange={handleMenuChange} 
        editingBlogId={editingBlogId} 
      />

      {/* MAIN CONTENT */}
      <main className="admin-main">
        <div className="admin-topbar">
          <div className="topbar-right">
            <div className="user-info">
              <span className="user-name">{user?.full_name || 'Admin'}</span>
              <span className="user-role">Administrator</span>
            </div>
            <div className="user-avatar">
              <i className="fa-solid fa-user-tie"></i>
            </div>
          </div>
        </div>

        <div className="admin-content">
          {['add-product', 'add-workshop', 'add-blog', 'add-category'].includes(activeMenu) ? (
            <div className="form-header-beautiful">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <div>
                  {(activeMenu === 'add-product' || activeMenu === 'add-workshop') && <h1>{editingProductId ? (activeMenu === 'add-workshop' ? 'Chỉnh sửa Workshop' : 'Chỉnh sửa Sản phẩm') : (activeMenu === 'add-workshop' ? 'Thêm Workshop Mới' : 'Thêm Sản phẩm Mới')}</h1>}
                  {activeMenu === 'add-blog' && <h1>{editingBlogId ? 'Chỉnh sửa Bài viết' : 'Thêm Bài viết Mới'}</h1>}
                  {activeMenu === 'add-category' && <h1>{editingCategoryId ? 'Chỉnh sửa Danh mục' : 'Thêm Danh mục Mới'}</h1>}
                  <p>Vui lòng điền đầy đủ các thông tin cần thiết vào biểu mẫu bên dưới.</p>
                </div>
                <button className="back-btn" onClick={() => {
                  if (activeMenu === 'add-product') {
                    handleClearProductEdit();
                    handleMenuChange('manage-products');
                  } else if (activeMenu === 'add-workshop') {
                    handleClearProductEdit();
                    handleMenuChange('manage-workshops');
                  } else if (activeMenu === 'add-blog') {
                    handleClearBlogEdit();
                    handleMenuChange('manage-blogs');
                  } else if (activeMenu === 'add-category') {
                    handleClearCategoryEdit();
                    handleMenuChange('manage-categories');
                  }
                }}>
                  <FontAwesomeIcon icon={faArrowLeft} /> Quay lại
                </button>
              </div>
            </div>
          ) : (
            <div className="content-header">
              {activeMenu === 'dashboard' && <h1>Dashboard Overview</h1>}
              {activeMenu === 'manage-products' && <h1>Quản lý Sản phẩm</h1>}
              {activeMenu === 'manage-workshops' && <h1>Quản lý Workshop</h1>}
              {activeMenu === 'manage-blogs' && <h1>Quản lý Bài viết (Blogs)</h1>}
              {activeMenu === 'manage-categories' && <h1>Quản lý Danh mục</h1>}
              {activeMenu === 'manage-orders' && <h1>Quản lý Đơn hàng</h1>}
              {activeMenu === 'manage-users' && <h1>Quản lý Người dùng</h1>}
              {activeMenu === 'manage-photos' && <h1>Quản lý Ảnh Feedback</h1>}
              <p>Tổng quan hệ thống và quản lý nội dung của bạn.</p>
            </div>
          )}

          <div className="admin-card">
            {message.text && (
              <div className={`message ${message.type}`}>{message.text}</div>
            )}

            {/* VIEWS */}
            {activeMenu === 'dashboard' && <DashboardView />}
            
            {activeMenu === 'manage-products' && (
              <ProductList 
                type="physical"
                handleEditProductClick={(product) => {
                  handleEditProductClick(product);
                  handleMenuChange('add-product');
                }}
                handleAddNew={() => handleMenuChange('add-product')} 
                setMessage={setMessage} 
                fetchKey={fetchKey}
              />
            )}
            
            {activeMenu === 'manage-workshops' && (
              <ProductList 
                type="workshop"
                handleEditProductClick={(product) => {
                  handleEditProductClick(product);
                  handleMenuChange('add-workshop');
                }}
                handleAddNew={() => handleMenuChange('add-workshop')} 
                setMessage={setMessage} 
                fetchKey={fetchKey}
              />
            )}
            
            {(activeMenu === 'add-product' || activeMenu === 'add-workshop') && (
              <ProductForm 
                editingProductId={editingProductId}
                initialProductData={productDataToEdit || { product_type: activeMenu === 'add-workshop' ? 'workshop' : 'physical' }}
                setMessage={setMessage}
                onClearEdit={handleClearProductEdit}
                onSuccess={() => handleMenuChange(activeMenu === 'add-workshop' ? 'manage-workshops' : 'manage-products')}
              />
            )}
            
            {activeMenu === 'add-blog' && (
              <BlogForm 
                editingBlogId={editingBlogId}
                initialBlogData={blogDataToEdit}
                setMessage={setMessage}
                onClearEdit={handleClearBlogEdit}
                onSuccess={() => handleMenuChange('manage-blogs')}
              />
            )}
            
            {activeMenu === 'manage-blogs' && (
              <BlogList 
                handleEditBlogClick={handleEditBlogClick}
                handleAddNew={() => handleMenuChange('add-blog')} 
                setMessage={setMessage} 
                fetchKey={fetchKey}
              />
            )}
            
            {activeMenu === 'manage-categories' && (
              <CategoryList 
                handleEditCategoryClick={handleEditCategoryClick}
                handleAddNew={() => handleMenuChange('add-category')} 
                setMessage={setMessage} 
                fetchKey={fetchKey}
              />
            )}
            
            {activeMenu === 'add-category' && (
              <CategoryForm 
                editingCategoryId={editingCategoryId}
                initialCategoryData={categoryDataToEdit}
                setMessage={setMessage}
                onClearEdit={handleClearCategoryEdit}
                onSuccess={() => handleMenuChange('manage-categories')}
              />
            )}

            {activeMenu === 'manage-users' && (
              <UserList setMessage={setMessage} />
            )}

            {activeMenu === 'manage-orders' && (
              <OrderManager />
            )}

            {activeMenu === 'manage-photos' && (
              <PhotoManager setMessage={setMessage} />
            )}
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPage;

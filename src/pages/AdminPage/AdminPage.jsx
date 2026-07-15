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
import './AdminPage.scss';

const AdminPage = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('add-product');
  
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
    if (menu !== 'add-product' && menu !== 'manage-products') {
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
    if (menu === 'manage-products' || menu === 'manage-blogs' || menu === 'manage-categories') {
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
      duration: product.metadata?.duration || '',
      target_audience: product.metadata?.target_audience || '',
      takeaway: product.metadata?.takeaway || ''
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
        <header className="admin-header">
          <button className="back-btn" onClick={() => navigate('/')}>
            <FontAwesomeIcon icon={faArrowLeft} /> Back to homepage
          </button>
        </header>

        <div className="admin-content">
          <div className="content-header">
            {activeMenu === 'dashboard' && <h1>Dashboard Overview</h1>}
            {activeMenu === 'manage-products' && <h1>Manage Products</h1>}
            {activeMenu === 'add-product' && <h1>{editingProductId ? 'Edit Product' : 'Add New Product'}</h1>}
            {activeMenu === 'manage-blogs' && <h1>Manage Blogs</h1>}
            {activeMenu === 'add-blog' && <h1>{editingBlogId ? 'Edit Blog' : 'Add New Blog'}</h1>}
            {activeMenu === 'manage-categories' && <h1>Manage Categories</h1>}
            {activeMenu === 'add-category' && <h1>{editingCategoryId ? 'Edit Category' : 'Add New Category'}</h1>}
            <p>Fill in the necessary information below to manage your catalog.</p>
          </div>

          <div className="admin-card">
            {message.text && (
              <div className={`message ${message.type}`}>{message.text}</div>
            )}

            {/* VIEWS */}
            {activeMenu === 'dashboard' && <DashboardView />}
            
            {activeMenu === 'manage-products' && (
              <ProductList 
                handleEditProductClick={handleEditProductClick}
                handleAddNew={() => handleMenuChange('add-product')} 
                setMessage={setMessage} 
                fetchKey={fetchKey}
              />
            )}
            
            {activeMenu === 'add-product' && (
              <ProductForm 
                editingProductId={editingProductId}
                initialProductData={productDataToEdit}
                setMessage={setMessage}
                onClearEdit={handleClearProductEdit}
                onSuccess={() => handleMenuChange('manage-products')}
              />
            )}
            
            {activeMenu === 'add-blog' && (
              <BlogForm 
                editingBlogId={editingBlogId}
                initialBlogData={blogDataToEdit}
                setMessage={setMessage}
                onClearEdit={handleClearBlogEdit}
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
              />
            )}
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPage;

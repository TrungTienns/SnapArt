import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChartPie, faPlus, faList, faArrowLeft, faCog, faHeadset, faUsers, faSignOutAlt, faBlog, faImages, faLayerGroup, faShoppingCart, faPenToSquare
} from '@fortawesome/free-solid-svg-icons';

const AdminSidebar = ({ activeMenu, handleMenuChange, editingBlogId }) => {
  const navigate = useNavigate();

  return (
    <aside className="admin-sidebar">
      <div className="sidebar-brand" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
        <div className="brand-text">SnapArt</div>
      </div>

      <div className="sidebar-section">
        <div className="section-title">MENU</div>
        <ul>
          <li>
            <button 
              className={activeMenu === 'dashboard' ? 'active' : ''} 
              onClick={() => handleMenuChange('dashboard')}
            >
              <FontAwesomeIcon icon={faChartPie} /> Dashboard
            </button>
          </li>
          <li>
            <button 
              className={activeMenu === 'manage-products' ? 'active' : ''} 
              onClick={() => handleMenuChange('manage-products')}
            >
              <FontAwesomeIcon icon={faList} /> Manage Products
            </button>
          </li>
          <li>
            <button 
              className={activeMenu === 'manage-workshops' ? 'active' : ''} 
              onClick={() => handleMenuChange('manage-workshops')}
            >
              <FontAwesomeIcon icon={faList} /> Manage Workshops
            </button>
          </li>
          <li>
            <button 
              className={activeMenu === 'manage-categories' ? 'active' : ''} 
              onClick={() => handleMenuChange('manage-categories')}
            >
              <FontAwesomeIcon icon={faPenToSquare} /> Manage Categories
            </button>
          </li>
          <li>
            <button 
              className={activeMenu === 'manage-orders' ? 'active' : ''} 
              onClick={() => handleMenuChange('manage-orders')}
            >
              <FontAwesomeIcon icon={faShoppingCart} /> Manage Orders
            </button>
          </li>
          <li>
            <button 
              className={activeMenu === 'manage-blogs' ? 'active' : ''} 
              onClick={() => handleMenuChange('manage-blogs')}
            >
              <FontAwesomeIcon icon={faBlog} /> Manage Blogs
            </button>
          </li>
          <li>
            <button 
              className={activeMenu === 'manage-users' ? 'active' : ''} 
              onClick={() => handleMenuChange('manage-users')}
            >
              <FontAwesomeIcon icon={faUsers} /> Manage Users
            </button>
          </li>
          <li>
            <button 
              className={activeMenu === 'manage-photos' ? 'active' : ''} 
              onClick={() => handleMenuChange('manage-photos')}
            >
              <FontAwesomeIcon icon={faImages} /> Manage Photos
            </button>
          </li>
        </ul>
      </div>

      <div className="sidebar-section logout-section">
        <ul>
          <li>
            <button className="logout-btn" onClick={() => navigate('/')}>
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AdminSidebar;

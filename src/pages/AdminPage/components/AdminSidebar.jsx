import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChartPie, faPlus, faList, faArrowLeft, faCog, faHeadset
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
              className={activeMenu === 'manage-categories' ? 'active' : ''} 
              onClick={() => handleMenuChange('manage-categories')}
            >
              <FontAwesomeIcon icon={faList} /> Manage Categories
            </button>
          </li>
          <li>
            <button 
              className={activeMenu === 'manage-blogs' ? 'active' : ''} 
              onClick={() => handleMenuChange('manage-blogs')}
            >
              <FontAwesomeIcon icon={faList} /> Manage Blogs
            </button>
          </li>
          <li>
            <button 
              className={activeMenu === 'manage-users' ? 'active' : ''} 
              onClick={() => handleMenuChange('manage-users')}
            >
              <i className="fa-solid fa-users" style={{ marginRight: '8px' }}></i> Manage Users
            </button>
          </li>
        </ul>
      </div>

      <div className="sidebar-section logout-section">
        <ul>
          <li>
            <button className="logout-btn" onClick={() => navigate('/')}>
              <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AdminSidebar;

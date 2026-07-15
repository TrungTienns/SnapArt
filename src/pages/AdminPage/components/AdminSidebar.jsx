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
      <div className="sidebar-brand">
        <div className="brand-icon">SA</div>
        SnapArt Analytics Hub
      </div>

      <div className="sidebar-section">
        <div className="section-title">BOARDS</div>
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

        </ul>
      </div>

      <div className="sidebar-section">
        <div className="section-title">OTHER</div>
        <ul>
          <li>
            <button onClick={() => navigate('/')}>
              <FontAwesomeIcon icon={faArrowLeft} /> Back to Website
            </button>
          </li>
          <li>
            <button>
              <FontAwesomeIcon icon={faCog} /> Settings
            </button>
          </li>
          <li>
            <button>
              <FontAwesomeIcon icon={faHeadset} /> Support
            </button>
          </li>
        </ul>
      </div>

      <div className="sidebar-footer">
        <img src="https://ui-avatars.com/api/?name=Admin+User&background=2c3e50&color=fff" alt="Admin" />
        <div className="user-info">
          <span>Admin User</span>
          <small>Administrator</small>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;

import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../context/AuthContext';
import authService from '../../services/authService';
import logo from '../../assets/logo.png';
import './Auth.scss';

const Login = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const isEnglish = i18n.language === 'en';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!formData.email || !formData.password) {
      return setError(isEnglish ? 'Please fill in all fields' : 'Vui lòng điền đầy đủ thông tin');
    }

    setLoading(true);
    try {
      const response = await authService.login(formData);
      login(response.user, response.token);
      if (response.user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } catch (err) {
      setError(err.response?.data?.message || (isEnglish ? 'Login failed' : 'Đăng nhập thất bại'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <Link to="/">
          <img src={logo} alt="SnapArt" className="brand-logo" />
        </Link>
        <h2>{isEnglish ? 'Welcome Back' : 'Chào mừng trở lại'}</h2>
        <p className="subtitle">{isEnglish ? 'Log in to continue to SnapArt' : 'Đăng nhập để tiếp tục'}</p>
        
        <form className="auth-form" onSubmit={handleSubmit}>
          {error && <div className="error-msg">{error}</div>}
          
          <div className="form-group">
            <label>{isEnglish ? 'Email Address' : 'Địa chỉ Email'}</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange}
              placeholder={isEnglish ? "Enter your email" : "Nhập email của bạn"}
            />
          </div>
          
          <div className="form-group">
            <label>{isEnglish ? 'Password' : 'Mật khẩu'}</label>
            <input 
              type="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange}
              placeholder={isEnglish ? "Enter your password" : "Nhập mật khẩu"}
            />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? (isEnglish ? 'Logging in...' : 'Đang đăng nhập...') : (isEnglish ? 'Log In' : 'Đăng Nhập')}
          </button>
        </form>

        <div className="auth-footer">
          {isEnglish ? "Don't have an account?" : "Chưa có tài khoản?"} 
          <Link to="/register">{isEnglish ? 'Sign Up' : 'Đăng Ký'}</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

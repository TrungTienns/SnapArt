import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../context/AuthContext';
import authService from '../../services/authService';
import logo from '../../assets/logo.png';
import './Auth.scss';

const Register = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  
  const [formData, setFormData] = useState({ full_name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const isEnglish = i18n.language === 'en';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!formData.full_name || !formData.email || !formData.password || !formData.confirmPassword) {
      return setError(isEnglish ? 'Please fill in all fields' : 'Vui lòng điền đầy đủ thông tin');
    }

    if (formData.password !== formData.confirmPassword) {
      return setError(isEnglish ? 'Passwords do not match' : 'Mật khẩu xác nhận không khớp');
    }

    setLoading(true);
    try {
      const { confirmPassword, ...registerData } = formData;
      const response = await authService.register(registerData);
      login(response.user, response.token);
      if (response.user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } catch (err) {
      setError(err.response?.data?.message || (isEnglish ? 'Registration failed' : 'Đăng ký thất bại'));
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
        <h2>{isEnglish ? 'Create an Account' : 'Tạo tài khoản'}</h2>
        <p className="subtitle">{isEnglish ? 'Join SnapArt community today' : 'Tham gia cộng đồng SnapArt ngay hôm nay'}</p>
        
        <form className="auth-form" onSubmit={handleSubmit}>
          {error && <div className="error-msg">{error}</div>}
          
          <div className="form-group">
            <label>{isEnglish ? 'Full Name' : 'Họ và tên'}</label>
            <input 
              type="text" 
              name="full_name" 
              value={formData.full_name} 
              onChange={handleChange}
              placeholder={isEnglish ? "Enter your full name" : "Nhập họ và tên của bạn"}
            />
          </div>

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
              placeholder={isEnglish ? "Create a password" : "Tạo mật khẩu"}
            />
          </div>

          <div className="form-group">
            <label>{isEnglish ? 'Confirm Password' : 'Xác nhận mật khẩu'}</label>
            <input 
              type="password" 
              name="confirmPassword" 
              value={formData.confirmPassword} 
              onChange={handleChange}
              placeholder={isEnglish ? "Confirm your password" : "Xác nhận mật khẩu của bạn"}
            />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? (isEnglish ? 'Signing up...' : 'Đang đăng ký...') : (isEnglish ? 'Sign Up' : 'Đăng Ký')}
          </button>
        </form>

        <div className="auth-footer">
          {isEnglish ? "Already have an account?" : "Đã có tài khoản?"} 
          <Link to="/login">{isEnglish ? 'Log In' : 'Đăng Nhập'}</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

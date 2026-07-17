import React, { useState, useEffect, useContext } from 'react';
import Swal from 'sweetalert2';
import userService from '../../../services/userService';
import { AuthContext } from '../../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGear } from '@fortawesome/free-solid-svg-icons';

const UserList = ({ setMessage }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await userService.getAllUsers();
      if (res && res.data && Array.isArray(res.data)) {
        setUsers(res.data);
      } else if (Array.isArray(res)) {
        setUsers(res);
      } else {
        setUsers([]);
      }
    } catch (error) {
      console.error('Lỗi khi tải danh sách người dùng', error);
      setMessage({ type: 'error', text: 'Không thể tải danh sách người dùng.' });
    } finally {
      setLoading(false);
    }
  };

  const handleToggleRole = async (userId, currentRole) => {
    if (currentUser?.user_id === userId && currentRole === 'admin') {
      Swal.fire({
        title: 'Cảnh báo!',
        text: 'Bạn không thể tự hạ quyền của chính mình!',
        icon: 'warning',
        confirmButtonColor: '#4f46e5'
      });
      return;
    }

    const newRole = currentRole === 'admin' ? 'user' : 'admin';
    const result = await Swal.fire({
      title: 'Xác nhận thay đổi?',
      text: `Bạn có chắc chắn muốn thay đổi quyền người dùng này thành ${newRole.toUpperCase()}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#4f46e5',
      cancelButtonColor: '#9ca3af',
      confirmButtonText: 'Đồng ý',
      cancelButtonText: 'Hủy'
    });

    if (!result.isConfirmed) {
      return;
    }

    try {
      await userService.updateUserRole(userId, newRole);
      await Swal.fire({
        title: 'Thành công!',
        text: `Đã thay đổi quyền thành ${newRole.toUpperCase()} thành công!`,
        icon: 'success',
        confirmButtonColor: '#4f46e5'
      });
      setMessage({ type: 'success', text: `Đã thay đổi quyền thành ${newRole.toUpperCase()} thành công!` });
      fetchUsers();
    } catch (error) {
      console.error('Lỗi khi cập nhật quyền:', error);
      Swal.fire({
        title: 'Lỗi!',
        text: error.response?.data?.message || 'Không thể cập nhật quyền người dùng.',
        icon: 'error',
        confirmButtonColor: '#4f46e5'
      });
      setMessage({ type: 'error', text: error.response?.data?.message || 'Không thể cập nhật quyền người dùng.' });
    }
  };

  return (
    <div className="manage-list-container">
      <div className="list-header">
        <h2 className="list-title">Danh sách Người dùng</h2>
      </div>
      {loading ? (
        <p>Đang tải dữ liệu...</p>
      ) : (
        <div className="manage-list">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Tên hiển thị</th>
                <th>Email</th>
                <th>Vai trò (Role)</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {(users || []).map(user => (
                <tr key={user.user_id}>
                  <td>{user.user_id}</td>
                  <td>{user.full_name}</td>
                  <td>{user.email}</td>
                  <td>
                    <span style={{ 
                      padding: '6px 12px', 
                      borderRadius: '20px', 
                      fontSize: '0.85rem', 
                      fontWeight: 'bold',
                      backgroundColor: user.role === 'admin' ? '#fee2e2' : '#e0f2fe',
                      color: user.role === 'admin' ? '#991b1b' : '#0369a1' 
                    }}>
                      {user.role}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button 
                        className="action-btn edit"
                        onClick={() => handleToggleRole(user.user_id, user.role)}
                        title="Đổi quyền User/Admin"
                        disabled={currentUser?.user_id === user.user_id}
                        style={{ opacity: currentUser?.user_id === user.user_id ? 0.5 : 1, cursor: currentUser?.user_id === user.user_id ? 'not-allowed' : 'pointer' }}
                      >
                        <FontAwesomeIcon icon={faUserGear} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {(!users || users.length === 0) && (
                <tr>
                  <td colSpan="5" style={{ textAlign: 'center' }}>Chưa có người dùng nào</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserList;

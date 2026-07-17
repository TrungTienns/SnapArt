import React, { useState, useEffect } from 'react';
import orderService from '../../../services/orderService';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash, faCheckCircle, faTimesCircle, faClock, faPhone } from '@fortawesome/free-solid-svg-icons';
import './OrderManager.scss';

const OrderManager = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedOrder, setSelectedOrder] = useState(null); // For modal

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            setLoading(true);
            const data = await orderService.getAllOrders();
            setOrders(data);
        } catch (error) {
            console.error('Lỗi khi tải đơn hàng:', error);
            Swal.fire('Lỗi', 'Không thể tải danh sách đơn hàng', 'error');
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateStatus = async (id, newStatus) => {
        try {
            await orderService.updateOrderStatus(id, newStatus);
            setOrders(orders.map(order => 
                order.order_id === id ? { ...order, status: newStatus } : order
            ));
            Swal.fire({
                title: 'Thành công!',
                text: 'Đã cập nhật trạng thái đơn hàng.',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false
            });
            setSelectedOrder(prev => prev && prev.order_id === id ? { ...prev, status: newStatus } : prev);
        } catch (error) {
            Swal.fire('Lỗi', 'Không thể cập nhật trạng thái', 'error');
        }
    };

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Xóa đơn hàng?',
            text: 'Bạn không thể hoàn tác thao tác này!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Đồng ý xóa',
            cancelButtonText: 'Hủy'
        });

        if (result.isConfirmed) {
            try {
                await orderService.deleteOrder(id);
                setOrders(orders.filter(order => order.order_id !== id));
                Swal.fire('Đã xóa!', 'Đơn hàng đã bị xóa.', 'success');
            } catch (error) {
                Swal.fire('Lỗi', 'Không thể xóa đơn hàng.', 'error');
            }
        }
    };

    const formatPrice = (value) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleString('vi-VN');
    };

    const getStatusBadge = (status) => {
        switch(status) {
            case 'pending': return <span className="badge badge-pending"><FontAwesomeIcon icon={faClock} /> Đang chờ</span>;
            case 'contacted': return <span className="badge badge-contacted"><FontAwesomeIcon icon={faPhone} /> Đã liên hệ</span>;
            case 'completed': return <span className="badge badge-completed"><FontAwesomeIcon icon={faCheckCircle} /> Hoàn thành</span>;
            case 'cancelled': return <span className="badge badge-cancelled"><FontAwesomeIcon icon={faTimesCircle} /> Đã hủy</span>;
            default: return <span className="badge">{status}</span>;
        }
    };

    return (
        <div className="order-manager">
            <div className="header-actions">
                <h2>Quản lý đơn hàng</h2>
                <button onClick={fetchOrders} className="btn-refresh">Làm mới</button>
            </div>

            {loading ? (
                <div className="loading">Đang tải dữ liệu...</div>
            ) : (
                <div className="table-responsive">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Mã ĐH</th>
                                <th>Khách hàng</th>
                                <th>Số điện thoại</th>
                                <th>Tổng tiền</th>
                                <th>Ngày đặt</th>
                                <th>Trạng thái</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <tr key={order.order_id}>
                                    <td>#{order.order_id}</td>
                                    <td>{order.customer_name}</td>
                                    <td>{order.customer_phone}</td>
                                    <td className="price-col">{formatPrice(order.total_amount)}</td>
                                    <td>{formatDate(order.created_at)}</td>
                                    <td>{getStatusBadge(order.status)}</td>
                                    <td className="action-btns">
                                        <button className="btn-view" onClick={() => setSelectedOrder(order)} title="Xem chi tiết">
                                            <FontAwesomeIcon icon={faEye} />
                                        </button>
                                        <button className="btn-delete" onClick={() => handleDelete(order.order_id)} title="Xóa">
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {orders.length === 0 && (
                                <tr>
                                    <td colSpan="7" className="text-center">Chưa có đơn hàng nào.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Modal Chi tiết đơn hàng */}
            {selectedOrder && (
                <div className="order-modal-overlay" onClick={() => setSelectedOrder(null)}>
                    <div className="order-modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Chi tiết đơn hàng #{selectedOrder.order_id}</h3>
                            <button className="btn-close" onClick={() => setSelectedOrder(null)}>&times;</button>
                        </div>
                        
                        <div className="modal-body">
                            <div className="info-grid">
                                <div className="info-box">
                                    <h4>Thông tin khách hàng</h4>
                                    <p><strong>Họ tên:</strong> {selectedOrder.customer_name}</p>
                                    <p><strong>Số điện thoại:</strong> {selectedOrder.customer_phone}</p>
                                    <p><strong>Email:</strong> {selectedOrder.customer_email || 'Không có'}</p>
                                </div>
                                <div className="info-box">
                                    <h4>Giao hàng & Trạng thái</h4>
                                    <p><strong>Địa chỉ:</strong> {selectedOrder.shipping_address}</p>
                                    <p><strong>Ghi chú:</strong> {selectedOrder.notes || 'Không có'}</p>
                                    <p><strong>Trạng thái:</strong> {getStatusBadge(selectedOrder.status)}</p>
                                </div>
                            </div>

                            <div className="order-items-list">
                                <h4>Danh sách sản phẩm</h4>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Sản phẩm</th>
                                            <th>Đơn giá</th>
                                            <th>SL</th>
                                            <th>Thành tiền</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {selectedOrder.items?.map(item => (
                                            <tr key={item.item_id}>
                                                <td>
                                                    <div className="item-name-cell">
                                                        <img src={item.product?.image_url || `https://picsum.photos/seed/${item.product_id}/800/500`} alt="img" width={40} height={40} style={{objectFit: 'cover', borderRadius: '4px'}} />
                                                        <span>{item.product?.name || `Sản phẩm ID: ${item.product_id}`}</span>
                                                    </div>
                                                </td>
                                                <td>{formatPrice(item.price)}</td>
                                                <td>{item.quantity}</td>
                                                <td>{formatPrice(item.price * item.quantity)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="order-total">
                                    Tổng cộng: <strong>{formatPrice(selectedOrder.total_amount)}</strong>
                                </div>
                            </div>

                            <div className="status-actions">
                                <h4>Cập nhật trạng thái:</h4>
                                <div className="btn-group">
                                    <button 
                                        className={`btn-status btn-pending ${selectedOrder.status === 'pending' ? 'active' : ''}`}
                                        onClick={() => handleUpdateStatus(selectedOrder.order_id, 'pending')}>
                                        Đang chờ
                                    </button>
                                    <button 
                                        className={`btn-status btn-contacted ${selectedOrder.status === 'contacted' ? 'active' : ''}`}
                                        onClick={() => handleUpdateStatus(selectedOrder.order_id, 'contacted')}>
                                        Đã liên hệ
                                    </button>
                                    <button 
                                        className={`btn-status btn-completed ${selectedOrder.status === 'completed' ? 'active' : ''}`}
                                        onClick={() => handleUpdateStatus(selectedOrder.order_id, 'completed')}>
                                        Hoàn thành
                                    </button>
                                    <button 
                                        className={`btn-status btn-cancelled ${selectedOrder.status === 'cancelled' ? 'active' : ''}`}
                                        onClick={() => handleUpdateStatus(selectedOrder.order_id, 'cancelled')}>
                                        Đã hủy
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrderManager;

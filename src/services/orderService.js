import http from './http';

const orderService = {
    createOrder: async (orderData) => {
        const response = await http.post('/orders', orderData);
        return response.data;
    },
    getAllOrders: async () => {
        const response = await http.get('/orders');
        return response.data;
    },
    updateOrderStatus: async (id, status) => {
        const response = await http.put(`/orders/${id}/status`, { status });
        return response.data;
    },
    deleteOrder: async (id) => {
        const response = await http.delete(`/orders/${id}`);
        return response.data;
    }
};

export default orderService;

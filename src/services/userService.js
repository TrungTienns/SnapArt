import http from './http';

const userService = {
    getAllUsers: () => http.get('/users'),
    updateUserRole: (id, role) => http.put(`/users/${id}/role`, { role }),
};

export default userService;

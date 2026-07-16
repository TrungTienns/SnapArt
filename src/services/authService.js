import http from './http';

const authService = {
  login: (data) => http.post('/auth/login', data),
  register: (data) => http.post('/auth/register', data)
};

export default authService;

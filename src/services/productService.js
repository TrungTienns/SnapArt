import http from './http';

const productService = {
  getAll: () => {
    const url = '/products';
    return http.get(url);
  },
  
  getById: (id) => {
    const url = `/products/${id}`;
    return http.get(url);
  },
  
  create: (data) => {
    const url = '/products';
    return http.post(url, data, {
      headers: {
        'Content-Type': undefined
      }
    });
  },

  update: (id, data) => {
    const url = `/products/${id}`;
    return http.put(url, data, {
      headers: {
        'Content-Type': undefined
      }
    });
  },

  delete: (id) => {
    const url = `/products/${id}`;
    return http.delete(url);
  }
};

export default productService;

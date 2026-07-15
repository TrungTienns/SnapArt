import http from './http';

const blogService = {
  getAll: () => {
    const url = '/blogs';
    return http.get(url);
  },

  getBySlug: (slug) => {
    const url = `/blogs/${slug}`;
    return http.get(url);
  },

  create: (formData) => {
    const url = '/blogs';
    return http.post(url, formData, {
      headers: {
        'Content-Type': undefined
      }
    });
  },

  update: (id, formData) => {
    const url = `/blogs/${id}`;
    return http.put(url, formData, {
      headers: {
        'Content-Type': undefined
      }
    });
  },

  delete: (id) => {
    const url = `/blogs/${id}`;
    return http.delete(url);
  }
};

export default blogService;

import http from './http';

const categoryService = {
    getAll: () => {
        return http.get('/categories');
    },
    
    getById: (id) => {
        return http.get(`/categories/${id}`);
    },

    create: (categoryData) => {
        return http.post('/categories', categoryData, {
            headers: {
                'Content-Type': undefined
            }
        });
    },

    update: (id, categoryData) => {
        return http.put(`/categories/${id}`, categoryData, {
            headers: {
                'Content-Type': undefined
            }
        });
    },

    delete: (id) => {
        return http.delete(`/categories/${id}`);
    }
};

export default categoryService;

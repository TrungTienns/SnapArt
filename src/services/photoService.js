import http from './http';

const photoService = {
    getAllPhotos: () => {
        return http.get('/photos');
    },

    uploadPhoto: (formData) => {
        return http.post('/photos', formData, {
            headers: {
                'Content-Type': undefined, // Let browser set multipart/form-data
            },
        });
    },

    deletePhoto: (id) => {
        return http.delete(`/photos/${id}`);
    }
};

export default photoService;

import api from '../config/api';

export default {
    createSession() {
        return api.get('/sanctum/csrf-cookie');
    },
    login(data) {
        return api.post('/api/login', data);
    },
    register(data) {
        return api.post('/api/register', data);
    },
    forgot(data) {
        return api.post('/api/forgot-password', data);
    },
    reset(data) {
        return api.post('/api/reset-password', data);
    },
    logout() {
        return api.delete('/api/logout');
    },
};
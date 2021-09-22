import api from '../config/api';
import {IUserLoginData, IUserRegisterData, IUserForgotPasswordData, IUserResetPasswordData} from '../models/User';

export default {
    createSession() {
        return api.get('/sanctum/csrf-cookie');
    },
    login(data: IUserLoginData) {
        return api.post('/api/login', data);
    },
    register(data: IUserRegisterData) {
        return api.post('/api/register', data);
    },
    forgot(data: IUserForgotPasswordData) {
        return api.post('/api/forgot-password', data);
    },
    reset(data: IUserResetPasswordData) {
        return api.post('/api/reset-password', data);
    },
    logout() {
        return api.delete('/api/logout');
    },
};
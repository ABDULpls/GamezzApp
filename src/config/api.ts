import axios from 'axios';
import {USER_STORAGE_KEY} from './config';
import router from '../router/router';

const api = axios.create({
    withCredentials: true,
});

api.interceptors.request.use(request => {
    request.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    request.headers.common['Accept'] = 'application/json';
    request.headers.common['Content-Type'] = 'application/json';

    return request;
});

api.interceptors.response.use(
    response => { return response; },
    async error => {
        if (error.response?.status === 401) {
            localStorage.removeItem(USER_STORAGE_KEY);

            if (router.currentRoute.name !== 'LoginPage') {
                window.location.reload();
            }
        }

        return Promise.reject(error.response.data.errors);
    }
);

export default api;

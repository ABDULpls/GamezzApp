import authApi from '../api/auth.api';
import {SET_USER} from './mutationTypes';
import {USER_STORAGE_KEY} from '../config/config';

localStorage.setItem(USER_STORAGE_KEY, JSON.stringify({
    id: 1,
    name: 'po5epT',
    email: 'megastorm87@mail.ru',
    level: 56,
    rating: 4890,
    crystals: 303848,
}));

const initialUser = localStorage[USER_STORAGE_KEY]
    ? JSON.parse(localStorage.getItem(USER_STORAGE_KEY) || '[]')
    : null;

export default {
    state() {
        return {
            user: initialUser,
        }
    },

    getters: {
        isAuthenticated: state => state.user !== null,
    },

    mutations: {
        [SET_USER](state, user) {
            state.user = user;
        }
    },

    actions: {
        async login({commit}, data) {
            await authApi.createSession();
            const response = await authApi.login(data);

            commit(SET_USER, response.data.payload);

            localStorage[USER_STORAGE_KEY] = JSON.stringify(response.data.payload);
        },

        async register({commit, dispatch}, data) {
            const response = await authApi.register(data);

            commit(SET_USER, response.data.payload);

            localStorage[USER_STORAGE_KEY] = JSON.stringify(response.data.payload);
        },

        async logout({commit}) {
            await authApi.logout();
            commit(SET_USER, null);

            localStorage.removeItem(USER_STORAGE_KEY);
        },

        async forgot({commit}, data) {
            const response = await authApi.forgot(data);

            return Promise.resolve(response.data.message);
        },

        async reset({commit}, data) {
            const response = await authApi.reset(data);

            return Promise.resolve(response.data.message);
        }
    },
}
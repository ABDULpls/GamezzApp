import authApi from '../api/auth.api';
import {SET_USER} from './mutationTypes';
import {USER_STORAGE_KEY} from '../config/config';

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
            /*await authApi.createSession();
            const response = await authApi.login(data);

            commit(SET_USER, response.data.payload);

            localStorage[USER_STORAGE_KEY] = JSON.stringify(response.data.payload);*/

            localStorage.setItem(USER_STORAGE_KEY, JSON.stringify({
                id: 1,
                name: 'po5epT',
                email: 'megastorm87@mail.ru',
                level: 56,
                rating: 4890,
                games: 818,
                wins: 738,
                winRate: '90,22%',
                crystals: 303848,
                avatar: 'https://cdn.gamezz.io/avatars/d/s/32719_180x180.png',
                place: 22,
            }));

            return true;
        },

        async register({commit, dispatch}, data) {
            const response = await authApi.register(data);

            commit(SET_USER, response.data.payload);

            localStorage[USER_STORAGE_KEY] = JSON.stringify(response.data.payload);
        },

        async logout({commit}) {
            /*await authApi.logout();
            commit(SET_USER, null);

            localStorage.removeItem(USER_STORAGE_KEY);*/

            localStorage.removeItem(USER_STORAGE_KEY);

            return true;
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
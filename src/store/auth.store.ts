import {Commit, Dispatch} from 'vuex';
import authApi from '../api/auth.api';
import {SET_USER} from './mutationTypes';
import {USER_STORAGE_KEY} from '../config/config';
import {
    IUser,
    IUserForgotPasswordData,
    IUserLoginData,
    IUserRegisterData,
    IUserResetPasswordData
} from '../models/User';

const initialUser = localStorage[USER_STORAGE_KEY]
    ? JSON.parse(localStorage.getItem(USER_STORAGE_KEY) || '[]')
    : null;

interface IAuthState {
    user: IUser,
}

export default {
    state(): IAuthState {
        return {
            user: initialUser as IUser,
        }
    },

    getters: {
        isAuthenticated: (state: IAuthState) => state.user !== null,
    },

    mutations: {
        [SET_USER](state: IAuthState, user: IUser) {
            state.user = user;
        }
    },

    actions: {
        async login({commit}: {commit: Commit}, data: IUserLoginData) {
            await authApi.createSession();
            const response = await authApi.login(data);

            commit(SET_USER, response.data.payload);

            localStorage[USER_STORAGE_KEY] = JSON.stringify(response.data.payload);
        },

        async register({commit, dispatch}: {commit: Commit, dispatch: Dispatch}, data: IUserRegisterData) {
            const response = await authApi.register(data);

            commit(SET_USER, response.data.payload);

            localStorage[USER_STORAGE_KEY] = JSON.stringify(response.data.payload);
        },

        async logout({commit}: {commit: Commit}) {
            await authApi.logout();
            commit(SET_USER, null);

            localStorage.removeItem(USER_STORAGE_KEY);
        },

        async forgot({commit}: {commit: Commit}, data: IUserForgotPasswordData) {
            const response = await authApi.forgot(data);

            return Promise.resolve(response.data.message);
        },

        async reset({commit}: {commit: Commit}, data: IUserResetPasswordData) {
            const response = await authApi.reset(data);

            return Promise.resolve(response.data.message);
        }
    },
}
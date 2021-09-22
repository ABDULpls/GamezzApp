import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import store from '../store/store';
import authRoutes from './auth.routes';
import mainRoutes from './main.routes';

import {IUser} from '../models/User';

const routes: RouteRecordRaw[] = [
    ...mainRoutes,
    ...authRoutes,
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const guestRoutesNames: string[] = ['LoginPage', 'RegisterPage', 'ForgotPasswordPage', 'CheckEmailPage'];

    const authUser: IUser = store.state.auth.user;
    const isAuthenticated: boolean = store.getters.isAuthenticated;

    if (isAuthenticated) {
        if (guestRoutesNames.includes(to.name)) {
            next({name: 'HomePage'});
        } else {
            next();
        }
    } else if (!guestRoutesNames.includes(to.name)) {
        next({name: 'LoginPage'});
    } else {
        next();
    }
});

export default router;
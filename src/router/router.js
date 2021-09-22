import {createRouter, createWebHistory} from 'vue-router';
import store from '../store/store';
import authRoutes from './auth.routes';
import mainRoutes from './main.routes';

const routes = [
    ...mainRoutes,
    ...authRoutes,
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const guestRoutesNames = ['LoginPage', 'RegisterPage', 'ForgotPasswordPage', 'CheckEmailPage'];

    const authUser = store.state.auth.user;
    const isAuthenticated = store.getters.isAuthenticated;

    console.log(authUser);

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
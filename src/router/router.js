import {createRouter, createWebHistory} from 'vue-router';
import store from '../store/store';
import authRoutes from './auth.routes';
import mainRoutes from './main.routes';
import simpleRoutes from './simple.routes';

const routes = [
	...mainRoutes,
	...authRoutes,
	...simpleRoutes,
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});
router.beforeResolve(to => {
	setTimeout(() => {
		store.dispatch("setIsGamePage", !!to.meta.isGamePage);
		store.dispatch("setIsInGame", !!to.meta.isInGame);
		store.dispatch("setHideMenu", !!to.meta.hideMenu);
	}, 0);
});
router.afterEach((to,from) => {
});
router.beforeEach((to, from, next) => {
	const guestRoutesNames = ['LoginPage', 'RegisterPage', 'ForgotPasswordPage', 'CheckEmailPage'];
	const authUser = store.state.auth.user;
	const isAuthenticated = store.getters.isAuthenticated;

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
